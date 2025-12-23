// // backend/src/routes/uiRoutes.js
// import express from "express";
// import { requireAuth } from "../middleware/auth.js";
// import { generateCode, deployToVercelHandler } from "../controllers/generateUIController.js";

// const router = express.Router();

// // Generate React code (Gemini)
// router.post("/generate-code", requireAuth, generateCode);

// // Deploy code to Vercel
// router.post("/deploy", requireAuth, deployToVercelHandler);

// export default router;

// import express from "express";
// import { generateUI } from "../controllers/generateUI.js";
// import { requireAuth } from "../middleware/auth.js";

// const router = express.Router();

// router.post("/mockup", requireAuth, generateUI);

// export default router;



// backend/src/routes/uiRoutes.js
// import express from "express";
// import { requireAuth } from "../middleware/auth.js";
// import { generateMockup, deployMockup } from "../controllers/uiController.js";

// const router = express.Router();


// // Generate UI code (calls Gemini Canvas-style generator)
// router.post("/mockup", requireAuth, generateMockup);

// // Deploy generated files to Vercel
// router.post("/deploy", requireAuth, deployMockup);

// export default router;



import express from "express";
import { requireAuth } from "../middleware/auth.js";
import { generateMockup, deployMockup } from "../controllers/uiController.js"; // Importing from the file we just fixed

const router = express.Router();

// 1. Change "/mockup" to "/generate" to match your frontend API call
// Full URL: http://localhost:5000/ui/generate
router.post("/generate", requireAuth, generateMockup);

// 2. Deploy route (Placeholder)
// Full URL: http://localhost:5000/ui/deploy
router.post("/deploy", requireAuth, deployMockup);

export default router;
