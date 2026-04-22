import { pool } from "../configs/databaseConfig.js";

export default async function createTablesIfNotExists() {
  await createUsersTable();
  await createMessagesTable();
  await seedMessages();
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
  }
}

async function createMessagesTable() {
  try {
    await pool.query(`CREATE TABLE IF NOT EXISTS messages (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        timestamp DATE NOT NULL,
        user_id INT REFERENCES users(id) ON DELETE CASCADE
        );`);
  } catch (err) {
    console.error("Unable to create messages table, initDatabase.js", err);
    throw err;
  }
}

async function seedMessages() {
  try {
    const { rows } = await pool.query("SELECT COUNT(*) FROM messages");
    if (parseInt(rows[0].count) > 0) return;

    await pool.query(`
  INSERT INTO messages (title, content, timestamp, user_id) VALUES
  ('The "Haunted" Villa in Tuscany', 'The American couple who bought the villa next door fled in the middle of the night. Left their luggage and their car. The locals won''t say why, but the lights are still flickering.', '2025-05-10', NULL),
  ('Spotted at Seoul Incheon Airport', 'A disgraced CEO was seen boarding a cargo plane to a non-extradition country. He wasn''t alone—he had the Senator''s daughter with him. Both looked terrified.', '2025-06-14', NULL),
  ('The London Underground Secret', 'I found a door in the Tube station that leads to a fully furnished luxury apartment. Someone has been living under the city for years. I saw a tuxedo hanging in the closet.', '2025-07-02', NULL),
  ('The Rio Carnival Sabotage', 'The lead dancer didn''t "fall" her heel was professionally sawed halfway through. I saw the rival schools choreographer leaving the dressing room with a toolkit.', '2025-08-19', NULL),
  ('The "Quiet" Village in the Alps', 'Every resident in this town goes inside at exactly 8:00 PM and locks their doors. Last night, I stayed out to see why. I wish I hadn''t.', '2025-09-05', NULL);
`);

    console.log("Seeded initial messages");
  } catch (err) {
    console.error("Unable to seed messages, initDatabase.js", err);
  }
}
