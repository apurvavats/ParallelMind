// // import express from "express";
// // import cors from "cors";
// // import authRoutes from "./routes/authRoutes.js";
// // import projectRoutes from "./routes/projectRoutes.js";
// // import uiRoutes from "./routes/uiRoutes.js";

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // // routes
// // app.use("/auth", authRoutes);
// // app.use("/projects", projectRoutes);
// // app.use("/ui", uiRoutes);

// // app.listen(5000, () => console.log("Backend running on port 5000"));







// // import express from "express";
// // import cors from "cors";
// // // 🚨 FIX: Add .default to the imports
// // import authRoutes from "./routes/authRoutes.js"; // This variable is an object { default: routerFunction }
// // import projectRoutes from "./routes/projectRoutes.js";
// // import uiRoutes from "./routes/uiRoutes.js";

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // // 🚨 FIX: Change the usage here to use the default property
// // app.use("/auth", authRoutes.default); 
// // app.use("/projects", projectRoutes.default);
// // app.use("/ui", uiRoutes.default);

// // app.listen(5000, () => console.log("Backend running on port 5000"));














// import express from "express";
// import cors from "cors";
// import authRoutes from "./routes/authRoutes.js";
// import projectRoutes from "./routes/projectRoutes.js";
// import uiRoutes from "./routes/uiRoutes.js";
// import dotenv from "dotenv";

// const app = express();
// app.use(cors({
//   origin: "http://localhost:5173",
//   credentials: true
// }));

// app.use(express.json());

// app.use("/auth", authRoutes);
// app.use("/projects", projectRoutes);
// app.use("/ui", uiRoutes);

// app.listen(5000, () => console.log("Backend running on port 5000"));



// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";


// dotenv.config();   // <-- REQUIRED

// import authRoutes from "./routes/authRoutes.js";
// import projectRoutes from "./routes/projectRoutes.js";
// import uiRoutes from "./routes/uiRoutes.js";
// import historyRoutes from "./routes/historyRoutes.js";
// const app = express();

// app.use(cors({
//   origin: "http://localhost:5173",
//   credentials: true
// }));

// app.use(express.json());

// // ROUTES
// app.use("/auth", authRoutes);
// app.use("/projects", projectRoutes);
// app.use("/ui", uiRoutes);
// app.use("/history", historyRoutes);


// // START SERVER
// app.listen(5000, () => console.log("Backend running on port 5000"));



// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";

// // Import Routes (Ensure these files exist in /src/routes/)
// import authRoutes from "./routes/authRoutes.js";
// import projectRoutes from "./routes/projectRoutes.js";
// import uiRoutes from "./routes/uiRoutes.js";
// import historyRoutes from "./routes/historyRoutes.js";
// import feedbackRoutes from "./routes/feedbackRoutes.js";
// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware

// app.use(
//   cors({
//     origin: ["http://localhost:5173", "http://localhost:5174"],
//     credentials: true,
//   })
// );


// app.use(express.json());

// // --- MOUNT ROUTES ---
// app.use("/auth", authRoutes);       // http://localhost:5000/auth/...
// app.use("/projects", projectRoutes); // http://localhost:5000/projects/...
// app.use("/ui", uiRoutes);           // http://localhost:5000/ui/... (CRITICAL for generator)
// app.use("/history", historyRoutes); // http://localhost:5000/history/...
// app.use("/feedback", feedbackRoutes);
// // Basic Health Check (Open http://localhost:5000 in browser to test)
// app.get("/", (req, res) => {
//   res.send("✅ ParallelMind Backend is Running!");
// });

// // Start Server
// app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Import Routes
import authRoutes from "./routes/authRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import uiRoutes from "./routes/uiRoutes.js";
import historyRoutes from "./routes/historyRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";

dotenv.config();

const app = express();

// --- CRITICAL UPDATE FOR DEPLOYMENT ---
// Render will automatically provide a PORT environment variable.
// If it's missing, it falls back to 5000.
const PORT = process.env.PORT || 5000;

// --- UPDATED CORS SETTINGS ---
// We change origin to "*" to allow ANY frontend (Vercel) to talk to this backend.
// This prevents "CORS Errors" immediately after deployment.
app.use(
  cors({
    origin: "*", // 👈 CHANGED: Allows access from Vercel, Localhost, anywhere
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// --- MOUNT ROUTES ---
app.use("/auth", authRoutes);
app.use("/projects", projectRoutes);
app.use("/ui", uiRoutes);
app.use("/history", historyRoutes);
app.use("/feedback", feedbackRoutes);

// Basic Health Check (Useful to check if Render deploy succeeded)
app.get("/", (req, res) => {
  res.send("✅ ParallelMind Backend is Running!");
});

// Start Server
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));









// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";

// // Import Routes
// import authRoutes from "./routes/authRoutes.js";
// import projectRoutes from "./routes/projectRoutes.js";
// import uiRoutes from "./routes/uiRoutes.js";
// import historyRoutes from "./routes/historyRoutes.js";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // --- 1. MIDDLEWARE ---

// // Keep your exact CORS settings
// app.use(
//   cors({
//     origin: ["http://localhost:5173", "http://localhost:5174"],
//     credentials: true,
//   })
// );

// app.use(express.json());

// // [NEW] Debug Logger: Prints every single request to the terminal.
// // If you don't see this log when you click the button, the request isn't even reaching the server.
// app.use((req, res, next) => {
//   console.log(`\n🔔 [${new Date().toLocaleTimeString()}] INCOMING: ${req.method} ${req.originalUrl}`);
//   next();
// });

// // --- 2. MOUNT ROUTES ---
// app.use("/auth", authRoutes);       
// app.use("/projects", projectRoutes); 
// app.use("/ui", uiRoutes);           
// app.use("/history", historyRoutes); 

// // Basic Health Check
// app.get("/", (req, res) => {
//   res.send("✅ Backend is Running!");
// });

// // [NEW] Global Error Handler
// // This catches crashes that usually make the server stop silently.
// app.use((err, req, res, next) => {
//   console.error("🔥 CRITICAL SERVER ERROR:", err.stack); // Prints the exact line number of the crash
  
//   // Prevent "Headers already sent" errors if response already started
//   if (res.headersSent) {
//     return next(err);
//   }
  
//   res.status(500).json({ 
//     error: "Internal Server Error", 
//     details: err.message 
//   });
// });

// // --- 3. START SERVER ---
// app.listen(PORT, () => {
//   console.log(`\n✅ SERVER RUNNING ON: http://localhost:${PORT}`);
//   console.log("   Waiting for frontend requests...");
// });