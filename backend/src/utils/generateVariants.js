// // backend/src/utils/generateVariants.js
// // import GenAI from "@google/genai";
// // i



// // backend/src/utils/generateVariants.js
// // import { GoogleGenerativeAI } from "@google/generative-ai";
// // import dotenv from "dotenv";
// // dotenv.config();

// // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// // export async function generateVariants(idea) {
// //   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// //   const prompt = `
// // You are an expert Product Strategist + UX Architect + Business Ideation AI.

// // Your task:
// // Transform the following idea into EXACTLY 5 UNIQUE PRODUCT DIRECTIONS.

// // Each variant must:
// // - Be fundamentally different in approach.
// // - Have different target persona OR market OR business model.
// // - Be detailed and structured.

// // Return JSON ONLY in exactly this structure:

// // {
// //   "variants": [
// //     {
// //       "name": "string",
// //       "summary": "short summary sentence",
// //       "full_plan": {
// //         "persona": "string",
// //         "problem": "string",
// //         "core_features": ["a", "b", "c"],
// //         "user_flow": ["step1", "step2"],
// //         "mvp_plan": ["task1", "task2"],
// //         "business_model": "string",
// //         "tagline": "string"
// //       }
// //     }
// //   ]
// // }

// // Idea: "${idea}"
// // `;

// //   const result = await model.generateContent(prompt);
// //   const text = result.response.text();

// //   return JSON.parse(text);
// // }





// // backend/src/utils/generateVariants.js
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import dotenv from "dotenv";
// dotenv.config();

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// export async function generateVariants(idea) {
//   try {
//     const model = genAI.getGenerativeModel({
//       model: "gemini-2.5-flash",
//     });

//     const prompt = `
// You are an expert Product Strategist + UX Architect + Startup Consultant.

// Turn this idea into EXACTLY 5 completely different product directions.

// Return JSON ONLY:

// {
//   "variants": [
//     {
//       "name": "string",
//       "summary": "short 1-line pitch",
//       "full_plan": {
//         "persona": "string",
//         "problem": "string",
//         "core_features": ["a","b","c"],
//         "user_flow": ["step1","step2"],
//         "mvp_plan": ["task1","task2"],
//         "business_model": "string",
//         "tagline": "string"
//       }
//     }
//   ]
// }

// Idea: "${idea}"
// `;

//     const result = await model.generateContent(prompt);
//     const text = result.response.text();

//     return JSON.parse(text);

//   } catch (e) {
//     console.error("SERVER ERROR:", e);
//     throw new Error("Failed to generate variants");
//   }
// }



// backend/src/utils/generateVariants.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function generateVariants(idea) {
  try {
    const model = genAI.getGenerativeModel({
      // FIX 1: Using the correct, modern alias for the model
      model: "gemini-2.5-flash",
    });

    const prompt = `
You are an expert Product Strategist + UX Architect + Startup Consultant.

Turn this idea into EXACTLY 5 completely different product directions.

---
CRITICAL RULE: RESPONSE MUST BE PURE JSON. DO NOT INCLUDE MARKDOWN BACKTICKS (\`\`\`) OR ANY EXPLANATORY TEXT.
---

Return JSON ONLY:

{
  "variants": [
    {
      "name": "string",
      "summary": "short 1-line pitch",
      "full_plan": {
        "persona": "string",
        "problem": "string",
        "core_features": ["a","b","c"],
        "user_flow": ["step1","step2"],
        "mvp_plan": ["task1","task2"],
        "business_model": "string",
        "tagline": "string"
      }
    }
  ]
}

Idea: "${idea}"
`;

    const result = await model.generateContent(prompt);
    let text = result.response.text(); // Use 'let' for modification

    // FIX 2: Robustly cleaning the response to ensure it's valid JSON
    // Trim surrounding whitespace/newlines
    text = text.trim(); 
    
    // Check and remove the starting markdown wrapper (e.g., '```json' or '```')
    if (text.startsWith('```json')) {
      text = text.substring(7); // Remove '```json'
    } else if (text.startsWith('```')) {
      text = text.substring(3); // Remove '```'
    }
    
    // Check and remove the closing markdown wrapper
    if (text.endsWith('```')) {
      text = text.substring(0, text.length - 3);
    }
    
    // Final trim to ensure clean JSON for parsing
    text = text.trim(); 

    return JSON.parse(text);

  } catch (e) {
    console.error("SERVER ERROR:", e);
    // Re-throwing a custom error so the calling function can handle it gracefully
    throw new Error("Failed to generate variants"); 
  }
}