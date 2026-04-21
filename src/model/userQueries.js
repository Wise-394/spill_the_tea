import { pool } from "../configs/databaseConfig.js";

export const getUserByUsername = async (username) => {
  try {
    const { rows } = await pool.query(
      `SELECT * FROM users WHERE username = $1 LIMIT 1;`,
      [username],
    );
    return rows[0];
  } catch (err) {
    console.error("unable to get user by username, userQueries.js", err);
  }
};

export const getUserById = async (id) => {
  try {
    const { rows } = await pool.query(
      `SELECT * FROM users WHERE id = $1 LIMIT 1;`,
      [id],
    );
    return rows[0];
  } catch (err) {
    console.error("unable to get user id, userQueries.js", err);
  }
};

export const insertUser = async (username, password) => {
  try {
    await pool.query(
      `INSERT INTO users (username, password, member) VALUES ($1, $2, false)`,
      [username, password],
    );
  } catch (err) {
    console.error(
      "unable to insert username and password, userQueries.js",
      err,
    );
  }
};

export const enableMemberOnUserById = async (id) => {
  try {
    await pool.query(`UPDATE users SET member = true WHERE id = $1`, [id]);
  } catch (err) {
    console.error("unable to member the user, userQueries.js", err);
  }
};
