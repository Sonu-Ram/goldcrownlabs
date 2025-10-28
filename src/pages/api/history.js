import pool from "./mysql";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const conn = await pool.getConnection();
    try {
      const [rows] = await conn.query(
        "SELECT id, input_text, summary, created_at FROM summaries ORDER BY created_at DESC"
      );
      res.status(200).json(rows);
    } finally {
      conn.release();
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch history" });
  }
}
