import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;

// Lazy initialization of Gemini AI
function getGeminiAI(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("GEMINI_API_KEY environment variable is missing.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
}

// System prompt grounding the AI assistant as Mubaarakah Rashid's AI Concierge
const AI_SYSTEM_INSTRUCTION = `
You are the official AI Collaboration Assistant for Mubaarakah Salwat Rashid.
Mubaarakah is a Frontend Developer, Founder of Umoja Foundation, and Founder of Thamani Cosmetics, based in Accra, Ghana.

Key Information about Mubaarakah:
- Education: B.S. in Public Administration from Ghana Institute of Management and Public Administration (GIMPA, 2017–2021).
- Frontend & Tech Stack: HTML5, CSS3, Tailwind CSS, JavaScript, React, TypeScript, Python (FastAPI / REST APIs), Swift (SwiftUI for iOS prototyping), Git/GitHub (Mubby-K), Figma design prototyping.
- Umoja Foundation: Founder & Executive Director. A nonprofit dedicated to preventing early & forced child marriage in Ghana, promoting girls' education, and running the "Safe Schools, Safe Girls" sanitation & water audit platform (audited 48+ schools, impacted 2,400+ girls).
- Thamani Cosmetics: Founder & Formulator. Swahili for "value/worth". An African heritage luxury skincare brand using cold-pressed rapeseed oil, unrefined Ghanaian shea butter, and African botanicals. Core products: Timbuktu Glow Body Butter, Velvet Butter Blend, Repair Facial Oil, Repair Body Oil.
- Current Goals: Professional frontend developer roles & contracts, growing Umoja Foundation's Safe Schools program, scaling Thamani Cosmetics across Africa & globally, and pursuing law/business/cosmetic science advanced education.
- Contact: Accra, Ghana | Email: mubby.thamani@gmail.com | Phone: +233 55 843 3835 | GitHub: Mubby-K.

Instructions for your responses:
- Be warm, professional, articulate, and inspiring.
- Answer user queries directly and highlight Mubaarakah's technical, entrepreneurial, and impact expertise.
- If asked about hiring her for frontend or software development (React, Python, Swift), affirm her availability and encourage contacting her directly.
- If asked about Umoja Foundation or Thamani Cosmetics, provide accurate details and partnership opportunities.
- Keep responses concise (150-250 words max) with markdown formatting when helpful.
`;

// API Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// AI Chat Endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== "string") {
      res.status(400).json({ error: "Message is required and must be a string." });
      return;
    }

    const ai = getGeminiAI();
    if (!ai) {
      // Fallback response if API key is not configured yet
      res.json({
        reply: `Thank you for reaching out! Mubaarakah is available for Frontend Web projects, Python API development, Umoja Foundation partnerships, and Thamani Cosmetics wholesale inquiries. You can email her directly at **mubby.thamani@gmail.com** or call **+233 55 843 3835**!`,
      });
      return;
    }

    const contents: any[] = [];
    
    // Add past history if provided
    if (Array.isArray(history)) {
      history.slice(-4).forEach((h: any) => {
        if (h.sender === "user") {
          contents.push({ role: "user", parts: [{ text: h.text }] });
        } else if (h.sender === "ai") {
          contents.push({ role: "model", parts: [{ text: h.text }] });
        }
      });
    }

    // Add current user prompt
    contents.push({ role: "user", parts: [{ text: message }] });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents,
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    const replyText = response.text || "Thank you for asking! How else can I assist you regarding Mubaarakah's portfolio?";

    res.json({ reply: replyText });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({
      error: "Failed to generate AI response.",
      reply: "Thank you for reaching out! Mubaarakah is happy to discuss your request directly via email at **mubby.thamani@gmail.com** or phone at **+233 55 843 3835**.",
    });
  }
});

// Contact Form Endpoint
app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    res.status(400).json({ error: "Name, email, and message are required fields." });
    return;
  }

  console.log("Contact Form Submission Received:", { name, email, subject, message });

  res.json({
    success: true,
    message: `Thank you, ${name}! Your message regarding "${subject || "General Inquiry"}" has been submitted successfully. Mubaarakah will get back to you shortly.`,
    receivedAt: new Date().toISOString(),
  });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
