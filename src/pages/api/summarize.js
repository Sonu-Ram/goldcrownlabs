import pool from "./mysql";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Text is required" });

  try {
    // Call OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant that summarizes text." },
          { role: "user", content: text },
        ],
        max_tokens: 150,
      }),
    });

    if (!response.ok) {
      const errData = await response.json();
      console.error(errData);
      return res.status(500).json({ error: "Failed to summarize text" });
    }

    const data = await response.json();
    const summary = data.choices[0].message.content.trim();

    // Save to MySQL
    const conn = await pool.getConnection();
    try {
      await conn.query(
        "INSERT INTO summaries (input_text, summary) VALUES (?, ?)",
        [text, summary]
      );
    } finally {
      conn.release();
    }

    res.status(200).json({ summary });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to summarize text" });
  }
}







// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   const { text } = req.body;

//   if (!text) {
//     return res.status(400).json({ error: "Text is required" });
//   }

//   try {
//     const response = await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer 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`, // Keep your key in .env.local
//       },
//       body: JSON.stringify({
//         model: "gpt-3.5-turbo",
//         messages: [
//           { role: "system", content: "You are a helpful assistant that summarizes text." },
//           { role: "user", content: text }
//         ],
//         max_tokens: 150,
//       }),
//     });

//     if (!response.ok) {
//       const errData = await response.json();
//       console.error(errData);
//       return res.status(500).json({ error: "Failed to summarize text" });
//     }

//     const data = await response.json();
//     const summary = data.choices[0].message.content.trim();

//     res.status(200).json({ summary });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ error: "Failed to summarize text" });
//   }
// }
