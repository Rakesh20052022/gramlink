import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ENV } from "../config/env.js";

const router = express.Router();
const genAI = new GoogleGenerativeAI(ENV.GEMINI_API_KEY);

router.post("/", async (req, res) => {
  try {
    const { message } = req.body || {};

    if (typeof message !== "string" || message.trim().length === 0) {
      return res
        .status(400)
        .json({ error: "`message` must be a non-empty string" });
    }

    if (message.length > 5000) {
      return res
        .status(400)
        .json({ error: "`message` is too long (max 5000 chars)" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent(message);

    // SDK result shapes may vary; defensively extract the text
    let reply = null;
    try {
      if (result?.response?.text) reply = result.response.text();
      else if (typeof result === "string") reply = result;
      else reply = JSON.stringify(result);
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
