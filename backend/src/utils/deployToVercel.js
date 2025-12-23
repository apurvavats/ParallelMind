// // import axios from "axios";

// // export const deployToVercel = async (projectData) => {
// //   const { code, variant_name } = projectData;

// //   console.log("🚀 Starting Vercel Deployment for:", variant_name);

// //   // 1. Prepare the Code for Production
// //   // Since we stripped imports for the preview, we add them back now.
// //   const prodCode = `
// //     import React, { useState, useEffect, useRef } from 'react';
// //     import { createRoot } from 'react-dom/client';
    
// //     // We stick to SVGs so we don't need to import icons!
    
// //     ${code}

// //     const container = document.getElementById('root');
// //     const root = createRoot(container);
// //     root.render(<App />);
// //   `;

// //   // 2. Define the Virtual File System (Standard Vite Structure)
// //   const files = [
// //     {
// //       file: "package.json",
// //       data: JSON.stringify({
// //         name: "parallel-mind-generated",
// //         private: true,
// //         version: "0.0.0",
// //         type: "module",
// //         scripts: {
// //           dev: "vite",
// //           build: "vite build",
// //           preview: "vite preview"
// //         },
// //         dependencies: {
// //           "react": "^18.2.0",
// //           "react-dom": "^18.2.0"
// //         },
// //         devDependencies: {
// //           "@types/react": "^18.2.15",
// //           "@types/react-dom": "^18.2.7",
// //           "@vitejs/plugin-react": "^4.0.3",
// //           "autoprefixer": "^10.4.14",
// //           "postcss": "^8.4.27",
// //           "tailwindcss": "^3.3.3",
// //           "vite": "^4.4.5"
// //         }
// //       })
// //     },
// //     {
// //       file: "index.html",
// //       data: `
// //         <!DOCTYPE html>
// //         <html lang="en">
// //           <head>
// //             <meta charset="UTF-8" />
// //             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
// //             <title>${variant_name}</title>
// //           </head>
// //           <body>
// //             <div id="root"></div>
// //             <script type="module" src="/src/main.jsx"></script>
// //           </body>
// //         </html>
// //       `
// //     },
// //     {
// //       file: "vite.config.js",
// //       data: `
// //         import { defineConfig } from 'vite'
// //         import react from '@vitejs/plugin-react'

// //         export default defineConfig({
// //           plugins: [react()],
// //         })
// //       `
// //     },
// //     {
// //       file: "postcss.config.js",
// //       data: `
// //         export default {
// //           plugins: {
// //             tailwindcss: {},
// //             autoprefixer: {},
// //           },
// //         }
// //       `
// //     },
// //     {
// //       file: "tailwind.config.js",
// //       data: `
// //         /** @type {import('tailwindcss').Config} */
// //         export default {
// //           content: [
// //             "./index.html",
// //             "./src/**/*.{js,ts,jsx,tsx}",
// //           ],
// //           theme: {
// //             extend: {},
// //           },
// //           plugins: [],
// //         }
// //       `
// //     },
// //     {
// //       file: "src/index.css",
// //       data: `
// //         @tailwind base;
// //         @tailwind components;
// //         @tailwind utilities;
        
// //         body { background-color: #000; color: white; }
// //       `
// //     },
// //     {
// //       file: "src/main.jsx",
// //       data: prodCode // Inject our processed Gemini code here
// //     }
// //   ];

// //   // 3. Call Vercel API
// //   try {
// //     const response = await axios.post(
// //       "https://api.vercel.com/v13/deployments",
// //       {
// //         name: "parallel-mind-app", // Project name in your Vercel dashboard
// //         files: files, // The virtual file system
// //         target: "production", // Immediate production deploy
// //         projectSettings: {
// //           framework: "vite" // Tells Vercel how to build it
// //         }
// //       },
// //       {
// //         headers: {
// //           Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
// //           "Content-Type": "application/json"
// //         }
// //       }
// //     );

// //     console.log("✅ Vercel Deployment Initiated:", response.data.url);
// //     return response.data.url; // Returns the live URL (e.g., app-name.vercel.app)

// //   } catch (error) {
// //     console.error("❌ Vercel Deployment Failed:", error.response?.data || error.message);
// //     throw new Error("Deployment failed. Check server logs.");
// //   }
// // };



// import axios from "axios";

// export const deployToVercel = async (projectData) => {
//   const { code, variant_name } = projectData;

//   console.log("🚀 Starting Vercel Deployment (Static Mode) for:", variant_name);

//   // We are going to deploy the EXACT same HTML structure that works in your Preview.
//   // This uses Client-Side Rendering (Babel Standalone) to ensure 100% visual parity.
//   const htmlContent = `
//     <!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>${variant_name}</title>
        
//         <script src="https://cdn.tailwindcss.com"></script>
        
//         <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
//         <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        
//         <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        
//         <script src="https://unpkg.com/lucide@latest"></script>

//         <style>
//           body { background-color: #0f0c29; color: white; margin: 0; min-height: 100vh; }
//           #root { width: 100%; height: 100%; }
//         </style>
//       </head>
//       <body>
//         <div id="root"></div>

//         <script type="text/babel">
//           // Error Handling
//           window.onerror = function(message, source, lineno, colno, error) {
//             document.body.innerHTML = '<div style="color:red; padding:20px;"><h1>Runtime Error</h1><p>' + message + '</p></div>';
//           };

//           // 1. Make React globals available
//           const { useState, useEffect, useRef } = React;
//           const lucide = window.lucide;

//           // 2. INJECT YOUR GEMINI CODE HERE
//           ${code}

//           // 3. Render the App
//           const root = ReactDOM.createRoot(document.getElementById('root'));
//           root.render(<App />);
//         </script>
//       </body>
//     </html>
//   `;

//   // Define the file structure for Vercel (Just one file!)
//   const files = [
//     {
//       file: "index.html",
//       data: htmlContent
//     }
//   ];

//   try {
//     const response = await axios.post(
//       "https://api.vercel.com/v13/deployments",
//       {
//         name: "parallel-mind-site", // You can change this project name
//         files: files,
//         target: "production",
//         projectSettings: {
//           // IMPORTANT: Tell Vercel this is NOT a framework, just static HTML
//           framework: null 
//         }
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
//           "Content-Type": "application/json"
//         }
//       }
//     );

//     console.log("✅ Deployment Successful:", response.data.url);
//     return response.data.url;

//   } catch (error) {
//     console.error("❌ Vercel Deployment Failed:", error.response?.data || error.message);
//     throw new Error("Deployment failed. Check server logs.");
//   }
// };


import axios from "axios";

export const deployToVercel = async (projectData) => {
  const { code, variant_name } = projectData;

  // 1. Generate a Unique Project Name
  // This prevents websites from overwriting each other.
  // Example: "My Cool App" -> "my-cool-app-x9d2"
  const sanitized = variant_name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-") // Replace special chars with dashes
    .replace(/-+/g, "-")        // Remove double dashes
    .replace(/^-|-$/g, "");     // Remove leading/trailing dashes

  // Add random suffix to ensure it is ALWAYS unique
  const uniqueProjectName = `${sanitized}-${Math.random().toString(36).substring(2, 7)}`;

  console.log(`🚀 Starting Deployment for unique project: ${uniqueProjectName}`);

  // 2. The Static HTML Content
  // Uses Client-Side Rendering (Babel Standalone) for 100% visual match with Preview.
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${variant_name}</title>
        
        <script src="https://cdn.tailwindcss.com"></script>
        
        <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        
        <script src="https://unpkg.com/lucide@latest"></script>

        <style>
          body { background-color: #0f0c29; color: white; margin: 0; min-height: 100vh; }
          #root { width: 100%; height: 100%; }
        </style>
      </head>
      <body>
        <div id="root"></div>

        <script type="text/babel">
          // Error Handling
          window.onerror = function(message, source, lineno, colno, error) {
            document.body.innerHTML = '<div style="color:red; padding:20px;"><h1>Runtime Error</h1><p>' + message + '</p></div>';
          };

          // 1. Make React globals available
          const { useState, useEffect, useRef } = React;
          const lucide = window.lucide;

          // 2. INJECT GEMINI CODE
          ${code}

          // 3. Render the App
          const root = ReactDOM.createRoot(document.getElementById('root'));
          root.render(<App />);
        </script>
      </body>
    </html>
  `;

  // Define the file structure
  const files = [
    {
      file: "index.html",
      data: htmlContent
    }
  ];

  try {
    const response = await axios.post(
      "https://api.vercel.com/v13/deployments",
      {
        name: uniqueProjectName, // 👈 KEY CHANGE: Uses the unique name we generated
        files: files,
        target: "production",
        projectSettings: {
          framework: null 
        }
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("✅ Deployment Successful:", response.data.url);
    
    // Return the URL. Vercel automatically maps the project name to a URL.
    // e.g., https://my-cool-app-x9d2.vercel.app
    return response.data.url;

  } catch (error) {
    console.error("❌ Vercel Deployment Failed:", error.response?.data || error.message);
    throw new Error("Deployment failed. Check server logs.");
  }
};