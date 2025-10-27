import pool from "../mysql";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, requirements } = req.body;

  if (!email || !Array.isArray(requirements) || requirements.length === 0) {
    return res.status(400).json({ error: "Email and requirements are required" });
  }

  const conn = await pool.getConnection();

  try {
    const [customerResult] = await conn.query(
      "INSERT INTO customers (CustomerEmail) VALUES (?)",
      [email]
    );

    const customerId = customerResult.insertId;

    const values = requirements.map((reqId) => [customerId, reqId]);
    await conn.query(
      "INSERT INTO customersrequirments (CustomerNo, MasterRequirmentNo) VALUES ?",
      [values]
    );

    // const transporter = nodemailer.createTransport({
    //   host: process.env.EMAIL_HOST,
    //   port: process.env.EMAIL_PORT,
    //   secure: process.env.EMAIL_SECURE === "true", // true for 465, false for 587
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });

    //  const [labelsRows] = await conn.query(
    //   `SELECT MasterRequirmentLable 
    //    FROM masterrequirments 
    //    WHERE MasterRequirmentID IN (?)`,
    //   [requirements]
    // );

    // const labels = labelsRows.map((row) => row.MasterRequirmentLable);

    //  const htmlBody = `
    //   <div style="font-family: Arial, sans-serif; background-color: #f8f9fa; padding: 20px;">
    //     <div style="max-width: 600px; margin: auto; background: white; border-radius: 8px; padding: 20px;">
    //       <img src="https://goldcrownlabs.com/logo.png" alt="GoldCrown Labs" style="width:150px; margin-bottom: 20px;" />
    //       <h2 style="color:#1a1a1a;">Thank you for contacting <span style="color:#ff9900;">GoldCrown Labs</span>!</h2>
    //       <p>We’ve received your project request with the following details:</p>
    //       <p><strong>Email:</strong> ${email}</p>
    //       <p><strong>Selected Services:</strong></p>
    //       <ul style="padding-left: 20px;">
    //         ${labels.map((label) => `<li>${label}</li>`).join("")}
    //       </ul>
    //       <p>Our team will reach out to you shortly to discuss your project.</p>
    //       <br>
    //       <p style="color: #555;">Best,<br>GoldCrown Labs Team</p>
    //     </div>
    //   </div>
    // `;

    // await transporter.sendMail({
    //   from: `"GoldCrown Labs" <${process.env.EMAIL_USER}>`,
    //   to: email,
    //   subject: "We’ve received your project request 🚀",
    //   html: htmlBody,
    // });

    // console.log(`✅ Email sent to ${email}`);

    res.status(200).json({
      message: "Customer and requirements saved successfully",
      customerId,
    });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ error: "Failed to insert customer" });
  } finally {
    conn.release();
  }
}
