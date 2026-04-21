import { pool } from "../configs/databaseConfig.js";

export const insertMessage = async (title, content, user_id) => {
  try {
    await pool.query(
      "INSERT INTO messages(title, content, timestamp, user_id) VALUES  ($1, $2, NOW(), $3)",
      [title, content, user_id],
    );
  } catch (err) {
    console.error("unable to insert message, messageQueries.js", err);
  }
};

export const getAllMessages = async () => {
  try {
    const { rows } = await pool.query(" SELECT * FROM messages");
    // TODO: join table to get username of message
    return rows;
  } catch (err) {
    console.error("unable to get message, messageQueries.js", err);
  }
};

export const deleteMessageById = async (id) => {
  try {
    await pool.query("DELETE FROM messages WHERE id = $1", [id]);
  } catch (err) {
    console.error("unable to delete message, messageQueries.js", err);
  }
};
