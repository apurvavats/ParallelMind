// import { supabase } from "../db.js";

// export const getUserHistory = async (req, res) => {
//   try {
//     const user = req.user;

//     // Fetch all projects of this user + join variants
//     const { data, error } = await supabase
//       .from("projects")
//       .select(`
//         id,
//         idea,
//         created_at,
//         variants:variants (
//           id,
//           variant_name,
//           summary,
//           persona,
//           problem_statement,
//           tagline
//         )
//       `)
//       .eq("user_id", user.id)
//       .order("created_at", { ascending: false });

//     if (error) return res.status(500).json({ error: error.message });

//     res.json({ history: data });

//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// };
// import { supabase } from "../db.js";

// export const getHistory = async (req, res) => {
//   try {
//     const userId = req.user.id;

//     // 1️⃣ Fetch all projects for this user
//     const { data: projects, error: projectError } = await supabase
//       .from("projects")
//       .select("*")
//       .eq("user_id", userId)
//       .order("created_at", { ascending: false });

//     if (projectError) return res.status(500).json(projectError);

//     // 2️⃣ Fetch all variants for these projects
//     const projectIds = projects.map(p => p.id);

//     const { data: variants, error: variantError } = await supabase
//       .from("variants")
//       .select("*")
//       .in("project_id", projectIds);

//     if (variantError) return res.status(500).json(variantError);

//     // 3️⃣ Group variants under their projects
//     const history = projects.map(p => ({
//       ...p,
//       variants: variants.filter(v => v.project_id === p.id)
//     }));

//     return res.json({ history });

//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Server error" });
//   }
// };
import { supabase } from "../db.js";

export const getHistoryList = async (req, res) => {
  try {
    const user = req.user;

    const { data, error } = await supabase
      .from("projects")
      .select("id, idea, created_at")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) return res.status(500).json({ error: error.message });

    res.json(data);

  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getHistoryDetails = async (req, res) => {
  try {
    const id = req.params.id;

    const { data: project } = await supabase
      .from("projects")
      .select("*")
      .eq("id", id)
      .single();

    const { data: variants } = await supabase
      .from("variants")
      .select("*")
      .eq("project_id", id);

    res.json({ project, variants });

  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
