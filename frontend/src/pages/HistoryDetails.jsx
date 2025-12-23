// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import VariantCard from "../components/VariantCard";

// export default function HistoryDetails() {
//   const { id } = useParams();
//   const { token } = useAuth();

//   const [project, setProject] = useState(null);
//   const [variants, setVariants] = useState([]);

//   useEffect(() => {
//     axios.get(`http://localhost:5000/history/${id}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//     .then(res => {
//       setProject(res.data.project);
//       setVariants(res.data.variants);
//     })
//     .catch(err => console.error(err));
//   }, []);

//   if (!project) return <p className="text-white p-6">Loading...</p>;

//   return (
//     <div className="min-h-screen px-6 pt-24 text-white bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">

//       <h1 className="text-3xl font-bold mb-2">{project.idea}</h1>
//       <p className="opacity-60 mb-6">
//         {new Date(project.created_at).toLocaleString()}
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {variants.map((v, i) => (
//           <VariantCard key={i} variant={v} />
//         ))}
//       </div>
//     </div>
//   );
// }





import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { createClient } from '@supabase/supabase-js';
import { ArrowLeft, Loader2 } from "lucide-react";
import VariantCard from "../components/VariantCard"; // Ensure this path is correct for your project
import Header from "../components/Header";
import Footer from "../components/Footer";
// Initialize Supabase Client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function HistoryDetail() {
  const { id } = useParams(); // This is the project_id
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [variants, setVariants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjectDetails();
  }, [id]);

  const fetchProjectDetails = async () => {
    try {
      setLoading(true);

      // 1. Fetch the main Idea from 'projects' table
      const { data: projectData, error: projectError } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single();

      if (projectError) throw projectError;
      setProject(projectData);

      // 2. Fetch the associated variants from 'variants' table
      const { data: variantsData, error: variantsError } = await supabase
        .from('variants')
        .select('*')
        .eq('project_id', id);

      if (variantsError) throw variantsError;

      // 3. Map Database Columns to Component Props
      // This step is critical because your DB columns don't match the props typically used in UI components
      const mappedVariants = variantsData.map(v => ({
        id: v.id,
        name: v.variant_name,              // DB: variant_name -> Prop: name
        problem: v.problem_statement,      // DB: problem_statement -> Prop: problem
        features: v.core_features || [],   // DB: core_features (jsonb) -> Prop: features
        reasoning: v.tagline,              // DB: tagline -> Prop: reasoning (fallback)
        persona: v.persona,                // Pass through extra data
        ...v 
      }));

      setVariants(mappedVariants);

    } catch (err) {
      console.error("Error fetching details:", err.message);
      // Optional: redirect back to history on error
      // navigate('/history');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0F071A] text-white">
        <Loader2 className="animate-spin h-10 w-10 text-purple-500" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0F071A] text-white">
        <p className="text-xl mb-4">Project not found.</p>
        <Link to="/history" className="text-purple-400 hover:underline">Return to History</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 pt-24 pb-20 text-white bg-[#0F071A]">
      <Header />
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/history" 
          className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to History
        </Link>

        <div className="mb-10 pb-8 border-b border-white/10">
          <span className="text-purple-400 text-xs font-bold uppercase tracking-wider bg-purple-500/10 px-2 py-1 rounded">
            Original Concept
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
            {project.idea}
          </h1>
          <p className="opacity-60 font-mono text-sm mt-4">
            Generated on {new Date(project.created_at).toLocaleString()}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {variants.map((variant) => (
            // Ensure VariantCard can handle the props we mapped above (name, problem, features, reasoning)
            <VariantCard 
              key={variant.id} 
              variant={variant}
              // If your VariantCard has a "Generate UI" button, you can handle it here or pass a dummy function
              onGenerateUi={() => console.log(`Generate UI for variant: ${variant.id}`)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}