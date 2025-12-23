// import { supabase } from "../db.js";

// export const requireAuth = async (req, res, next) => {
//   const token = req.headers.authorization?.replace("Bearer ", "");

//   if (!token) return res.status(401).json({ error: "No token" });

//   const { data, error } = await supabase.auth.getUser(token);

//   if (error || !data.user) {
//     return res.status(401).json({ error: "Invalid token" });
//   }

//   req.user = data.user;
//   next();
// };

import { supabase } from "../db.js";

// MIDDLEWARE FUNCTION
export const requireAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) return res.status(401).json({ error: "No token provided" });

    const { data, error } = await supabase.auth.getUser(token);

    if (error || !data?.user) {
      return res.status(401).json({ error: "Invalid or expired token" });
    }

    // Attach full user object to request
    req.user = data.user;
    next();

  } catch (err) {
    console.error("AUTH MIDDLEWARE ERROR:", err);
    return res.status(500).json({ error: "Auth processing error" });
  }
};

// DEFAULT EXPORT (needed for: import authMiddleware from "../middleware/auth.js")
export default requireAuth;
