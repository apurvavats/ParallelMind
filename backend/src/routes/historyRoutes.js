// // import express from "express";
// // import { requireAuth } from "../middleware/auth.js";
// // import { getHistory } from "../controllers/historyController.js";

// // const router = express.Router();

// // // GET /history
// // router.get("/", requireAuth, getHistory);

// // export default router;
// // import express from "express";
// // import { requireAuth } from "../middleware/auth.js";
// // import { getHistoryList, getHistoryDetails } from "../controllers/historyController.js";

// // const router = express.Router();

// // router.get("/", requireAuth, getHistoryList);
// // router.get("/:id", requireAuth, getHistoryDetails);

// // export default router;

// // routes/historyRoutes.js
// // import express from "express";
// // import { supabase } from "../db.js";
// // import requireAuth from "../middleware/auth.js";   // ✅ FIXED

// // const router = express.Router();

// // router.get("/", requireAuth, async (req, res) => {
// //   try {
// //     const userId = req.user.id;

// //     const { data, error } = await supabase
// //       .from("projects")
// //       .select("id, idea, created_at")
// //       .eq("user_id", userId)
// //       .order("created_at", { ascending: false });

// //     if (error) return res.status(500).json({ error: error.message });

// //     res.json({ history: data });   // ✅ always return an object
// //   } catch (err) {
// //     console.error("HISTORY ERROR:", err);
// //     res.status(500).json({ error: "Server error" });
// //   }
// // });

// // export default router;\


// import express from "express";
// import { requireAuth } from "../middleware/auth.js";
// import { supabase } from "../db.js";

// const router = express.Router();

// router.get("/", requireAuth, async (req, res) => {
//   try {
//     const userId = req.user.id;

//     const { data, error } = await supabase
//       .from("projects")
//       .select("id, idea, created_at")
//       .eq("user_id", userId)
//       .order("created_at", { ascending: false });

//     if (error) return res.status(500).json({ error: error.message });

//     res.json({ history: data });
//   } catch (err) {
//     return res.status(500).json({ error: "Server error" });
//   }
// });

// export default router;



import express from "express";
import { requireAuth } from "../middleware/auth.js";
import { supabase } from "../db.js";

const router = express.Router();

// 1. GET ALL HISTORY (List)
router.get("/", requireAuth, async (req, res) => {
  try {
    const userId = req.user.id;
    const { data, error } = await supabase
      .from("projects")
      .select("id, idea, created_at")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (error) throw error;
    res.json({ history: data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. GET SINGLE PROJECT DETAILS (New Route)
router.get("/:id", requireAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    // Fetch Project (Security: Must match User ID)
    const { data: project, error: projError } = await supabase
      .from("projects")
      .select("*")
      .eq("id", id)
      .eq("user_id", userId) // 👈 Important security check
      .single();

    if (projError || !project) return res.status(404).json({ error: "Project not found" });

    // Fetch Variants
    const { data: variants, error: varError } = await supabase
      .from("variants")
      .select("*")
      .eq("project_id", id);

    if (varError) throw varError;

    res.json({ project, variants });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
