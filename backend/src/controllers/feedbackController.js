import { supabase } from "../db.js";

export const submitFeedback = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    console.log("📩 Receiving feedback from:", email);

    const { error } = await supabase
      .from('feedback')
      .insert([{ name, email, message }]);

    if (error) throw error;

    res.status(200).json({ message: "Feedback received!" });

  } catch (err) {
    console.error("❌ FEEDBACK ERROR:", err.message);
    res.status(500).json({ error: "Failed to save feedback" });
  }
};