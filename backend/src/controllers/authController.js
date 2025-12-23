// // import { supabase } from "../db.js";

// // // SIGNUP
// // export const signup = async (req, res) => {
// //   try {
// //     const { email, password } = req.body;

// //     const { data, error } = await supabase.auth.signUp({
// //       email,
// //       password,
// //     });

// //     if (error) {
// //       console.log("SIGNUP ERROR:", error.message);
// //       return res.status(400).json({ error: error.message });
// //     }

// //     return res.json({
// //       message: "Signup success",
// //       user: data.user,
// //     });

// //   } catch (err) {
// //     console.log(err);
// //     res.status(500).json({ error: "Server error" });
// //   }
// // };

// // // LOGIN
// // export const login = async (req, res) => {
// //   try {
// //     const { email, password } = req.body;

// //     const { data, error } = await supabase.auth.signInWithPassword({
// //       email,
// //       password,
// //     });

// //     if (error) {
// //       console.log("LOGIN ERROR:", error.message);
// //       return res.status(400).json({ error: error.message });
// //     }

// //     return res.json({
// //       message: "Login success",
// //       token: data.session.access_token,
// //       user: data.user,
// //     });

// //   } catch (err) {
// //     console.log(err);
// //     res.status(500).json({ error: "Server error" });
// //   }
// // };











// import { supabase } from "../db.js";

// // ------------------- SIGNUP -------------------
// export const signup = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const { data, error } = await supabase.auth.signUp({
//       email,
//       password,
//     });

//     if (error) return res.status(400).json({ error: error.message });

//     return res.json({
//       message: "Signup successful",
//       user: data.user,
//     });
//   } catch (err) {
//     return res.status(500).json({ error: "Server error" });
//   }
// };

// // ------------------- LOGIN -------------------
// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     if (error) {
//       console.log("LOGIN ERROR:", error.message);
//       return res.status(400).json({ error: error.message });
//     }

//     return res.json({
//       message: "Login success",
//       token: data.session.access_token,
//       user: data.user,
//     });
//   } catch (err) {
//     return res.status(500).json({ error: "Server error" });
//   }
// };







// backend/src/controllers/authController.js
// import { supabase } from "../db.js";

// export const signup = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const { data, error } = await supabase.auth.signUp({ email, password });

//     if (error) return res.status(400).json({ error: error.message });

//     res.json({ message: "Signup success", user: data.user });

//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// };

// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     if (error) return res.status(400).json({ error: error.message });

//     res.json({
//       message: "Login success",
//       token: data.session.access_token,
//       user: data.user,
//     });

//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// };



// backend/src/controllers/authController.js
import { supabase } from "../db.js";

// ------------------- SIGNUP -------------------
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) return res.status(400).json({ error: "Name is required" });

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },   // ⬅ SAVE NAME HERE
      },
    });

    if (error) return res.status(400).json({ error: error.message });

    return res.json({
      message: "Signup successful",
      user: data.user,
    });

  } catch (err) {
    console.log("SIGNUP SERVER ERROR:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

// ------------------- LOGIN -------------------
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) return res.status(400).json({ error: error.message });

    return res.json({
      message: "Login success",
      token: data.session.access_token,
      user: {
        id: data.user.id,
        email: data.user.email,
        name: data.user.user_metadata?.name || null,  // ⬅ READ NAME HERE
      },
    });

  } catch (err) {
    console.log("LOGIN SERVER ERROR:", err);
    return res.status(500).json({ error: "Server error" });
  }
};
