import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Find 5 real Google Maps reviews for the business 'Tax Harbour' located near 28.1552573, 80.4141246. Return them as a JSON array of objects with 'name', 'role' (e.g., 'Client'), 'feedback' (the review text), and 'image' (a placeholder like 'https://i.pravatar.cc/150?u=name').",
    config: {
      tools: [{ googleMaps: {} }],
    },
  });
  console.log(response.text);
}
run();
