import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY2;

async function debugGemini() {
  console.log("\n🕵️ STARTING RAW DIAGNOSTIC...");
  
  if (!API_KEY) {
    console.error("❌ ERROR: No API Key found in .env");
    return;
  }

  console.log(`🔑 Testing Key: ${API_KEY.substring(0, 8)}...`);

  // 1. Direct REST Call to Google (Bypasses SDK entirely)
  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      console.error(`\n❌ API REQUEST FAILED: ${response.status} ${response.statusText}`);
      console.error("Error Details:", JSON.stringify(data, null, 2));
      return;
    }

    // 2. Success! List what we found.
    console.log("\n✅ CONNECTION SUCCESSFUL! Here are the models your key can see:");
    const models = data.models || [];
    
    // Filter and print model names
    const available = models
      .map(m => m.name.replace("models/", ""))
      .filter(name => name.includes("gemini"));

    console.log("--------------------------------");
    console.log(available.join("\n"));
    console.log("--------------------------------");

  } catch (err) {
    console.error("❌ NETWORK ERROR:", err.message);
  }
}

debugGemini();