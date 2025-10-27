import pool from "../mysql";

export default async function handler(req, res) {

      console.log("pool:", pool);
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const conn = await pool.getConnection();
      console.log("conn:", conn);
    try {
      const [rows] = await conn.query(
        "SELECT `MasterRequirmentID`, `MasterRequirmentLable`, `MasterRequirmentIcon` FROM `masterrequirments` WHERE MasterRequirmentStatus = 1 ORDER BY MasterRequirmentID ASC"
      );
      console.log("rows:", rows);
      res.status(200).json(rows);
    } finally {
      conn.release();
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch masterrequirements" });
  }
}
