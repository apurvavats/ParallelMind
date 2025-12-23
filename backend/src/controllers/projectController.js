// import { supabase } from "../db.js";
// import { generateVariants } from "../utils/generateVariants.js";

// export const generateAndSaveProject = async (req, res) => {
//   try {
//     const user = req.user;
//     const { idea } = req.body;

//     // 1. Generate 5 variants
//     const { variants } = await generateVariants(idea);

//     // 2. Insert project
//     const { data: project, error: projectErr } = await supabase
//       .from("projects")
//       .insert({ user_id: user.id, idea })
//       .select()
//       .single();

//     if (projectErr) return res.status(400).json(projectErr);

//     // 3. Insert variants
//     const formatted = variants.map(v => ({
//       project_id: project.id,
//       variant_name: v.name,
//       summary: v.summary,
//       persona: v.full_plan.persona,
//       problem_statement: v.full_plan.problem,
//       core_features: v.full_plan.core_features,
//       user_flow: v.full_plan.user_flow,
//       mvp_tasks: v.full_plan.mvp_plan,
//       tagline: v.full_plan.tagline,
//       revenue_model: v.full_plan.business_model,
//     }));

//     const { data: variantRows, error: variantErr } = await supabase
//       .from("variants")
//       .insert(formatted)
//       .select();

//     if (variantErr) return res.status(400).json(variantErr);

//     res.json({
//       project,
//       variants: variantRows
//     });

//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Server error generating variants" });
//   }
// };




// import { supabase } from "../db.js";
// import { generateVariants } from "../utils/generateVariants.js";

// export const generateProjectAndVariants = async (req, res) => {
//   try {
//     const user = req.user; // authenticated user
//     const { idea } = req.body;

//     if (!idea) return res.status(400).json({ error: "Idea required" });

//     // 1. Call OpenAI to generate variants
//     const result = await generateVariants(idea);

//     // 2. Insert project base row
//     const { data: project, error: projectError } = await supabase
//       .from("projects")
//       .insert({ user_id: user.id, idea })
//       .select()
//       .single();

//     if (projectError) return res.status(500).json(projectError);

//     // 3. Insert variants
//     const formattedVariants = result.variants.map((v) => ({
//       project_id: project.id,
//       variant_name: v.name,
//       persona: v.full_plan.persona,
//       problem_statement: v.full_plan.problem,
//       core_features: v.full_plan.core_features,
//       user_flow: v.full_plan.user_flow,
//       mvp_tasks: v.full_plan.mvp_plan,
//       tagline: v.full_plan.tagline,
//       revenue_model: v.full_plan.business_model
//     }));

//     const { data: insertedVariants, error: varError } = await supabase
//       .from("variants")
//       .insert(formattedVariants)
//       .select();

//     if (varError) return res.status(500).json(varError);

//     res.json({
//       project,
//       variants: insertedVariants
//     });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// };







import { supabase } from "../db.js";
import { generateVariants } from "../utils/generateVariants.js";

export const generateProjectAndVariants = async (req, res) => {
  try {
    const user = req.user; 
    const { idea } = req.body;

    if (!idea) return res.status(400).json({ error: "Idea required" });

    // GEMINI: Get 5 enriched variants
    const result = await generateVariants(idea);

    if (!result || !result.variants) {
      return res.status(500).json({ error: "Gemini returned invalid response" });
    }

    // 1. Insert project
    const { data: project, error: projectError } = await supabase
      .from("projects")
      .insert({ user_id: user.id, idea })
      .select()
      .single();

    if (projectError) {
      console.log("PROJECT INSERT ERROR:", projectError);
      return res.status(500).json(projectError);
    }

    // 2. Format variants for DB insertion
    const formatted = result.variants.map((v) => ({
      project_id: project.id,
      variant_name: v.name,
      persona: v.full_plan.persona,
      problem_statement: v.full_plan.problem,
      core_features: v.full_plan.core_features,
      user_flow: v.full_plan.user_flow,
      mvp_tasks: v.full_plan.mvp_plan,
      tagline: v.full_plan.tagline,
      revenue_model: v.full_plan.business_model,
    }));

    // 3. Insert 5 variants
    const { data: inserted, error: varError } = await supabase
      .from("variants")
      .insert(formatted)
      .select();

    if (varError) {
      console.log("VARIANT INSERT ERROR:", varError);
      return res.status(500).json(varError);
    }

    // ✔ Return to frontend
    res.json({
      project,
      variants: inserted
    });

  } catch (err) {
    console.error("SERVER ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
};

