// // // // // // // // // // // // // // // // // // // backend/src/utils/callGeminiCanvas.js
// // // // // // // // // // // // // // // // // // import { GoogleGenerativeAI } from "@google/generative-ai";
// // // // // // // // // // // // // // // // // // import dotenv from "dotenv";
// // // // // // // // // // // // // // // // // // dotenv.config();

// // // // // // // // // // // // // // // // // // const KEY = process.env.GEMINI_API_KEY2;
// // // // // // // // // // // // // // // // // // if (!KEY) {
// // // // // // // // // // // // // // // // // //   console.warn("GEMINI_API_KEY2 not set. callGeminiCanvas will fail without it.");
// // // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // // const genAI = new GoogleGenerativeAI(KEY);

// // // // // // // // // // // // // // // // // // /**
// // // // // // // // // // // // // // // // // //  * Accepts a variant object (from DB) and asks Gemini to generate a small React app.
// // // // // // // // // // // // // // // // // //  * Returns { "package.json": "...", "src/App.jsx": "...", "index.html": "...", ... }
// // // // // // // // // // // // // // // // // //  */
// // // // // // // // // // // // // // // // // // export async function callGeminiCanvas(variant) {
// // // // // // // // // // // // // // // // // //   // Build a descriptive prompt with variant content.
// // // // // // // // // // // // // // // // // //   const prompt = `
// // // // // // // // // // // // // // // // // // You are an expert code generator. Produce a minimal but polished React app (Vite + React) with genz touch UI that showcases this product variant.
// // // // // // // // // // // // // // // // // // Return a JSON object ONLY mapping file paths to file contents, for example:
// // // // // // // // // // // // // // // // // // {
// // // // // // // // // // // // // // // // // //   "package.json": "...",
// // // // // // // // // // // // // // // // // //   "index.html": "...",
// // // // // // // // // // // // // // // // // //   "src/main.jsx": "...",
// // // // // // // // // // // // // // // // // //   "src/App.jsx": "...",
// // // // // // // // // // // // // // // // // //   "src/styles.css": "..."
// // // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // // Variant data:
// // // // // // // // // // // // // // // // // // ${JSON.stringify(variant, null, 2)}

// // // // // // // // // // // // // // // // // // Constraints:
// // // // // // // // // // // // // // // // // // - Use React + Vite conventions.
// // // // // // // // // // // // // // // // // // - Make the UI visually attractive (dark purple theme) and include a sample interactive element (a button that toggles a panel).
// // // // // // // // // // // // // // // // // // - Do not include any external assets that can't be fetched from a URL.
// // // // // // // // // // // // // // // // // // - Keep code self-contained and runnable with `npm install` and  `npm run dev`.
// // // // // // // // // // // // // // // // // // Return only valid JSON, no extra commentary.
// // // // // // // // // // // // // // // // // //   `;

// // // // // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // // // // //     const model = genAI.getGenerativeModel({ model: "gemini-2.5" }); // adjust model alias if needed
// // // // // // // // // // // // // // // // // //     const response = await model.generateContent(prompt, { temperature: 0.2 });
// // // // // // // // // // // // // // // // // //     let text = await response.response.text();
// // // // // // // // // // // // // // // // // //     text = text.trim();

// // // // // // // // // // // // // // // // // //     // Remove triple backticks if present
// // // // // // // // // // // // // // // // // //     if (text.startsWith("```json")) text = text.replace(/^```json\s*/, "");
// // // // // // // // // // // // // // // // // //     if (text.startsWith("```")) text = text.replace(/^```/, "");
// // // // // // // // // // // // // // // // // //     if (text.endsWith("```")) text = text.replace(/```$/, "");
// // // // // // // // // // // // // // // // // //     text = text.trim();

// // // // // // // // // // // // // // // // // //     const parsed = JSON.parse(text);

// // // // // // // // // // // // // // // // // //     // Validate parsed is object of file names -> strings
// // // // // // // // // // // // // // // // // //     if (!parsed || typeof parsed !== "object") {
// // // // // // // // // // // // // // // // // //       throw new Error("Gemini returned invalid JSON for files");
// // // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // // //     return parsed;
// // // // // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // // // // //     console.error("CALL GEMINI ERROR:", err);
// // // // // // // // // // // // // // // // // //     throw err;
// // // // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // // // }



// // // // // // // // // // // // // // // // // import { GoogleGenerativeAI } from "@google/generative-ai";
// // // // // // // // // // // // // // // // // import dotenv from "dotenv";
// // // // // // // // // // // // // // // // // dotenv.config();

// // // // // // // // // // // // // // // // // const KEY = process.env.GEMINI_API_KEY2;
// // // // // // // // // // // // // // // // // if (!KEY) {
// // // // // // // // // // // // // // // // //   console.warn("GEMINI_API_KEY2 not set. callGeminiCanvas will fail without it.");
// // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // const genAI = new GoogleGenerativeAI(KEY);

// // // // // // // // // // // // // // // // // /**
// // // // // // // // // // // // // // // // //  * Accepts a variant object (from DB) and asks Gemini to generate a small React app.
// // // // // // // // // // // // // // // // //  * Returns { "package.json": "...", "src/App.jsx": "...", "index.html": "...", ... }
// // // // // // // // // // // // // // // // //  */
// // // // // // // // // // // // // // // // // export async function callGeminiCanvas(variant) {
// // // // // // // // // // // // // // // // //   // --- FIX 1: Backticks escaped below ---
// // // // // // // // // // // // // // // // //   const prompt = `
// // // // // // // // // // // // // // // // // You are an expert code generator. Produce a minimal but polished React app (Vite + React) with genz touch UI that showcases this product variant.
// // // // // // // // // // // // // // // // // Return a JSON object ONLY mapping file paths to file contents, for example:
// // // // // // // // // // // // // // // // // {
// // // // // // // // // // // // // // // // //   "package.json": "...",
// // // // // // // // // // // // // // // // //   "index.html": "...",
// // // // // // // // // // // // // // // // //   "src/main.jsx": "...",
// // // // // // // // // // // // // // // // //   "src/App.jsx": "...",
// // // // // // // // // // // // // // // // //   "src/styles.css": "..."
// // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // Variant data:
// // // // // // // // // // // // // // // // // ${JSON.stringify(variant, null, 2)}

// // // // // // // // // // // // // // // // // Constraints:
// // // // // // // // // // // // // // // // // - Use React + Vite conventions.
// // // // // // // // // // // // // // // // // - Make the UI visually attractive (dark purple theme) and include a sample interactive element (a button that toggles a panel).
// // // // // // // // // // // // // // // // // - Do not include any external assets that can't be fetched from a URL.
// // // // // // // // // // // // // // // // // - Keep code self-contained and runnable with \`npm install\` and \`npm run dev\`.
// // // // // // // // // // // // // // // // // Return only valid JSON, no extra commentary.
// // // // // // // // // // // // // // // // //   `;

// // // // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // // // //     // --- FIX 2: Set config here, and use a standard model name (e.g. 1.5-flash) ---
// // // // // // // // // // // // // // // // //     // Note: "gemini-2.5" may not exist yet. Using 'gemini-1.5-flash' or 'gemini-1.5-pro' is safer.
// // // // // // // // // // // // // // // // //     const model = genAI.getGenerativeModel({ 
// // // // // // // // // // // // // // // // //         model: "gemini-2.5-flash", 
// // // // // // // // // // // // // // // // //         generationConfig: { temperature: 0.2 } 
// // // // // // // // // // // // // // // // //     });

// // // // // // // // // // // // // // // // //     const result = await model.generateContent(prompt);
// // // // // // // // // // // // // // // // //     const response = await result.response;
// // // // // // // // // // // // // // // // //     let text = response.text(); 
    
// // // // // // // // // // // // // // // // //     text = text.trim();

// // // // // // // // // // // // // // // // //     // Remove triple backticks if present (Markdown stripping)
// // // // // // // // // // // // // // // // //     if (text.startsWith("```json")) text = text.replace(/^```json\s*/, "");
// // // // // // // // // // // // // // // // //     if (text.startsWith("```")) text = text.replace(/^```/, "");
// // // // // // // // // // // // // // // // //     if (text.endsWith("```")) text = text.replace(/```$/, "");
// // // // // // // // // // // // // // // // //     text = text.trim();

// // // // // // // // // // // // // // // // //     const parsed = JSON.parse(text);

// // // // // // // // // // // // // // // // //     // Validate parsed is object of file names -> strings
// // // // // // // // // // // // // // // // //     if (!parsed || typeof parsed !== "object") {
// // // // // // // // // // // // // // // // //       throw new Error("Gemini returned invalid JSON for files");
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     return parsed;
// // // // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // // // //     console.error("CALL GEMINI ERROR:", err);
// // // // // // // // // // // // // // // // //     throw err;
// // // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // // }


// // // // // // // // // // // // // // // // // import { GoogleGenerativeAI } from "@google/generative-ai";

// // // // // // // // // // // // // // // // // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY2);

// // // // // // // // // // // // // // // // // export const generateReactCode = async (variant) => {
// // // // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // // // //     const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// // // // // // // // // // // // // // // // //     const prompt = `
// // // // // // // // // // // // // // // // //       You are an expert React Frontend Engineer.
// // // // // // // // // // // // // // // // //       Create a modern, stunning, single-file React component for a product variant called "${variant.variant_name}".
      
// // // // // // // // // // // // // // // // //       Context:
// // // // // // // // // // // // // // // // //       - Problem: ${variant.problem_statement}
// // // // // // // // // // // // // // // // //       - Target Audience: ${variant.persona}
// // // // // // // // // // // // // // // // //       - Core Features: ${variant.core_features ? variant.core_features.join(', ') : 'Standard features'}

// // // // // // // // // // // // // // // // //       Requirements:
// // // // // // // // // // // // // // // // //       1. Use Tailwind CSS for ALL styling. Make it look premium (gradients, glassmorphism, rounded corners).
// // // // // // // // // // // // // // // // //       2. Use 'lucide-react' for icons (import like: import { Home } from 'lucide-react').
// // // // // // // // // // // // // // // // //       3. The component must be a Landing Page or Dashboard Mockup relevant to the features.
// // // // // // // // // // // // // // // // //       4. It must be a SINGLE functional component exported as default.
// // // // // // // // // // // // // // // // //       5. Do NOT use any other external libraries (like framer-motion or router) to avoid dependency errors.
// // // // // // // // // // // // // // // // //       6. Return ONLY the raw code string. Do not wrap in markdown blocks (like \`\`\`jsx). Do not add explanations.
// // // // // // // // // // // // // // // // //     `;

// // // // // // // // // // // // // // // // //     console.log("🤖 Asking Gemini to generate UI...");
// // // // // // // // // // // // // // // // //     const result = await model.generateContent(prompt);
// // // // // // // // // // // // // // // // //     const response = await result.response;
// // // // // // // // // // // // // // // // //     let text = response.text();
    
// // // // // // // // // // // // // // // // //     // Cleanup: Remove markdown backticks if Gemini adds them
// // // // // // // // // // // // // // // // //     text = text.replace(/^```jsx/, '').replace(/^```/, '').replace(/```$/, '');
    
// // // // // // // // // // // // // // // // //     return text;
// // // // // // // // // // // // // // // // //   } catch (error) {
// // // // // // // // // // // // // // // // //     console.error("Gemini Code Gen Error:", error);
// // // // // // // // // // // // // // // // //     throw new Error("Failed to generate UI code");
// // // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // // };


// // // // // // // // // // // // // // // // import { GoogleGenerativeAI } from "@google/generative-ai";

// // // // // // // // // // // // // // // // // Ensure GEMINI_API_KEY2 is in your backend .env file
// // // // // // // // // // // // // // // // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY2);

// // // // // // // // // // // // // // // // // This matches the import { callGeminiCanvas } in your controller
// // // // // // // // // // // // // // // // export const callGeminiCanvas = async (variant) => {
// // // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // // //     const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// // // // // // // // // // // // // // // //     const prompt = `
// // // // // // // // // // // // // // // //       You are an expert React Frontend Engineer.
// // // // // // // // // // // // // // // //       Create a modern, stunning, single-file React component for a product variant called "${variant.variant_name}".
      
// // // // // // // // // // // // // // // //       Context:
// // // // // // // // // // // // // // // //       - Problem: ${variant.problem_statement}
// // // // // // // // // // // // // // // //       - Target Audience: ${variant.persona}
// // // // // // // // // // // // // // // //       - Core Features: ${variant.core_features ? variant.core_features.join(', ') : 'Standard features'}

// // // // // // // // // // // // // // // //       Requirements:
// // // // // // // // // // // // // // // //       1. Use Tailwind CSS for ALL styling. Make it look premium (gradients, glassmorphism, rounded corners).
// // // // // // // // // // // // // // // //       2. Use 'lucide-react' for icons (import like: import { Home } from 'lucide-react').
// // // // // // // // // // // // // // // //       3. The component must be a Landing Page or Dashboard Mockup relevant to the features.
// // // // // // // // // // // // // // // //       4. It must be a SINGLE functional component exported as default.
// // // // // // // // // // // // // // // //       5. Do NOT use any other external libraries (like framer-motion or router) to avoid dependency errors.
// // // // // // // // // // // // // // // //       6. Return ONLY the raw code string. Do not wrap in markdown blocks (like \`\`\`jsx). Do not add explanations.
// // // // // // // // // // // // // // // //     `;

// // // // // // // // // // // // // // // //     console.log("🤖 Asking Gemini to generate UI...");
// // // // // // // // // // // // // // // //     const result = await model.generateContent(prompt);
// // // // // // // // // // // // // // // //     const response = await result.response;
// // // // // // // // // // // // // // // //     let text = response.text();
    
// // // // // // // // // // // // // // // //     // Cleanup: Remove markdown backticks if Gemini adds them
// // // // // // // // // // // // // // // //     text = text.replace(/^```jsx/, '').replace(/^```/, '').replace(/```$/, '');
    
// // // // // // // // // // // // // // // //     return text;
// // // // // // // // // // // // // // // //   } catch (error) {
// // // // // // // // // // // // // // // //     console.error("Gemini Canvas Error:", error);
// // // // // // // // // // // // // // // //     throw new Error("Failed to generate UI code");
// // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // };





// // // // // // // // // // // // // // // // backend/src/utils/callGeminiCanvas.js
// // // // // // // // // // // // // // // import { GoogleGenerativeAI } from "@google/generative-ai";
// // // // // // // // // // // // // // // import dotenv from "dotenv";
// // // // // // // // // // // // // // // dotenv.config();

// // // // // // // // // // // // // // // const GEMINI_KEY = process.env.GEMINI_API_KEY2;
// // // // // // // // // // // // // // // if (!GEMINI_KEY) console.warn("Warning: GEMINI_API_KEY2 not set in .env");

// // // // // // // // // // // // // // // const genAI = new GoogleGenerativeAI(GEMINI_KEY);

// // // // // // // // // // // // // // // export const callGeminiCanvas = async (variant) => {
// // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // //     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // choose available alias

// // // // // // // // // // // // // // //     const prompt = `
// // // // // // // // // // // // // // // You are an expert React Frontend Engineer.
// // // // // // // // // // // // // // // Create a single React component called Variant that implements a polished UI mockup for a product variant.
// // // // // // // // // // // // // // // Return the raw component code only (a single file exporting default function). Do NOT wrap in markdown. Use tailwind classes and lucide-react imports.
// // // // // // // // // // // // // // // Variant meta:
// // // // // // // // // // // // // // // - name: ${variant.variant_name || variant.name}
// // // // // // // // // // // // // // // - problem: ${variant.problem_statement || variant.problem || ""}
// // // // // // // // // // // // // // // - persona: ${variant.persona || ""}
// // // // // // // // // // // // // // // - core_features: ${Array.isArray(variant.core_features) ? variant.core_features.join(", ") : variant.core_features || ""}
// // // // // // // // // // // // // // // Return ONLY the component code as plain text.
// // // // // // // // // // // // // // // `;

// // // // // // // // // // // // // // //     const result = await model.generateContent(prompt);
// // // // // // // // // // // // // // //     const response = await result.response;
// // // // // // // // // // // // // // //     let text = await response.text();

// // // // // // // // // // // // // // //     // Remove triple-backticks if present
// // // // // // // // // // // // // // //     if (text.startsWith("```")) {
// // // // // // // // // // // // // // //       text = text.replace(/^```[a-z]*\n?/, "").replace(/\n```$/, "");
// // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // //     return text;
// // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // //     console.error("CALL GEMINI ERROR:", err);
// // // // // // // // // // // // // // //     throw err;
// // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // };





// // // // // // // // // // // // // // // import { GoogleGenerativeAI } from "@google/generative-ai";
// // // // // // // // // // // // // // // import dotenv from "dotenv";
// // // // // // // // // // // // // // // dotenv.config();

// // // // // // // // // // // // // // // const GEMINI_KEY = process.env.GEMINI_API_KEY2;

// // // // // // // // // // // // // // // if (!GEMINI_KEY) {
// // // // // // // // // // // // // // //   console.error("❌ CRITICAL: GEMINI_API_KEY2 is missing from .env");
// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // const genAI = new GoogleGenerativeAI(GEMINI_KEY);

// // // // // // // // // // // // // // // export const callGeminiCanvas = async (variant) => {
// // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // //     // FIX: Using the explicit latest version alias to avoid 404s
// // // // // // // // // // // // // // //     const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// // // // // // // // // // // // // // //     const prompt = `
// // // // // // // // // // // // // // //       You are an expert React Frontend Engineer.
// // // // // // // // // // // // // // //       Create a single-file React component (App.js) for a product called: "${variant.variant_name || variant.name}".
      
// // // // // // // // // // // // // // //       CONTEXT:
// // // // // // // // // // // // // // //       - Problem Solved: ${variant.problem_statement || variant.problem}
// // // // // // // // // // // // // // //       - Target Audience: ${variant.persona}
// // // // // // // // // // // // // // //       - Key Features: ${Array.isArray(variant.core_features) ? variant.core_features.join(', ') : variant.core_features}

// // // // // // // // // // // // // // //       RULES:
// // // // // // // // // // // // // // //       1. Use Tailwind CSS for styling (make it look modern/premium).
// // // // // // // // // // // // // // //       2. Use 'lucide-react' for icons.
// // // // // // // // // // // // // // //       3. Return ONLY the raw code string.
// // // // // // // // // // // // // // //       4. Do NOT wrap in markdown blocks (no \`\`\`jsx).
// // // // // // // // // // // // // // //       5. Must export default function App().
// // // // // // // // // // // // // // //     `;

// // // // // // // // // // // // // // //     console.log("🤖 Asking Gemini (1.5 Flash Latest) to generate UI...");
// // // // // // // // // // // // // // //     const result = await model.generateContent(prompt);
// // // // // // // // // // // // // // //     const response = await result.response;
// // // // // // // // // // // // // // //     let text = response.text();
    
// // // // // // // // // // // // // // //     // Cleanup markdown if present
// // // // // // // // // // // // // // //     text = text.replace(/^```jsx/, '').replace(/^```/, '').replace(/```$/, '');
    
// // // // // // // // // // // // // // //     return text;
// // // // // // // // // // // // // // //   } catch (error) {
// // // // // // // // // // // // // // //     console.error("❌ Gemini Canvas Error:", error);
    
// // // // // // // // // // // // // // //     // If the model fails again, we return a safe fallback UI so the app doesn't crash
// // // // // // // // // // // // // // //     return `export default function App() { 
// // // // // // // // // // // // // // //       return (
// // // // // // // // // // // // // // //         <div className="h-screen flex items-center justify-center bg-gray-900 text-white p-10 flex-col text-center">
// // // // // // // // // // // // // // //           <h1 className="text-3xl font-bold text-red-500 mb-4">Generation Error</h1>
// // // // // // // // // // // // // // //           <p>The AI model refused the connection. Please check the backend console logs.</p>
// // // // // // // // // // // // // // //           <p className="text-sm text-gray-500 mt-4">${error.message}</p>
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //       ) 
// // // // // // // // // // // // // // //     }`;
// // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // };



// // // // // // // // // // // // // // import { GoogleGenerativeAI } from "@google/generative-ai";

// // // // // // // // // // // // // // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY2);

// // // // // // // // // // // // // // export const callGeminiCanvas = async (variant) => {
// // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // //     const model = genAI.getGenerativeModel({
// // // // // // // // // // // // // //       // FIXED MODEL NAME — THIS ONE WORKS
// // // // // // // // // // // // // //       model: "gemini-2.0-flash",
// // // // // // // // // // // // // //     });

// // // // // // // // // // // // // //     const prompt = `
// // // // // // // // // // // // // //       You are an expert React Frontend Engineer.
// // // // // // // // // // // // // //       Create a modern, stunning, single-file React component for a product variant called "${variant.variant_name}".

// // // // // // // // // // // // // //       Context:
// // // // // // // // // // // // // //       - Problem: ${variant.problem_statement}
// // // // // // // // // // // // // //       - Target Audience: ${variant.persona}
// // // // // // // // // // // // // //       - Core Features: ${variant.core_features ? variant.core_features.join(", ") : "Standard features"}

// // // // // // // // // // // // // //       Requirements:
// // // // // // // // // // // // // //       1. Use Tailwind CSS ONLY.
// // // // // // // // // // // // // //       2. Use 'lucide-react' for icons.
// // // // // // // // // // // // // //       3. Must be a Landing Page or Dashboard UI.
// // // // // // // // // // // // // //       4. Must be a SINGLE functional React component.
// // // // // // // // // // // // // //       5. DO NOT wrap code in markdown (no \`\`\`).
// // // // // // // // // // // // // //     `;

// // // // // // // // // // // // // //     console.log("🤖 Asking Gemini (2.0 Flash) to generate UI...");

// // // // // // // // // // // // // //     const response = await model.generateContent(prompt);
// // // // // // // // // // // // // //     let text = response.response.text();

// // // // // // // // // // // // // //     text = text.replace(/```jsx|```/g, "").trim();

// // // // // // // // // // // // // //     return text;

// // // // // // // // // // // // // //   } catch (error) {
// // // // // // // // // // // // // //     console.error("❌ Gemini Canvas Error:", error);
// // // // // // // // // // // // // //     throw new Error("Failed to generate UI code");
// // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // };


// // // // // // // // // // // // // // backend/src/utils/callGeminiCanvas.js
// // // // // // // // // // // // // import { GoogleGenerativeAI } from "@google/generative-ai";

// // // // // // // // // // // // // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY2);

// // // // // // // // // // // // // export const callGeminiCanvas = async (variant) => {
// // // // // // // // // // // // //   try {
// // // // // // // // // // // // //     const model = genAI.getGenerativeModel({
// // // // // // // // // // // // //       model: "gemini-2.0-flash"
// // // // // // // // // // // // //     });

// // // // // // // // // // // // //     const prompt = `
// // // // // // // // // // // // // You are an expert React Frontend Engineer.

// // // // // // // // // // // // // Generate ONLY VALID JSX CODE — a SINGLE functional component, no explanations.

// // // // // // // // // // // // // Rules:
// // // // // // // // // // // // // - Export default a React Component named VariantComponent.
// // // // // // // // // // // // // - Use TailwindCSS classes ONLY.
// // // // // // // // // // // // // - UI must look premium with gradient backgrounds, glassmorphism cards, rounded-xl.
// // // // // // // // // // // // // - DO NOT include \`\`\` code fences.
// // // // // // // // // // // // // - DO NOT include imports for React (Sandpack auto-handles).
// // // // // // // // // // // // // - DO NOT return text or comments — ONLY JSX inside the component.

// // // // // // // // // // // // // Context:
// // // // // // // // // // // // // Name: ${variant.variant_name}
// // // // // // // // // // // // // Persona: ${variant.persona}
// // // // // // // // // // // // // Problem: ${variant.problem_statement}
// // // // // // // // // // // // // Core Features: ${variant.core_features?.join(", ")}

// // // // // // // // // // // // // Now output ONLY THIS FILE CONTENT:

// // // // // // // // // // // // // export default function VariantComponent() {
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <!-- premium landing page UI relevant to the variant -->
// // // // // // // // // // // // //   )
// // // // // // // // // // // // // }
// // // // // // // // // // // // // `;

// // // // // // // // // // // // //     console.log("🤖 Asking Gemini (2.0 Flash) to generate UI...");

// // // // // // // // // // // // //     const result = await model.generateContent(prompt);
// // // // // // // // // // // // //     const response = result.response;
// // // // // // // // // // // // //     let code = response.text().trim();

// // // // // // // // // // // // //     // Remove any potential leftover fences
// // // // // // // // // // // // //     code = code.replace(/```/g, "");

// // // // // // // // // // // // //     // Validate that it exports a component
// // // // // // // // // // // // //     if (!code.includes("export default")) {
// // // // // // // // // // // // //       throw new Error("Gemini returned invalid JSX.");
// // // // // // // // // // // // //     }

// // // // // // // // // // // // //     return code;
// // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // //     console.error("❌ Gemini Canvas Error:", err);
// // // // // // // // // // // // //     throw new Error("Failed to generate UI code");
// // // // // // // // // // // // //   }
// // // // // // // // // // // // // };





// // // // // // // // // // // // // import { GoogleGenerativeAI } from "@google/generative-ai";
// // // // // // // // // // // // // import dotenv from "dotenv";

// // // // // // // // // // // // // dotenv.config();

// // // // // // // // // // // // // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY2);

// // // // // // // // // // // // // export const callGeminiCanvas = async (variant) => {
// // // // // // // // // // // // //   try {
// // // // // // // // // // // // //     const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// // // // // // // // // // // // //     const prompt = `
// // // // // // // // // // // // //     You are an expert React developer. Generate a UI component for: "${variant}".
    
// // // // // // // // // // // // //     CRITICAL RULES FOR GENERATION:
// // // // // // // // // // // // //     1. Use Tailwind CSS for styling.
// // // // // // // // // // // // //     2. DO NOT use 'import' statements (like import React from 'react').
// // // // // // // // // // // // //     3. Assume 'React' and 'ReactDOM' are already globally available.
// // // // // // // // // // // // //     4. Use 'const { useState, useEffect, useRef } = React;' at the top if needed.
// // // // // // // // // // // // //     5. The main component MUST be named 'App'.
// // // // // // // // // // // // //     6. DO NOT write 'export default'. Just define the function 'function App() { ... }'.
// // // // // // // // // // // // //     7. Use Lucide-React icons if needed, but access them via 'lucide' global object if possible, or better yet, use SVG strings directly to avoid dependency issues.
// // // // // // // // // // // // //     8. Return ONLY the raw Javascript code. No markdown backticks (e.g., \`\`\`jsx).
    
// // // // // // // // // // // // //     Example Output format:
// // // // // // // // // // // // //     const { useState } = React;
// // // // // // // // // // // // //     function App() {
// // // // // // // // // // // // //       return <div className="p-4 bg-blue-500 text-white">Hello</div>
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //     `;

// // // // // // // // // // // // //     const result = await model.generateContent(prompt);
// // // // // // // // // // // // //     const response = await result.response;
// // // // // // // // // // // // //     let text = response.text();

// // // // // // // // // // // // //     // Cleanup: Remove markdown backticks if Gemini adds them
// // // // // // // // // // // // //     text = text.replace(/```jsx/g, "").replace(/```javascript/g, "").replace(/```/g, "");
    
// // // // // // // // // // // // //     return text;
// // // // // // // // // // // // //   } catch (error) {
// // // // // // // // // // // // //     console.error("Gemini API Error:", error);
// // // // // // // // // // // // //     throw new Error("Failed to generate UI code");
// // // // // // // // // // // // //   }
// // // // // // // // // // // // // };




// // // // // // // // // // // // import { GoogleGenerativeAI } from "@google/generative-ai";
// // // // // // // // // // // // import dotenv from "dotenv";

// // // // // // // // // // // // dotenv.config();

// // // // // // // // // // // // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// // // // // // // // // // // // export const callGeminiCanvas = async (variant) => {
// // // // // // // // // // // //   try {
// // // // // // // // // // // //     // FIX: Using the specific version prevents "404 Not Found" on older environments
// // // // // // // // // // // //     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-002" });

// // // // // // // // // // // //     console.log("🤖 Calling Gemini Model:", "gemini-1.5-flash-002");

// // // // // // // // // // // //     const prompt = `
// // // // // // // // // // // //     You are an expert React developer. Generate a UI component for: "${variant}".
    
// // // // // // // // // // // //     CRITICAL RULES FOR GENERATION:
// // // // // // // // // // // //     1. Use Tailwind CSS for styling.
// // // // // // // // // // // //     2. DO NOT use 'import' statements.
// // // // // // // // // // // //     3. Assume 'React', 'useState', 'useEffect', 'useRef', and 'lucide' are available globally.
// // // // // // // // // // // //     4. The main component MUST be named 'App'.
// // // // // // // // // // // //     5. Return ONLY the raw Javascript code. No markdown backticks.
    
// // // // // // // // // // // //     Example Output:
// // // // // // // // // // // //     const { useState } = React;
// // // // // // // // // // // //     function App() { return <div className="p-4">Hello</div> }
// // // // // // // // // // // //     `;

// // // // // // // // // // // //     const result = await model.generateContent(prompt);
// // // // // // // // // // // //     const response = await result.response;
// // // // // // // // // // // //     let text = response.text();

// // // // // // // // // // // //     // Cleanup markdown if it still exists
// // // // // // // // // // // //     text = text.replace(/```jsx/g, "").replace(/```javascript/g, "").replace(/```/g, "");
    
// // // // // // // // // // // //     return text;

// // // // // // // // // // // //   } catch (error) {
// // // // // // // // // // // //     console.error("❌ Gemini API Error:", error.message);
// // // // // // // // // // // //     throw new Error("Failed to generate UI code");
// // // // // // // // // // // //   }
// // // // // // // // // // // // };




// // // // // // // // // // // import { GoogleGenerativeAI } from "@google/generative-ai";
// // // // // // // // // // // import dotenv from "dotenv";

// // // // // // // // // // // dotenv.config();

// // // // // // // // // // // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY2);

// // // // // // // // // // // export const callGeminiCanvas = async (variant) => {
// // // // // // // // // // //   try {
// // // // // // // // // // //     // 1. EXTRACT ONLY RELEVANT DATA
// // // // // // // // // // //     // We ignore ID, timestamps, user_flow, etc. to focus the AI.
// // // // // // // // // // //     const { 
// // // // // // // // // // //       name, 
// // // // // // // // // // //       problem, 
// // // // // // // // // // //       features = [], 
// // // // // // // // // // //       variant_name 
// // // // // // // // // // //     } = variant;

// // // // // // // // // // //     const appName = name || variant_name || "App";
// // // // // // // // // // //     const appFeatures = Array.isArray(features) ? features.join(", ") : features;

// // // // // // // // // // //     // 2. USE STANDARD FLASH MODEL (Most stable, high rate limits)
// // // // // // // // // // //     const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// // // // // // // // // // //     console.log(`🤖 Generative AI: Creating UI for "${appName}"...`);

// // // // // // // // // // //     const prompt = `
// // // // // // // // // // //     You are an expert React developer. Generate a single-file React component for a web app.
    
// // // // // // // // // // //     APP DETAILS:
// // // // // // // // // // //     - Name: ${appName}
// // // // // // // // // // //     - Problem Solved: ${problem}
// // // // // // // // // // //     - Key Features: ${appFeatures}

// // // // // // // // // // //     CRITICAL TECH STACK RULES:
// // // // // // // // // // //     1. Use Tailwind CSS for styling.
// // // // // // // // // // //     2. DO NOT use 'import' statements (e.g., import React from 'react').
// // // // // // // // // // //     3. Assume 'React', 'useState', 'useEffect', and 'lucide' are globally available.
// // // // // // // // // // //     4. The main component MUST be named 'App'.
// // // // // // // // // // //     5. Return ONLY the raw Javascript code. NO markdown formatting.
    
// // // // // // // // // // //     Example Output:
// // // // // // // // // // //     const { useState } = React;
// // // // // // // // // // //     function App() { return <div className="p-4 bg-gray-900 text-white">Hello</div> }
// // // // // // // // // // //     `;

// // // // // // // // // // //     const result = await model.generateContent(prompt);
// // // // // // // // // // //     const response = await result.response;
// // // // // // // // // // //     let text = response.text();

// // // // // // // // // // //     // 3. CLEANUP (Remove backticks if AI adds them)
// // // // // // // // // // //     text = text.replace(/```jsx/g, "").replace(/```javascript/g, "").replace(/```/g, "");
    
// // // // // // // // // // //     return text;

// // // // // // // // // // //   } catch (error) {
// // // // // // // // // // //     console.error("❌ Gemini API Error:", error.message);
    
// // // // // // // // // // //     // Fallback: If 1.5 Flash fails (404), try 2.0 Flash (Experimental but exists)
// // // // // // // // // // //     if (error.message.includes("404")) {
// // // // // // // // // // //       console.log("⚠️ 1.5 Flash not found. Retrying with gemini-2.0-flash-exp...");
// // // // // // // // // // //       try {
// // // // // // // // // // //         const fallbackModel = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
// // // // // // // // // // //         // We reuse the prompt defined above, but we need to reconstruct it or pass it.
// // // // // // // // // // //         // For simplicity in this fallback, we just re-throw to keep code clean, 
// // // // // // // // // // //         // as the npm install update usually fixes the 404.
// // // // // // // // // // //         throw new Error("Please restart your backend server to apply SDK updates.");
// // // // // // // // // // //       } catch (e) {
// // // // // // // // // // //          throw new Error("AI Model not available. Please check API Key.");
// // // // // // // // // // //       }
// // // // // // // // // // //     }
    
// // // // // // // // // // //     throw new Error("Failed to generate UI code");
// // // // // // // // // // //   }
// // // // // // // // // // // };




// // // // // // // // // // import { GoogleGenerativeAI } from "@google/generative-ai";
// // // // // // // // // // import dotenv from "dotenv";

// // // // // // // // // // dotenv.config();

// // // // // // // // // // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// // // // // // // // // // export const callGeminiCanvas = async (variant) => {
// // // // // // // // // //   try {
// // // // // // // // // //     // EXTRACT DATA
// // // // // // // // // //     const { name, problem, features = [], variant_name } = variant;
// // // // // // // // // //     const appName = name || variant_name || "App";
// // // // // // // // // //     const appFeatures = Array.isArray(features) ? features.join(", ") : features;

// // // // // // // // // //     // --- EMERGENCY FIX: USING 'gemini-pro' ---
// // // // // // // // // //     // This model ID is the most widely supported. If this fails, your API Key is invalid.
// // // // // // // // // //     const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// // // // // // // // // //     console.log(`🤖 Generative AI: Creating UI for "${appName}" using gemini-pro...`);

// // // // // // // // // //     const prompt = `
// // // // // // // // // //     You are an expert React developer. Generate a single-file React component.
    
// // // // // // // // // //     APP: ${appName}
// // // // // // // // // //     FEATURES: ${appFeatures}

// // // // // // // // // //     RULES:
// // // // // // // // // //     1. Use Tailwind CSS.
// // // // // // // // // //     2. NO import statements.
// // // // // // // // // //     3. Assume React, useState, useEffect, lucide are global.
// // // // // // // // // //     4. Component name: App
// // // // // // // // // //     5. Return ONLY raw Javascript code. NO markdown.
// // // // // // // // // //     `;

// // // // // // // // // //     const result = await model.generateContent(prompt);
// // // // // // // // // //     const response = await result.response;
// // // // // // // // // //     let text = response.text();

// // // // // // // // // //     text = text.replace(/```jsx/g, "").replace(/```javascript/g, "").replace(/```/g, "");
    
// // // // // // // // // //     return text;

// // // // // // // // // //   } catch (error) {
// // // // // // // // // //     console.error("❌ Gemini Error:", error.message);
// // // // // // // // // //     throw new Error("Failed to generate UI code");
// // // // // // // // // //   }
// // // // // // // // // // };






// // // // // // // // // import { GoogleGenerativeAI } from "@google/generative-ai";
// // // // // // // // // import dotenv from "dotenv";

// // // // // // // // // dotenv.config();

// // // // // // // // // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY2);

// // // // // // // // // export const callGeminiCanvas = async (variant) => {
// // // // // // // // //   try {
// // // // // // // // //     // 1. EXTRACT DATA
// // // // // // // // //     const { name, problem, features = [], variant_name } = variant;
// // // // // // // // //     const appName = name || variant_name || "App";
// // // // // // // // //     const appFeatures = Array.isArray(features) ? features.join(", ") : features;

// // // // // // // // //     // --- FIX: Using a model from YOUR specific allowed list ---
// // // // // // // // //     // Your key supports 'gemini-2.0-flash', so we use that.
// // // // // // // // //     const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// // // // // // // // //     console.log(`🤖 Generative AI: Creating UI for "${appName}" using gemini-2.0-flash...`);

// // // // // // // // //     const prompt = `
// // // // // // // // //     You are an expert React developer. Generate a single-file React component for a web app.
    
// // // // // // // // //     APP DETAILS:
// // // // // // // // //     - Name: ${appName}
// // // // // // // // //     - Problem Solved: ${problem}
// // // // // // // // //     - Key Features: ${appFeatures}

// // // // // // // // //     CRITICAL TECH STACK RULES:
// // // // // // // // //     1. Use Tailwind CSS for styling.
// // // // // // // // //     2. DO NOT use 'import' statements (e.g., import React from 'react').
// // // // // // // // //     3. Assume 'React', 'useState', 'useEffect', 'useRef', and 'lucide' are globally available.
// // // // // // // // //     4. The main component MUST be named 'App'.
// // // // // // // // //     5. Return ONLY the raw Javascript code. NO markdown formatting.
// // // // // // // // //     `;

// // // // // // // // //     const result = await model.generateContent(prompt);
// // // // // // // // //     const response = await result.response;
// // // // // // // // //     let text = response.text();

// // // // // // // // //     // Cleanup (Remove backticks if AI adds them)
// // // // // // // // //     text = text.replace(/```jsx/g, "").replace(/```javascript/g, "").replace(/```/g, "");
    
// // // // // // // // //     return text;

// // // // // // // // //   } catch (error) {
// // // // // // // // //     console.error("❌ Gemini API Error:", error.message);
    
// // // // // // // // //     // Quota handling for Free Tier
// // // // // // // // //     if (error.message.includes("429")) {
// // // // // // // // //       throw new Error("Daily Limit Reached. Please try again later or switch API keys.");
// // // // // // // // //     }
    
// // // // // // // // //     throw new Error("Failed to generate UI code");
// // // // // // // // //   }
// // // // // // // // // };



// // // // // // // // import { GoogleGenerativeAI } from "@google/generative-ai";
// // // // // // // // import dotenv from "dotenv";

// // // // // // // // dotenv.config();

// // // // // // // // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY2);

// // // // // // // // export const callGeminiCanvas = async (variant) => {
// // // // // // // //   try {
// // // // // // // //     const { name, problem, features = [], variant_name } = variant;
// // // // // // // //     const appName = name || variant_name || "App";
// // // // // // // //     const appFeatures = Array.isArray(features) ? features.join(", ") : features;

// // // // // // // //     // --- CRITICAL FIX: USING EXPERIMENTAL MODEL ---
// // // // // // // //     // We strictly use the 'exp' version to bypass the 429 Rate Limits
// // // // // // // //     // on the standard flash model.
// // // // // // // //     const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

// // // // // // // //     // I changed this log message so you can verify the update worked:
// // // // // // // //     console.log(`🤖 Generative AI: Creating UI for "${appName}" USING EXPERIMENTAL MODEL...`);

// // // // // // // //     const prompt = `
// // // // // // // //     You are an expert React developer. Generate a single-file React component for a web app.
    
// // // // // // // //     APP DETAILS:
// // // // // // // //     - Name: ${appName}
// // // // // // // //     - Problem Solved: ${problem}
// // // // // // // //     - Key Features: ${appFeatures}

// // // // // // // //     CRITICAL TECH STACK RULES:
// // // // // // // //     1. Use Tailwind CSS for styling.
// // // // // // // //     2. DO NOT use 'import' statements (e.g., import React from 'react').
// // // // // // // //     3. Assume 'React', 'useState', 'useEffect', 'useRef', and 'lucide' are globally available.
// // // // // // // //     4. The main component MUST be named 'App'.
// // // // // // // //     5. Return ONLY the raw Javascript code. NO markdown formatting.
// // // // // // // //     `;

// // // // // // // //     // Add a simple timeout mechanism to prevent infinite hanging
// // // // // // // //     const result = await Promise.race([
// // // // // // // //       model.generateContent(prompt),
// // // // // // // //       new Promise((_, reject) => setTimeout(() => reject(new Error("Gemini Request Timed Out")), 20000))
// // // // // // // //     ]);

// // // // // // // //     const response = await result.response;
// // // // // // // //     let text = response.text();

// // // // // // // //     text = text.replace(/```jsx/g, "").replace(/```javascript/g, "").replace(/```/g, "");
    
// // // // // // // //     return text;

// // // // // // // //   } catch (error) {
// // // // // // // //     console.error("❌ Gemini API Error:", error.message);
// // // // // // // //     if (error.message.includes("429")) {
// // // // // // // //       throw new Error("Rate Limit Hit. Please wait 1 minute.");
// // // // // // // //     }
// // // // // // // //     throw new Error("Failed to generate UI code");
// // // // // // // //   }
// // // // // // // // };



// // // // // // // import { GoogleGenerativeAI } from "@google/generative-ai";
// // // // // // // import dotenv from "dotenv";

// // // // // // // dotenv.config();

// // // // // // // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// // // // // // // // PRIORITY LIST: Based on the models your key actually has access to
// // // // // // // const MODELS_TO_TRY = [
// // // // // // //   "gemini-2.5-flash",       // 1. Newest (Best chance of being free)
// // // // // // //   "gemini-2.0-flash",       // 2. Standard 2.0
// // // // // // //   "gemini-2.0-flash-exp",   // 3. Experimental (Backup)
// // // // // // //   "gemini-2.0-flash-lite-preview-02-05" // 4. Lite (Fastest)
// // // // // // // ];

// // // // // // // export const callGeminiCanvas = async (variant) => {
// // // // // // //   const { name, problem, features = [], variant_name } = variant;
// // // // // // //   const appName = name || variant_name || "App";
// // // // // // //   const appFeatures = Array.isArray(features) ? features.join(", ") : features;

// // // // // // //   const prompt = `
// // // // // // //     You are an expert React developer. Generate a single-file React component.
// // // // // // //     APP DETAILS: ${appName} - ${problem}
// // // // // // //     FEATURES: ${appFeatures}

// // // // // // //     RULES:
// // // // // // //     1. Use Tailwind CSS.
// // // // // // //     2. NO imports.
// // // // // // //     3. Component name: App.
// // // // // // //     4. Return RAW Javascript only.
// // // // // // //   `;

// // // // // // //   // --- FALLBACK LOOP ---
// // // // // // //   // This tries model #1. If it fails (429/404), it tries model #2, etc.
// // // // // // //   for (const modelName of MODELS_TO_TRY) {
// // // // // // //     try {
// // // // // // //       console.log(`🤖 Generative AI: Attempting with model "${modelName}"...`);
// // // // // // //       const model = genAI.getGenerativeModel({ model: modelName });

// // // // // // //       const result = await model.generateContent(prompt);
// // // // // // //       const response = await result.response;
// // // // // // //       let text = response.text();

// // // // // // //       // Clean up markdown
// // // // // // //       text = text.replace(/```jsx/g, "").replace(/```javascript/g, "").replace(/```/g, "");
      
// // // // // // //       console.log(`✅ Success! Generated using ${modelName}`);
// // // // // // //       return text;

// // // // // // //     } catch (error) {
// // // // // // //       console.error(`⚠️ Failed with ${modelName}:`, error.message);
      
// // // // // // //       // If we are out of models to try, throw the error
// // // // // // //       if (modelName === MODELS_TO_TRY[MODELS_TO_TRY.length - 1]) {
// // // // // // //         throw new Error("All AI models are busy. Please try again in 1 minute.");
// // // // // // //       }
      
// // // // // // //       console.log(`🔄 Switching to next model...`);
// // // // // // //     }
// // // // // // //   }
// // // // // // // };


// // // // // // import { GoogleGenerativeAI } from "@google/generative-ai";
// // // // // // import dotenv from "dotenv";

// // // // // // dotenv.config();

// // // // // // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// // // // // // // PRIORITY LIST: Optimized for your "Bleeding Edge" Key
// // // // // // // We try the newest/experimental ones FIRST because they are less likely to be rate-limited.
// // // // // // const MODELS_TO_TRY = [
// // // // // //   "gemini-2.0-flash-lite-preview-02-05", // 1. Lite (Fastest, usually empty)
// // // // // //   "gemini-2.5-flash",                     // 2. Newest (Separate quota)
// // // // // //   "gemini-2.0-flash-exp",                 // 3. Experimental (Backup)
// // // // // //   "gemini-2.0-flash"                      // 4. Standard (Likely busy, try last)
// // // // // // ];

// // // // // // export const callGeminiCanvas = async (variant) => {
// // // // // //   const { name, problem, features = [], variant_name } = variant;
// // // // // //   const appName = name || variant_name || "App";
// // // // // //   const appFeatures = Array.isArray(features) ? features.join(", ") : features;

// // // // // //   const prompt = `
// // // // // //     You are an expert React developer. Generate a single-file React component.
// // // // // //     APP DETAILS: ${appName} - ${problem}
// // // // // //     FEATURES: ${appFeatures}

// // // // // //     RULES:
// // // // // //     1. Use Tailwind CSS.
// // // // // //     2. NO imports.
// // // // // //     3. Component name: App.
// // // // // //     4. Return RAW Javascript only.
// // // // // //   `;

// // // // // //   // --- FALLBACK LOOP ---
// // // // // //   for (const modelName of MODELS_TO_TRY) {
// // // // // //     try {
// // // // // //       console.log(`🤖 Generative AI: Attempting with model "${modelName}"...`);
// // // // // //       const model = genAI.getGenerativeModel({ model: modelName });

// // // // // //       const result = await model.generateContent(prompt);
// // // // // //       const response = await result.response;
// // // // // //       let text = response.text();

// // // // // //       // Clean up markdown
// // // // // //       text = text.replace(/```jsx/g, "").replace(/```javascript/g, "").replace(/```/g, "");
      
// // // // // //       console.log(`✅ Success! Generated using ${modelName}`);
// // // // // //       return text;

// // // // // //     } catch (error) {
// // // // // //       console.error(`⚠️ Failed with ${modelName}:`, error.message);
      
// // // // // //       // If we are out of models to try, throw the final error
// // // // // //       if (modelName === MODELS_TO_TRY[MODELS_TO_TRY.length - 1]) {
// // // // // //         throw new Error("All AI models are busy. Please try again in 1 minute.");
// // // // // //       }
      
// // // // // //       console.log(`🔄 Switching to next model...`);
// // // // // //     }
// // // // // //   }
// // // // // // };


// // // // // import { GoogleGenerativeAI } from "@google/generative-ai";
// // // // // import dotenv from "dotenv";

// // // // // dotenv.config();

// // // // // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// // // // // export const callGeminiCanvas = async (variant) => {
// // // // //   try {
// // // // //     console.log("🚀 STARTING AI GENERATION...");
    
// // // // //     // 1. Validate Data
// // // // //     const { name, problem, features = [], variant_name } = variant;
// // // // //     const appName = name || variant_name || "App";
// // // // //     const appFeatures = Array.isArray(features) ? features.join(", ") : features;

// // // // //     // 2. Use the Lite Preview Model (Best for free tier quotas)
// // // // //     const modelName = "gemini-2.5-flash";
// // // // //     const model = genAI.getGenerativeModel({ model: modelName });
    
// // // // //     console.log(`🤖 Model Selected: ${modelName}`);

// // // // //     const prompt = `
// // // // //     You are an expert React developer. Generate a single-file React component.
// // // // //     APP DETAILS: ${appName} - ${problem}
// // // // //     FEATURES: ${appFeatures}

// // // // //     RULES:
// // // // //     1. Use Tailwind CSS.
// // // // //     2. NO imports.
// // // // //     3. Component name: App.
// // // // //     4. Return RAW Javascript only.
// // // // //     `;

// // // // //     // 3. Call AI with Timeout (Prevent hanging)
// // // // //     const result = await Promise.race([
// // // // //       model.generateContent(prompt),
// // // // //       new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout: Google AI took too long")), 20000))
// // // // //     ]);

// // // // //     const response = await result.response;
// // // // //     let text = response.text();
    
// // // // //     // 4. Cleanup
// // // // //     text = text.replace(/```jsx/g, "").replace(/```javascript/g, "").replace(/```/g, "");

// // // // //     console.log("✅ AI GENERATION SUCCESSFUL");
// // // // //     return text;

// // // // //   } catch (error) {
// // // // //     console.error("\n❌ AI GENERATION FAILED:");
// // // // //     console.error("   Message:", error.message);
    
// // // // //     // Check for specific network errors (DNS issues)
// // // // //     if (error.message.includes("ENOTFOUND") || error.message.includes("fetch failed")) {
// // // // //       console.error("   👉 CHECK YOUR INTERNET CONNECTION. The server cannot reach Google.");
// // // // //     }

// // // // //     throw error; // Re-throw so the controller catches it
// // // // //   }
// // // // // };


// // // // import { GoogleGenerativeAI } from "@google/generative-ai";
// // // // import dotenv from "dotenv";

// // // // dotenv.config();

// // // // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// // // // export const callGeminiCanvas = async (variant) => {
// // // //   try {
// // // //     console.log("🚀 STARTING AI GENERATION...");
    
// // // //     // 1. Validate Data
// // // //     const { name, problem, features = [], variant_name, persona } = variant;
// // // //     const appName = name || variant_name || "App";
// // // //     const appFeatures = Array.isArray(features) ? features.join(", ") : features;

// // // //     // 🚨 CRITICAL FIX 1: Use a real model name. "gemini-2.5-flash" does not exist.
// // // //     const modelName = "gemini-2.5-flash"; 
// // // //     const model = genAI.getGenerativeModel({ model: modelName });
    
// // // //     console.log(`🤖 Model Selected: ${modelName}`);

// // // //     // 🚨 CRITICAL FIX 2: Request HTML, not React JSX.
// // // //     // Why? Because your frontend uses an <iframe>. Iframes can render HTML/Tailwind instantly.
// // // //     // They CANNOT render raw React/JSX without complex compilers (which we are skipping to save time).
// // // //     const prompt = `
// // // //       You are an expert Web Designer. Create a high-quality, modern Landing Page Mockup.
      
// // // //       APP DETAILS:
// // // //       - Name: ${appName}
// // // //       - Persona: ${persona || "General User"}
// // // //       - Problem to Solve: ${problem}
// // // //       - Key Features: ${appFeatures}

// // // //       TECHNICAL REQUIREMENTS:
// // // //       1. Output a SINGLE HTML file (<!DOCTYPE html>...).
// // // //       2. Use Tailwind CSS via CDN: <script src="https://cdn.tailwindcss.com"></script>
// // // //       3. Use Google Fonts (Inter or Poppins).
// // // //       4. Make it visually stunning, colorful, and responsive.
// // // //       5. Do NOT use import/export. Use standard <script> tags for any logic.
// // // //       6. RETURN ONLY THE RAW CODE. Do not wrap in markdown blocks like \`\`\`html.
// // // //     `;

// // // //     // 3. Call AI
// // // //     const result = await model.generateContent(prompt);
// // // //     const response = await result.response;
// // // //     let text = response.text();
    
// // // //     // 4. Cleanup
// // // //     text = text.replace(/```html/g, "").replace(/```/g, "");

// // // //     console.log("✅ AI GENERATION SUCCESSFUL");
// // // //     return text;

// // // //   } catch (error) {
// // // //     console.error("\n❌ AI GENERATION FAILED:");
// // // //     console.error("   Message:", error.message);
// // // //     throw error; 
// // // //   }
// // // // };


// // // import { GoogleGenerativeAI } from "@google/generative-ai";
// // // import dotenv from "dotenv";

// // // dotenv.config();

// // // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// // // export const callGeminiCanvas = async (variant) => {
// // //   try {
// // //     console.log("🚀 STARTING AI GENERATION...");
    
// // //     // 1. Validate Data
// // //     const { name, problem, features = [], variant_name, persona } = variant;
// // //     const appName = name || variant_name || "App";
// // //     const appFeatures = Array.isArray(features) ? features.join(", ") : features;

// // //     // Use the reliable 1.5 Flash model
// // //     const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    
// // //     // 🚨 STRICT PROMPT: FORCING VANILLA HTML (NO REACT)
// // //     const prompt = `
// // //       You are an expert Frontend Web Designer.
// // //       Create a fully functional, single-file Landing Page for this app.

// // //       APP CONTEXT:
// // //       - Name: ${appName}
// // //       - Target Audience: ${persona || "General Users"}
// // //       - Problem Solved: ${problem}
// // //       - Features to Showcase: ${appFeatures}

// // //       CRITICAL TECHNICAL RULES (DO NOT IGNORE):
// // //       1. Output ONLY a valid HTML5 file (start with <!DOCTYPE html>).
// // //       2. DO NOT use React, Vue, JSX, or ReactDOM.
// // //       3. DO NOT use 'import' or 'export'.
// // //       4. Use Tailwind CSS via CDN: <script src="https://cdn.tailwindcss.com"></script>
// // //       5. Use standard JavaScript (vanilla JS) for any interactivity (like clicking buttons).
// // //       6. Make the design modern, colorful, and fully responsive (mobile-friendly).
// // //       7. Return ONLY the raw code string. No markdown (\`\`\`).
// // //     `;

// // //     // 2. Call AI
// // //     const result = await model.generateContent(prompt);
// // //     const response = await result.response;
// // //     let text = response.text();
    
// // //     // 3. Aggressive Cleanup (Just in case)
// // //     text = text.replace(/```html/g, "").replace(/```/g, "");
    
// // //     // Remove any accidental React imports if the AI hallucinates them
// // //     text = text.replace(/import .* from .*/g, ""); 
// // //     text = text.replace(/ReactDOM\.createRoot/g, "");

// // //     console.log("✅ AI GENERATION SUCCESSFUL (Vanilla HTML)");
// // //     return text;

// // //   } catch (error) {
// // //     console.error("❌ AI GENERATION FAILED:", error.message);
// // //     throw error; 
// // //   }
// // // };


// // import { GoogleGenerativeAI } from "@google/generative-ai";
// // import dotenv from "dotenv";

// // dotenv.config();

// // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// // export const callGeminiCanvas = async (variant) => {
// //   try {
// //     console.log("🚀 STARTING AI GENERATION...");
    
// //     const { name, problem, features = [], variant_name, persona } = variant;
// //     const appName = name || variant_name || "App";
// //     const appFeatures = Array.isArray(features) ? features.join(", ") : features;

// //     // Use the reliable 2.5 Flash model
// //     const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    
// //     // ⚡ PROMPT: Ask for PURE REACT COMPONENT CODE (No imports)
// //     const prompt = `
// //       You are an expert React Developer.
// //       Create a single-file React component for a landing page.
      
// //       APP DETAILS:
// //       - Name: ${appName}
// //       - Persona: ${persona}
// //       - Features: ${appFeatures}

// //       CRITICAL RULES:
// //       1. Write ONLY the functional component. 
// //       2. Name the component "App".
// //       3. DO NOT use 'import' or 'export'. Assume React, useState, etc., are globally available.
// //       4. Use Tailwind CSS classes for styling.
// //       5. Use 'lucide-react' icons via 'lucide' global object (e.g. <lucide.Rocket />).
// //       6. Return ONLY the Javascript code. No markdown formatting.
// //     `;

// //     const result = await model.generateContent(prompt);
// //     const response = await result.response;
// //     let text = response.text();
    
// //     // Cleanup markdown
// //     text = text.replace(/```jsx/g, "").replace(/```javascript/g, "").replace(/```/g, "");
    
// //     // Remove imports if AI adds them anyway
// //     text = text.replace(/import .*;/g, "");
// //     text = text.replace(/export default .*/g, "");

// //     return text;

// //   } catch (error) {
// //     console.error("❌ AI GENERATION FAILED:", error.message);
// //     throw error; 
// //   }
// // };











// import { GoogleGenerativeAI } from "@google/generative-ai";
// import dotenv from "dotenv";

// dotenv.config();

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// export const callGeminiCanvas = async (variant) => {
//   try {
//     console.log("🚀 STARTING AI GENERATION...");
    
//     const { name, problem, features = [], variant_name, persona } = variant;
//     const appName = name || variant_name || "App";
//     const appFeatures = Array.isArray(features) ? features.join(", ") : features;

//     // Use the reliable 1.5 Flash model
//     const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    
//     // ⚡ PROMPT: React + Tailwind + RAW SVGs (No Libraries)
//     const prompt = `
//       You are an expert React Developer.
//       Create a single-file React landing page component.
      
//       APP DETAILS:
//       - Name: ${appName}
//       - Persona: ${persona}
//       - Features: ${appFeatures}

//       CRITICAL RULES:
//       1. Write ONLY the functional component. Name it "App".
//       2. DO NOT use 'import' or 'export'.
//       3. Use Tailwind CSS classes for styling.
//       4. 🚨 ICONS: DO NOT use 'lucide-react' or any external icon library. 
//          Instead, use standard HTML <svg> tags for icons. 
//          (Example: <svg className="w-6 h-6" ...>...</svg>)
//       5. Return ONLY the Javascript code. No markdown formatting.
//     `;

//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     let text = response.text();
    
//     // Cleanup markdown
//     text = text.replace(/```jsx/g, "").replace(/```javascript/g, "").replace(/```/g, "");
    
//     // Remove imports if AI adds them anyway
//     text = text.replace(/import .*;/g, "");
//     text = text.replace(/export default .*/g, "");

//     return text;

//   } catch (error) {
//     console.error("❌ AI GENERATION FAILED:", error.message);
//     throw error; 
//   }
// };



import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const callGeminiCanvas = async (variant) => {
  try {
    console.log("🚀 STARTING VIBRANT UI GENERATION...");
    
    const { name, problem, features = [], variant_name, persona } = variant;
    const appName = name || variant_name || "App";
    const appFeatures = Array.isArray(features) ? features.join(", ") : features;

    // Use the reliable 1.5 Flash model
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    
    // 🎨 NEW: DYNAMIC STYLE INJECTION
    // We tell the AI to pick a style based on the persona BEFORE it codes.
    const prompt = `
      You are an award-winning UI/UX Designer known for VIBRANT, COLORFUL, and MODERN interfaces.
      Create a single-file React landing page component.
      
      APP CONTEXT:
      - App Name: ${appName}
      - Target Audience (Persona): ${persona}
      - Core Features: ${appFeatures}

      🎨 DESIGN DIRECTIVES (CRITICAL):
      1. **COLOR PALETTE:** You MUST use a vibrant color scheme that fits the "${persona}" persona.
         - If for Kids: Use bright yellows, oranges, purples, and rounded 'playful' shapes.
         - If for Gamers: Use dark mode with neon accents (cyan, magenta, lime).
         - If for Business: Use deep trust blues, clean whites, and subtle shadows.
         - If for Health/Nature: Use calming greens, teals, and soft gradients.
      2. **NO BORING BACKGROUNDS:** Do NOT use plain white (#ffffff) or plain black (#000000) backgrounds. 
         - Use Tailwind Gradients (e.g., bg-gradient-to-br from-purple-600 to-blue-500).
         - Use soft colored backgrounds (e.g., bg-slate-900, bg-indigo-50).
      3. **TYPOGRAPHY:** Use large, bold headings and readable text with high contrast.
      4. **VISUALS:** Use standard HTML <svg> icons abundantly to break up text.

      TECHNICAL RULES:
      1. Write ONLY the functional React component. Name it "App".
      2. DO NOT use 'import' or 'export'.
      3. DO NOT use external icon libraries. Use RAW SVG strings for icons.
      4. Use Tailwind CSS for all styling.
      5. Return ONLY the Javascript code.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    
    // Cleanup markdown and potential hallucinations
    text = text.replace(/```jsx/g, "").replace(/```javascript/g, "").replace(/```/g, "");
    text = text.replace(/import .*;/g, "");
    text = text.replace(/export default .*/g, "");

    return text;

  } catch (error) {
    console.error("❌ AI GENERATION FAILED:", error.message);
    throw error; 
  }
};