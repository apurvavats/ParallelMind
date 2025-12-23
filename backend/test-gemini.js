import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

async function checkModels() {
  const key = process.env.GEMINI_API_KEY2;
  if (!key) {
    console.error("❌ ERROR: GEMINI_API_KEY is missing from .env file");
    return;
  }

  console.log("🔑 Using API Key:", key.substring(0, 8) + "...");

  const genAI = new GoogleGenerativeAI(key);

  try {
    // 1. Check Package Version (rough check)
    console.log("📦 SDK Check: Initialization successful.");

    // 2. Ask Google what models are available for this Key
    console.log("📡 Connecting to Google to list available models...");
    // Note: If this fails, your API Key is the problem.
    // There isn't a direct listModels method exposed easily in all SDK versions, 
    // so we will test the most common one directly.
    
    const modelName = "gemini-1.5-flash";
    console.log(`🧪 Testing generation with model: '${modelName}'...`);
    
    const model = genAI.getGenerativeModel({ model: modelName });
    const result = await model.generateContent("Hello, are you working?");
    const response = await result.response;
    
    console.log("✅ SUCCESS! The API is working.");
    console.log("🤖 AI Replied:", response.text());

  } catch (error) {
    console.error("\n❌ DIAGNOSTIC FAILED");
    console.error("----------------------");
    console.error("Error Message:", error.message);
    
    if (error.message.includes("404")) {
      console.error("\n👉 DIAGNOSIS: The Model Name is rejected.");
      console.error("   This often happens if your API Key is restricted or the SDK is very old.");
    } else if (error.message.includes("API_KEY")) {
      console.error("\n👉 DIAGNOSIS: Your API Key is invalid.");
    }
  }
}

checkModels();