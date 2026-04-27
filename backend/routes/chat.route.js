import express from "express";
import Groq from "groq-sdk";
import { ENV } from "../config/env.js";

const router = express.Router();

// 🔥 Initialize Groq
const groq = new Groq({
  apiKey: ENV.GROQ_API_KEY,
});

router.post("/", async (req, res) => {
  try {
    const { message } = req.body || {};

    if (typeof message !== "string" || message.trim().length === 0) {
      return res
        .status(400)
        .json({ error: "message must be a non-empty string" });
    }

    if (message.length > 5000) {
      return res
        .status(400)
        .json({ error: "message is too long (max 5000 chars)" });
    }

    // 🔥 Groq API Call
    const result = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant", // 🔥 updated to current model
      messages: [{ role: "user", content: message }],
    });

    // ✅ Extract response (same logic style as your code)
    let reply = null;
    try {
      if (result?.choices?.[0]?.message?.content) {
        reply = result.choices[0].message.content;
      } else if (typeof result === "string") {
        reply = result;
      } else {
        reply = JSON.stringify(result);
      }
    } catch (e) {
      reply = String(result);
    }

    res.json({ reply });
  } catch (err) {
    console.error("Chat route error:", err?.message || err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
