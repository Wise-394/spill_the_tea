import { pool } from "../configs/databaseConfig.js";

export const userQueries = {
  getUser: async (username) => {
    try {
      const { rows } = await pool.query(
        `SELECT username, password FROM users WHERE username = $1 LIMIT 1;`,
        [username],
      );
      return rows[0];
    } catch (err) {
      console.error("unable to get username and password, userQueries.js", err);
    }
  },
};
