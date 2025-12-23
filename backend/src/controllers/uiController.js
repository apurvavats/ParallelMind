// // // // // // backend/src/controllers/uiController.js
// // // // // import { callGeminiCanvas } from "../utils/callGeminiCanvas.js";
// // // // // import fetch from "node-fetch"; // ensure node-fetch installed (v3 uses ESM)
// // // // // import dotenv from "dotenv";
// // // // // dotenv.config();

// // // // // const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
// // // // // const VERCEL_TEAM_ID = process.env.VERCEL_TEAM_ID || null; // optional

// // // // // export const generateMockup = async (req, res) => {
// // // // //   try {
// // // // //     const { variant } = req.body;
// // // // //     if (!variant) return res.status(400).json({ error: "Missing variant" });

// // // // //     // Use Gemini to produce a single-file React component or a set of files
// // // // //     const codeString = await callGeminiCanvas(variant);

// // // // //     // We expect the generator to return either:
// // // // //     //  - a single React component string (we will wrap into files)
// // // // //     //  - OR a JSON with files object (if your prompt instructs Gemini to return multiple files)
// // // // //     // Try parse if possible, otherwise wrap into a basic app structure.
// // // // //     let files = null;

// // // // //     try {
// // // // //       // If generator returns JSON with a "files" key
// // // // //       const maybeJson = JSON.parse(codeString);
// // // // //       if (maybeJson && maybeJson.files) {
// // // // //         files = maybeJson.files;
// // // // //       }
// // // // //     } catch (err) {
// // // // //       // not JSON — we'll create a small React app around the single component
// // // // //     }

// // // // //     if (!files) {
// // // // //       // Wrap component into a minimal React app for Sandpack & Vercel
// // // // //       const componentCode = codeString;
// // // // //       files = {
// // // // //         "/package.json": JSON.stringify(
// // // // //           {
// // // // //             name: "parallelmind-variant",
// // // // //             private: true,
// // // // //             version: "1.0.0",
// // // // //             scripts: { start: "vite" },
// // // // //             dependencies: {
// // // // //               react: "18.2.0",
// // // // //               "react-dom": "18.2.0",
// // // // //               "lucide-react": "0.268.0"
// // // // //             },
// // // // //             devDependencies: { vite: "5.0.0" }
// // // // //           },
// // // // //           null,
// // // // //           2
// // // // //         ),
// // // // //         "/index.html": `<!doctype html>
// // // // // <html>
// // // // //   <head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0"/></head>
// // // // //   <body>
// // // // //     <div id="root"></div>
// // // // //     <script type="module" src="/src/main.jsx"></script>
// // // // //   </body>
// // // // // </html>`,
// // // // //         "/src/main.jsx": `import React from "react";
// // // // // import { createRoot } from "react-dom/client";
// // // // // import App from "./App.jsx";
// // // // // import "./index.css";
// // // // // createRoot(document.getElementById("root")).render(<App />);`,
// // // // //         "/src/App.jsx": `import React from "react";
// // // // // import VariantComponent from "./Variant.jsx";
// // // // // export default function App(){ return <div className="min-h-screen p-6 bg-gradient-to-br from-[#0f0c29] to-[#24243e] text-white"><VariantComponent /></div> }`,
// // // // //         "/src/Variant.jsx": componentCode,
// // // // //         "/src/index.css": `@tailwind base; @tailwind components; @tailwind utilities; /* If using Tailwind in production, must be set up. For preview it's okay */`
// // // // //       };
// // // // //     }

// // // // //     // Respond with files object for frontend Sandpack
// // // // //     return res.json({ files });
// // // // //   } catch (err) {
// // // // //     console.error("UI CONTROLLER ERROR:", err);
// // // // //     return res.status(500).json({ error: "Failed to generate UI" });
// // // // //   }
// // // // // };

// // // // // export const deployMockup = async (req, res) => {
// // // // //   try {
// // // // //     const { files, name } = req.body;
// // // // //     if (!files) return res.status(400).json({ error: "Missing files in request" });
// // // // //     if (!VERCEL_TOKEN) return res.status(500).json({ error: "Vercel token not configured" });

// // // // //     // The Vercel API expects "files" as an array of { file: path, data: base64 } OR a form upload.
// // // // //     // We'll convert the incoming `files` object (path -> content string) into array with base64.
// // // // //     const fileEntries = Object.entries(files); // [ ["/src/App.jsx", "code..."], ... ]
// // // // //     const filesArray = fileEntries.map(([path, content]) => ({
// // // // //       file: path.startsWith("/") ? path.slice(1) : path,
// // // // //       data: Buffer.from(content, "utf-8").toString("base64"),
// // // // //     }));

// // // // //     const body = {
// // // // //       name: name || `parallelmind-${Date.now()}`,
// // // // //       files: filesArray,
// // // // //     };

// // // // //     // POST to Vercel deployments
// // // // //     const url = "https://api.vercel.com/v13/deployments";
// // // // //     const headers = {
// // // // //       Authorization: `Bearer ${VERCEL_TOKEN}`,
// // // // //       "Content-Type": "application/json",
// // // // //     };
// // // // //     if (VERCEL_TEAM_ID) headers["Vercel-Team"] = VERCEL_TEAM_ID;

// // // // //     const resp = await fetch(url, {
// // // // //       method: "POST",
// // // // //       headers,
// // // // //       body: JSON.stringify(body),
// // // // //     });

// // // // //     const data = await resp.json();
// // // // //     if (!resp.ok) {
// // // // //       console.error("Vercel deploy error", data);
// // // // //       return res.status(500).json({ error: "Vercel deploy failed", details: data });
// // // // //     }

// // // // //     // The response contains deployment URL in data.url or data.deployment?.url
// // // // //     const deployedUrl = data.url || data.deployment?.url || null;

// // // // //     return res.json({ deployment: data, url: deployedUrl });
// // // // //   } catch (err) {
// // // // //     console.error("DEPLOY CONTROLLER ERROR:", err);
// // // // //     return res.status(500).json({ error: "Deployment failed" });
// // // // //   }
// // // // // };

// // // // import { callGeminiCanvas } from "../utils/callGeminiCanvas.js";

// // // // // --- 1. Generate Mockup (Existing) ---
// // // // export const generateMockup = async (req, res) => {
// // // //   try {
// // // //     const { variant } = req.body;
// // // //     if (!variant) return res.status(400).json({ error: "Missing variant" });

// // // //     // IMPORTANT: Ensure callGeminiCanvas returns PURE code (no ```jsx markdown)
// // // //     const componentCode = await callGeminiCanvas(variant);

// // // //     const files = {
// // // //       "/package.json": JSON.stringify(
// // // //         {
// // // //           name: "parallelmind-ui",
// // // //           private: true,
// // // //           version: "1.0.0",
// // // //           dependencies: {
// // // //             react: "18.2.0",
// // // //             "react-dom": "18.2.0",
// // // //             "lucide-react": "0.268.0"
// // // //           }
// // // //         },
// // // //         null,
// // // //         2
// // // //       ),

// // // //       "/index.html": `
// // // // <!doctype html>
// // // // <html>
// // // //   <head>
// // // //     <meta charset="UTF-8" />
// // // //     <meta name="viewport" content="width=device-width, initial-scale=1" />
// // // //   </head>
// // // //   <body>
// // // //     <div id="root"></div>
// // // //     <script type="module" src="/src/main.jsx"></script>
// // // //   </body>
// // // // </html>
// // // //       `,

// // // //       "/src/main.jsx": `
// // // // import React from "react";
// // // // import { createRoot } from "react-dom/client";
// // // // import App from "./App.jsx";
// // // // import "./index.css";

// // // // createRoot(document.getElementById("root")).render(<App />);
// // // //       `,

// // // //       "/src/App.jsx": `
// // // // import React from "react";
// // // // import VariantComponent from "./Variant.jsx";

// // // // export default function App() {
// // // //   return (
// // // //     <div className="min-h-screen bg-[#0f0c29] text-white p-6">
// // // //       <VariantComponent />
// // // //     </div>
// // // //   );
// // // // }
// // // //       `,

// // // //       "/src/Variant.jsx": componentCode,

// // // //       "/src/index.css": `
// // // // @tailwind base;
// // // // @tailwind components;
// // // // @tailwind utilities;
// // // //       `
// // // //     };

// // // //     return res.json({ files });
// // // //   } catch (err) {
// // // //     console.error("UI GENERATE ERROR:", err);
// // // //     res.status(500).json({ error: "Failed to generate UI" });
// // // //   }
// // // // };

// // // // // --- 2. Deploy Mockup (ADDED THIS TO FIX CRASH) ---
// // // // export const deployMockup = async (req, res) => {
// // // //   try {
// // // //     const { files, name } = req.body;

// // // //     if (!files) return res.status(400).json({ error: "Missing files" });
// // // //     if (!process.env.VERCEL_TOKEN)
// // // //       return res.status(500).json({ error: "Vercel token not set" });

// // // //     const filesArray = Object.entries(files).map(([path, content]) => ({
// // // //       file: path.startsWith("/") ? path.slice(1) : path,
// // // //       data: Buffer.from(content).toString("base64"),
// // // //     }));

// // // //     const resp = await fetch("https://api.vercel.com/v13/deployments", {
// // // //       method: "POST",
// // // //       headers: {
// // // //         Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
// // // //         "Content-Type": "application/json",
// // // //       },
// // // //       body: JSON.stringify({
// // // //         name: name || `parallelmind-${Date.now()}`,
// // // //         files: filesArray,
// // // //       }),
// // // //     });

// // // //     const data = await resp.json();
// // // //     if (!resp.ok) {
// // // //       console.error("Vercel Error:", data);
// // // //       return res.status(500).json({ error: "Deploy failed", details: data });
// // // //     }

// // // //     return res.json({
// // // //       deployment: data,
// // // //       url: data.url || data.deployment?.url || null,
// // // //     });

// // // //   } catch (err) {
// // // //     console.error("DEPLOY ERROR:", err);
// // // //     res.status(500).json({ error: "Deployment failed" });
// // // //   }
// // // // };


// // // import { callGeminiCanvas } from "../utils/callGeminiCanvas.js";

// // // // --- 1. Generate Mockup (New Simple Version) ---
// // // export const generateMockup = async (req, res) => {
// // //   try {
// // //     const { variant } = req.body;
    
// // //     if (!variant) {
// // //       return res.status(400).json({ error: "Prompt is required" });
// // //     }

// // //     console.log("Generating code for:", variant);
    
// // //     // This now returns just the raw string of code (no file structure)
// // //     const code = await callGeminiCanvas(variant);
    
// // //     // Return just the raw code string to the frontend
// // //     return res.status(200).json({ code });

// // //   } catch (err) {
// // //     console.error("UI GENERATE ERROR:", err);
// // //     res.status(500).json({ error: "Failed to generate UI" });
// // //   }
// // // };

// // // // --- 2. Deploy Mockup (Placeholder) ---
// // // // We keep this function so your router doesn't crash, 
// // // // but it currently does nothing since we are focusing on the preview.
// // // export const deployMockup = async (req, res) => {
// // //   return res.status(200).json({ message: "Deploy feature coming soon!" });
// // // };



// // import { callGeminiCanvas } from "../utils/callGeminiCanvas.js";
// // import { deployToVercel } from "../utils/deployToVercel.js"; // 👈 Import the new utility

// // // --- 1. Generate Mockup (Preview Mode) ---
// // export const generateMockup = async (req, res) => {
// //   try {
// //     const { variant } = req.body;
    
// //     if (!variant) {
// //       return res.status(400).json({ error: "Prompt is required" });
// //     }

// //     console.log("🚀 Generating code for:", variant.variant_name);
    
// //     // This returns the raw React code string
// //     const code = await callGeminiCanvas(variant);
    
// //     // Return the code to frontend for the iframe preview
// //     return res.status(200).json({ code });

// //   } catch (err) {
// //     console.error("UI GENERATE ERROR:", err);
// //     res.status(500).json({ error: "Failed to generate UI" });
// //   }
// // };

// // // --- 2. Deploy Mockup (Vercel Live Mode) ---
// // export const deployMockup = async (req, res) => {
// //   try {
// //     // We expect the frontend to send the 'code' it is currently previewing
// //     const { code, variant_name } = req.body;

// //     if (!code) {
// //       return res.status(400).json({ error: "No code provided to deploy" });
// //     }

// //     console.log("🚀 Starting Deployment for:", variant_name);

// //     // Call the Vercel utility to create the project and deploy
// //     const deploymentUrl = await deployToVercel({ code, variant_name });

// //     // Success! Return the live URL
// //     return res.status(200).json({ 
// //       message: "Deployment Successful", 
// //       url: `https://${deploymentUrl}` // e.g., https://parallel-mind-app.vercel.app
// //     });

// //   } catch (err) {
// //     console.error("❌ DEPLOY ERROR:", err.message);
// //     res.status(500).json({ error: "Failed to deploy to Vercel" });
// //   }
// // };



// import { callGeminiCanvas } from "../utils/callGeminiCanvas.js";
// import { deployToVercel } from "../utils/deployToVercel.js";
// import { supabase } from "../db.js"; // 👈 Ensure this matches your db.js path

// // --- 1. Generate Mockup (With Database Caching) ---
// export const generateMockup = async (req, res) => {
//   try {
//     const { variant } = req.body;
    
//     // Validate inputs
//     if (!variant || !variant.id) {
//       return res.status(400).json({ error: "Variant ID is required" });
//     }

//     console.log("🔍 Checking DB for existing code...", variant.variant_name);

//     // 1. CHECK DATABASE FIRST
//     // We check the 'variants' table for the 'ui_code' column
//     const { data: existingData, error: dbError } = await supabase
//       .from('variants') 
//       .select('ui_code')
//       .eq('id', variant.id)
//       .single();

//     // If we found code, return it immediately (Cache Hit ⚡)
//     if (existingData && existingData.ui_code) {
//       console.log("⚡ Cache Hit! Returning stored code from DB.");
//       return res.status(200).json({ code: existingData.ui_code });
//     }

//     // 2. IF NO CODE, GENERATE NEW (Cache Miss 🤖)
//     console.log("🤖 Cache Miss. Calling Gemini API...");
    
//     // Call the AI (this takes time)
//     const code = await callGeminiCanvas(variant);

//     // 3. SAVE TO DATABASE (Background Operation)
//     // We update the 'ui_code' column for this variant so next time it's fast.
//     // We don't 'await' this blocking the response because we want the user to see the result ASAP.
//     supabase
//       .from('variants')
//       .update({ ui_code: code })
//       .eq('id', variant.id)
//       .then(({ error }) => {
//         if (error) console.error("❌ Failed to save code to DB:", error.message);
//         else console.log("💾 New code saved to Database!");
//       });

//     // 4. Return the freshly generated code
//     return res.status(200).json({ code });

//   } catch (err) {
//     console.error("❌ UI GENERATE ERROR:", err);
//     res.status(500).json({ error: "Failed to generate UI" });
//   }
// };

// // --- 2. Deploy Mockup (Vercel Live Mode) ---
// export const deployMockup = async (req, res) => {
//   try {
//     // We expect the frontend to send the 'code' it is currently previewing
//     const { code, variant_name } = req.body;

//     if (!code) {
//       return res.status(400).json({ error: "No code provided to deploy" });
//     }

//     console.log("🚀 Starting Deployment for:", variant_name);

//     // Call the Vercel utility to create the project and deploy
//     const deploymentUrl = await deployToVercel({ code, variant_name });

//     // Success! Return the live URL
//     return res.status(200).json({ 
//       message: "Deployment Successful", 
//       url: `https://${deploymentUrl}` // e.g., https://parallel-mind-site.vercel.app
//     });

//   } catch (err) {
//     console.error("❌ DEPLOY ERROR:", err.message);
//     res.status(500).json({ error: "Failed to deploy to Vercel" });
//   }
// };




import { callGeminiCanvas } from "../utils/callGeminiCanvas.js";
import { deployToVercel } from "../utils/deployToVercel.js";
import { supabase } from "../db.js"; 

// --- 1. Generate Mockup (With Database Caching) ---
export const generateMockup = async (req, res) => {
  try {
    const { variant } = req.body;
    
    if (!variant || !variant.id) {
      return res.status(400).json({ error: "Variant ID is required" });
    }

    console.log("🔍 Checking DB for existing code...", variant.variant_name);

    // 1. CHECK DATABASE FIRST
    // We check the 'variants' table for the 'ui_code' column
    const { data: existingData } = await supabase
      .from('variants') 
      .select('ui_code')
      .eq('id', variant.id)
      .single();

    // If we found code, return it immediately (Cache Hit ⚡)
    if (existingData && existingData.ui_code) {
      console.log("⚡ Cache Hit! Returning stored code.");
      return res.status(200).json({ code: existingData.ui_code });
    }

    // 2. IF NO CODE, GENERATE NEW (Cache Miss 🤖)
    console.log("🤖 Cache Miss. Calling Gemini API...");
    const code = await callGeminiCanvas(variant);

    // 3. SAVE TO DATABASE
    // ⚠️ IMPORTANT: We set 'ui_preview_url' to NULL. 
    // Why? Because we just generated NEW code. The old deployment link (if any) is now outdated/wrong.
    supabase
      .from('variants')
      .update({ 
        ui_code: code,
        ui_preview_url: null // Reset deployment status since code changed
      })
      .eq('id', variant.id)
      .then(({ error }) => {
        if (error) console.error("❌ Failed to save code:", error.message);
        else console.log("💾 New code saved & old deployment link reset!");
      });

    return res.status(200).json({ code });

  } catch (err) {
    console.error("❌ UI GENERATE ERROR:", err);
    res.status(500).json({ error: "Failed to generate UI" });
  }
};

// --- 2. Deploy Mockup (With Link Caching) ---
export const deployMockup = async (req, res) => {
  try {
    // We expect 'variant_id' to be sent from frontend now
    const { code, variant_name, variant_id } = req.body;

    if (!code) return res.status(400).json({ error: "No code provided" });
    if (!variant_id) return res.status(400).json({ error: "Variant ID is required" });

    console.log("🚀 Deployment requested for:", variant_name);

    // 1. CHECK FOR EXISTING LIVE LINK
    const { data: existingData } = await supabase
      .from('variants')
      .select('ui_preview_url')
      .eq('id', variant_id)
      .single();

    // If we have a link, return it immediately (Zero API Cost)
    if (existingData && existingData.ui_preview_url) {
      console.log("⚡ Link Cache Hit! Returning existing Vercel URL.");
      return res.status(200).json({ 
        message: "Returning Cached Deployment", 
        url: existingData.ui_preview_url 
      });
    }

    // 2. NO LINK FOUND? DEPLOY TO VERCEL
    console.log("☁️ No live link found. Deploying to Vercel...");
    
    // This function now generates a UNIQUE project name internally
    const deploymentUrl = await deployToVercel({ code, variant_name });
    
    // Ensure URL has protocol
    const fullUrl = `https://${deploymentUrl}`;

    // 3. SAVE NEW LINK TO DATABASE
    // So next time, we don't have to deploy again.
    await supabase
      .from('variants')
      .update({ ui_preview_url: fullUrl })
      .eq('id', variant_id);

    console.log("💾 New deployment link saved to DB!");

    return res.status(200).json({ 
      message: "Deployment Successful", 
      url: fullUrl 
    });

  } catch (err) {
    console.error("❌ DEPLOY ERROR:", err.message);
    res.status(500).json({ error: "Failed to deploy to Vercel" });
  }
};