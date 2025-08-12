import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/ask", async (req, res) => {
    try {
        const { question } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // ✅ updated model
        const result = await model.generateContent(question);
        res.json({ answer: result.response.text() });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: error.message || "Error generating answer",
        });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
