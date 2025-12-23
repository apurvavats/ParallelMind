// // import { useState } from "react";
// // import { useAuth } from "../context/AuthContext";
// // import axios from "axios";

// // export default function IdeaInput({ onResult }) {
// //   const [idea, setIdea] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const { token } = useAuth();

// //   const submit = async () => {
// //     if (!idea.trim()) return alert("Enter an idea!");

// //     setLoading(true);

// //     try {
// //       const res = await axios.post(
// //         "http://localhost:5000/projects/generate",
// //         { idea },
// //         { headers: { Authorization: `Bearer ${token}` } }
// //       );

// //       onResult(res.data);

// //     } catch (err) {
// //       alert("Error generating variants");
// //     }

// //     setLoading(false);
// //   };

// //   return (
// //     <div className="w-full max-w-2xl mt-6">
// //       <textarea
// //         value={idea}
// //         onChange={(e) => setIdea(e.target.value)}
// //         className="w-full p-4 rounded-lg bg-white/10 text-white border border-gray-300"
// //         rows="4"
// //         placeholder="Enter your idea..."
// //       />

// //       <button
// //         onClick={submit}
// //         disabled={loading}
// //         className="w-full mt-4 bg-purple-600 py-3 rounded-lg"
// //       >
// //         {loading ? "Generating…" : "Generate Variants"}
// //       </button>
// //     </div>
// //   );
// // }

// import { useState } from "react";
// import { Sparkles, Loader2 } from "lucide-react";
// import axios from "axios";
// import { useAuth } from "../context/AuthContext";

// export default function IdeaInput({ onResult }) {
//   const [text, setText] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { token } = useAuth();

//   const generate = async (e) => {
//     e.preventDefault();
//     if (!text) return;

//     setLoading(true);

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/projects/generate",
//         { idea: text },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       onResult(res.data.variants);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={generate} className="relative w-full">
//       <textarea
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Describe your product idea here…"
//         className="w-full h-32 bg-[#0a0a0a]/40 text-white p-4 rounded-xl border border-white/10 focus:border-pink-500/50 resize-none outline-none placeholder:text-gray-600 text-lg"
//       />

//       <div className="mt-4 flex justify-end">
//         <button
//           disabled={loading || !text}
//           className="px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:scale-105 transition-all flex items-center gap-2 disabled:opacity-50"
//         >
//           {loading ? <Loader2 className="animate-spin" /> : <Sparkles />}
//           {loading ? "Architecting..." : "Generate Variants"}
//         </button>
//       </div>
//     </form>
//   );
// }

// import { useState } from "react";
// import axios from "axios";
// import { Sparkles, Loader2 } from "lucide-react";
// import { useAuth } from "../context/AuthContext";

// export default function IdeaInput({ onResult }) {
//   const [idea, setIdea] = useState("");
//   const [loading, setLoading] = useState(false);

//   const { token } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!idea.trim()) return;

//     setLoading(true);

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/ui/variants",
//         { idea },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       onResult(res.data.variants);
//     } catch (err) {
//       console.error("VARIANT API ERROR:", err);
//     }

//     setLoading(false);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="relative w-full">
//       <textarea
//         value={idea}
//         onChange={(e) => setIdea(e.target.value)}
//         placeholder="Describe your idea (e.g. Smart home automation for energy saving)"
//         className="w-full h-32 p-4 bg-[#0a0a0a]/40 text-white border border-white/10 rounded-xl outline-none focus:border-pink-500/50"
//       />

//       <div className="mt-4 flex justify-end">
//         <button
//           disabled={loading || !idea.trim()}
//           className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-xl flex items-center gap-2 disabled:opacity-50"
//         >
//           {loading ? <Loader2 className="animate-spin" size={20} /> : <Sparkles size={18} />}
//           {loading ? "Generating..." : "Generate Variants"}
//         </button>
//       </div>
//     </form>
//   );
// }





// import { useState } from "react";
// import axios from "axios";
// import { Sparkles, Loader2 } from "lucide-react";
// import { useAuth } from "../context/AuthContext";

// export default function IdeaInput({ onResult }) {
//   const [idea, setIdea] = useState("");
//   const [loading, setLoading] = useState(false);

//   const { token } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!idea.trim()) return;

//     setLoading(true);

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/projects/generate",
//         { idea },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       // Backend sends: { project, variants }
//       onResult(res.data.variants);
//     } catch (error) {
//       console.error("VARIANT API ERROR:", error);
//     }

//     setLoading(false);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="relative w-full">
//       <textarea
//         value={idea}
//         onChange={(e) => setIdea(e.target.value)}
//         placeholder="Describe your idea..."
//         className="w-full h-32 p-4 bg-[#0a0a0a]/40 text-white border border-white/10 rounded-xl outline-none"
//       />

//       <div className="mt-4 flex justify-end">
//         <button
//           disabled={loading || !idea.trim()}
//           className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-xl flex items-center gap-2 disabled:opacity-50"
//         >
//           {loading ? <Loader2 className="animate-spin" /> : <Sparkles />}
//           {loading ? "Generating..." : "Generate Variants"}
//         </button>
//       </div>
//     </form>
//   );
// }




// frontend/src/components/IdeaInput.jsx
import { useState } from "react";
import axios from "axios";
import { Sparkles, Loader2 } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { VITE_API_URL } from "../config";

export default function IdeaInput({ onResult }) {
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!idea.trim()) return;

    setLoading(true);
    try {
      // The backend route that creates project + variants
      const res = await axios.post(
        `${VITE_API_URL}/projects/generate`,
        { idea },
        { headers: { Authorization: `Bearer ${token}` } }
      );
          
      // res.data: { project, variants }
      onResult(res.data.variants);
      setIdea("");
    } catch (err) {
      console.error("PROJECT GENERATE ERROR:", err);
      alert(err?.response?.data?.error || "Failed to generate variants");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <textarea
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Describe your idea. e.g. App to recruit rural sports talent"
        className="w-full h-32 p-4 bg-[#0a0a0a]/40 text-white border border-white/10 rounded-xl outline-none focus:border-pink-500/50"
      />

      <div className="mt-4 flex justify-end">
        <button
          disabled={loading || !idea.trim()}
          className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-xl flex items-center gap-2 disabled:opacity-50"
        >
          {loading ? <Loader2 className="animate-spin" size={18} /> : <Sparkles size={18} />}
          {loading ? "Generating..." : "Generate Variants"}
        </button>
      </div>
    </form>
  );
}
