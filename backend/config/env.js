import dotenv from "dotenv";
dotenv.config();

export const ENV = {
  GROQ_API_KEY: process.env.GROQ_API_KEY,
  PORT: process.env.PORT || 5000,
};
