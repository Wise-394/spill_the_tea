import { pool } from "../configs/databaseConfig.js";

export default async function createTablesIfNotExists() {
  await createUsersTable();
  await createMessagesTable();
}

async function createUsersTable() {
  try {
    await pool.query(`CREATE TABLE IF NOT EXISTS users (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        member BOOLEAN DEFAULT FALSE NOT NULL
        );`);
  } catch (err) {
    console.error("Unable to create users table, initDatabase.js", err);
    throw err;
  }
}

async function createMessagesTable() {
  try {
    await pool.query(`CREATE TABLE IF NOT EXISTS messages (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        title TEXT NOT NULL,
        timestamp DATE NOT NULL,
        user_id INT REFERENCES users(id) ON DELETE CASCADE
        );`);
  } catch (err) {
    console.error("Unable to create messages table, initDatabase.js", err);
    throw err;
  }
}
