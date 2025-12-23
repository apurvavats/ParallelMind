// import express from "express";
// import { requireAuth } from "../middleware/auth.js";
// import { getHistory } from "../controllers/historyController.js";

// const router = express.Router();

// // GET /history
// router.get("/", requireAuth, getHistory);

// export default router;
// import express from "express";
// import { requireAuth } from "../middleware/auth.js";
// import { getHistoryList, getHistoryDetails } from "../controllers/historyController.js";

// const router = express.Router();

// router.get("/", requireAuth, getHistoryList);
// router.get("/:id", requireAuth, getHistoryDetails);

// export default router;

// routes/historyRoutes.js
// import express from "express";
// import { supabase } from "../db.js";
// import requireAuth from "../middleware/auth.js";   // ✅ FIXED

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

//     res.json({ history: data });   // ✅ always return an object
//   } catch (err) {
//     console.error("HISTORY ERROR:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// export default router;\


import express from "express";
import { requireAuth } from "../middleware/auth.js";
import { supabase } from "../db.js";

const router = express.Router();

router.get("/", requireAuth, async (req, res) => {
  try {
    const userId = req.user.id;

    const { data, error } = await supabase
      .from("projects")
      .select("id, idea, created_at")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (error) return res.status(500).json({ error: error.message });

    res.json({ history: data });
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
});

export default router;


