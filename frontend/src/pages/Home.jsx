// // import { useState } from "react";
// // import IdeaInput from "../components/IdeaInput";
// // import VariantList from "../components/VariantList";
// // import { motion } from "framer-motion";

// // export default function Home() {
// //   const [variants, setVariants] = useState([]);

// //   const generateVariants = async (idea, done) => {
// //     try {
// //       const res = await fetch("http://localhost:5000/api/generate-variants", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ idea }),
// //       });

// //       const data = await res.json();
// //       setVariants(data.variants);
// //     } catch (err) {
// //       alert("Error generating variants");
// //     } finally {
// //       done();
// //     }
// //   };

// //   return (
// //     <div className="relative min-h-screen w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden text-white">

// //       {/* Background Blobs */}
// //       <motion.div
// //         className="absolute top-10 left-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"
// //         animate={{ x: [0, 30, -20, 0], y: [0, -20, 20, 0] }}
// //         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
// //       />

// //       <motion.div
// //         className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"
// //         animate={{ x: [0, 20, -30, 0], y: [0, 30, -20, 0] }}
// //         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
// //       />

// //       <div className="relative z-10 flex flex-col items-center justify-center pt-24 px-4">

// //         {/* Header */}
// //         <motion.h1
// //           className="text-5xl font-bold mb-3 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
// //           initial={{ opacity: 0, y: -20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //         >
// //           ParallelMind
// //         </motion.h1>

// //         <motion.p
// //           className="text-lg mb-10 text-gray-200"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ delay: 0.2 }}
// //         >
// //           Transform a single idea into 5 futuristic product variations.
// //         </motion.p>

// //         <IdeaInput onGenerate={generateVariants} />

// //         <VariantList variants={variants} />
// //       </div>
// //     </div>
// //   );
// // }









// // src/pages/Home.jsx
// // import { useState } from "react";
// // import IdeaInput from "../components/IdeaInput";
// // import VariantList from "../components/VariantList";
// // import { motion } from "framer-motion";
// // import { useAuth } from "../context/AuthContext";
// // import { useNavigate } from "react-router-dom";

// // export default function Home() {
// //   const [variants, setVariants] = useState([]);

// //   const { logout } = useAuth();
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     logout();            // clear user + token from context + localStorage
// //     navigate("/");       // go to LANDING PAGE
// //   };

// //   const generateVariants = async (idea, done) => {
// //     try {
// //       const res = await fetch("http://localhost:5000/api/generate-variants", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ idea }),
// //       });

// //       const data = await res.json();
// //       setVariants(data.variants);
// //     } catch (err) {
// //       alert("Error generating variants");
// //     } finally {
// //       done();
// //     }
// //   };

// //   return (
// //     <div className="relative min-h-screen w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden text-white">

// //       {/* Background Blobs */}
// //       <motion.div
// //         className="absolute top-10 left-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"
// //         animate={{ x: [0, 30, -20, 0], y: [0, -20, 20, 0] }}
// //         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
// //       />

// //       <motion.div
// //         className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"
// //         animate={{ x: [0, 20, -30, 0], y: [0, 30, -20, 0] }}
// //         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
// //       />

// //       {/* Top-right Logout Button */}
// //       <div className="absolute top-6 right-6 z-20">
// //         <button
// //           onClick={handleLogout}
// //           className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg font-semibold shadow-md transition"
// //         >
// //           Logout
// //         </button>
// //       </div>

// //       <div className="relative z-10 flex flex-col items-center justify-center pt-24 px-4">

// //         {/* Header */}
// //         <motion.h1
// //           className="text-5xl font-bold mb-3 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
// //           initial={{ opacity: 0, y: -20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //         >
// //           ParallelMind
// //         </motion.h1>

// //         <motion.p
// //           className="text-lg mb-10 text-gray-200"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ delay: 0.2 }}
// //         >
// //           Transform a single idea into 5 futuristic product variations.
// //         </motion.p>

// //         <IdeaInput onGenerate={generateVariants} />

// //         <VariantList variants={variants} />
// //       </div>
// //     </div>
// //   );
// // }


// // src/pages/Home.jsx
// // import { useState } from "react";
// // import IdeaInput from "../components/IdeaInput";
// // import VariantCard from "../components/VariantCard";
// // import { motion } from "framer-motion";
// // import { useAuth } from "../context/AuthContext";
// // import { useNavigate } from "react-router-dom";

// // export default function Home() {
// //   const [variants, setVariants] = useState([]);

// //   const { logout } = useAuth();
// //   const navigate = useNavigate();

// //   // ---- LOGOUT HANDLER ----
// //   const handleLogout = () => {
// //     logout();       // clears context + localStorage
// //     navigate("/");  // go to Landing page (NOT login page)
// //   };

// //   // ---- RECEIVE VARIANTS FROM IdeaInput ----
// //   const handleResult = ({ variants }) => {
// //     setVariants(variants);
// //   };

// //   return (
// //     <div className="relative min-h-screen w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden text-white">

// //       {/* ---- Background Floating Blobs ---- */}
// //       <motion.div
// //         className="absolute top-10 left-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"
// //         animate={{ x: [0, 30, -20, 0], y: [0, -20, 20, 0] }}
// //         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
// //       />

// //       <motion.div
// //         className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"
// //         animate={{ x: [0, 20, -30, 0], y: [0, 30, -20, 0] }}
// //         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
// //       />

// //       {/* ---- Top-right Logout ---- */}
// //       <div className="absolute top-6 right-6 z-20">
// //         <button
// //           onClick={handleLogout}
// //           className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg font-semibold shadow-md transition"
// //         >
// //           Logout
// //         </button>
// //       </div>

// //       {/* ---- Main Content ---- */}
// //       <div className="relative z-10 flex flex-col items-center justify-center pt-24 px-4">

// //         <motion.h1
// //           className="text-5xl font-bold mb-3 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
// //           initial={{ opacity: 0, y: -20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //         >
// //           ParallelMind
// //         </motion.h1>

// //         <motion.p
// //           className="text-lg mb-10 text-gray-200"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ delay: 0.2 }}
// //         >
// //           Transform a single idea into 5 futuristic product variations.
// //         </motion.p>

// //         {/* ---- Idea Input Component ---- */}
// //         <IdeaInput onResult={handleResult} />

// //         {/* ---- Variants Grid ---- */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 w-full max-w-6xl">
// //           {variants.map((v, i) => (
// //             <VariantCard key={i} variant={v} />
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// // import { useAuth } from "../context/AuthContext";
// // import { useNavigate, Link } from "react-router-dom";

// // export default function Home() {
// //   const [variants, setVariants] = useState([]);
// //   const { logout, user } = useAuth();
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     logout();
// //     navigate("/");
// //   };

// //   return (
// //     <div className="relative min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">

// //       {/* HEADER */}
// //       <header className="w-full py-4 px-6 flex justify-between items-center bg-black/20 backdrop-blur-md shadow-lg fixed top-0 left-0 z-50">
        
// //         <h1 className="text-2xl font-bold">ParallelMind</h1>

// //         <nav className="flex items-center gap-6">
// //           <Link to="/about" className="hover:text-pink-400">About</Link>
// //           <Link to="/contact" className="hover:text-pink-400">Contact</Link>
// //           <Link to="/history" className="hover:text-pink-400">History</Link>

// //           <span className="opacity-80">Hi, {user?.name} 👋</span>

// //           <button
// //             onClick={handleLogout}
// //             className="px-4 py-1 bg-red-500 hover:bg-red-600 rounded-lg"
// //           >
// //             Logout
// //           </button>
// //         </nav>
// //       </header>

// //       {/* MAIN CONTENT */}
// //       <div className="pt-24 px-6">
// //         <IdeaInput onResult={({ variants }) => setVariants(variants)} />

// //         <VariantList variants={variants} />
// //       </div>

// //       {/* FOOTER */}
// //       <footer className="w-full py-6 text-center text-gray-300 mt-10 bg-black/10 backdrop-blur-md">
// //         © {new Date().getFullYear()} ParallelMind • Built with ❤️
// //       </footer>
// //     </div>
// //   );
// // }




// import { useState } from "react";
// import IdeaInput from "../components/IdeaInput";
// import VariantList from "../components/VariantList";
// import { motion } from "framer-motion";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate, Link } from "react-router-dom";
// // src/components/VariantList.jsx
// import VariantCard from "./VariantCard";   // ✅ FIX — IMPORT IT

// export default function VariantList({ variants }) {
//   if (!variants || variants.length === 0) return null;

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
//       {variants.map((v, i) => (
//         <VariantCard key={i} variant={v} />
//       ))}
//     </div>
//   );
// }


// export default function Home() {
//   const [variants, setVariants] = useState([]);
//   const { logout, user } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/"); // go to landing page
//   };

//   // derive display name safely from Supabase user object
//   const displayName =
//     user?.user_metadata?.name ||
//     user?.user_metadata?.full_name ||
//     user?.name ||
//     user?.email ||
//     "User";

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">

//       {/* HEADER */}
//       <header className="w-full py-4 px-6 flex justify-between items-center bg-black/30 backdrop-blur-md shadow-md fixed top-0 left-0 z-50">
//         <h1 className="text-2xl font-bold">ParallelMind</h1>

//         <nav className="flex items-center gap-6">
//           <Link to="/about" className="hover:text-pink-400">About</Link>
//           <Link to="/contact" className="hover:text-pink-400">Contact</Link>
//           <Link to="/history" className="hover:text-pink-400">History</Link>

//           <span className="opacity-90">Hi!!👋</span>

//           <button
//             onClick={handleLogout}
//             className="px-4 py-1 bg-red-500 hover:bg-red-600 rounded-lg ml-2"
//           >
//             Logout
//           </button>
//         </nav>
//       </header>

//       {/* MAIN (centered) */}
//       <main className="flex-1 flex items-center justify-center pt-28 px-4">
//         <div className="w-full max-w-3xl">
//           {/* Hero text */}
//           <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-6">
//             <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
//               ParallelMind
//             </h2>
//             <p className="text-gray-300 mt-2">
//               Transform a single idea into 5 futuristic product variations.
//             </p>
//           </motion.div>

//           {/* Idea input centered within max width */}
//           <div className="bg-white/5 p-6 rounded-2xl border border-white/6">
//             <IdeaInput onResult={({ variants }) => setVariants(variants)} />
//           </div>

//           {/* Variants */}
//           <div className="mt-8">
//             <VariantList variants={variants} />
//           </div>
//         </div>
//       </main>

//       {/* FOOTER - pushed to bottom via flex layout */}
//       <footer className="w-full py-6 text-center text-gray-300 bg-black/10 backdrop-blur-md">
//         © {new Date().getFullYear()} ParallelMind • Built with ❤️
//       </footer>
//     </div>
//   );
// }




// src/pages/Home.jsx
// import { useState } from "react";
// import IdeaInput from "../components/IdeaInput";
// import VariantList from "../components/VariantList";
// import { motion } from "framer-motion";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate, Link } from "react-router-dom";

// export default function Home() {
//   const [variants, setVariants] = useState([]);
//   const { logout, user } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };

//   // Safe fallback for name
//   const displayName =
//     user?.user_metadata?.name ||
//     user?.user_metadata?.full_name ||
//     user?.name ||
//     user?.email ||
//     "User";

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">

//       {/* HEADER */}
//       <header className="w-full py-4 px-6 flex justify-between items-center bg-black/30 backdrop-blur-md shadow-md fixed top-0 left-0 z-50">
//         <h1 className="text-2xl font-bold">ParallelMind</h1>

//         <nav className="flex items-center gap-6">
//           <Link to="/about" className="hover:text-pink-400">About</Link>
//           <Link to="/contact" className="hover:text-pink-400">Contact</Link>
//           <Link to="/history" className="hover:text-pink-400">History</Link>

//           <span className="opacity-90">Hi!!👋</span>

//           <button
//             onClick={handleLogout}
//             className="px-4 py-1 bg-red-500 hover:bg-red-600 rounded-lg ml-2"
//           >
//             Logout
//           </button>
//         </nav>
//       </header>

//       {/* MAIN */}
//       <main className="flex-1 flex items-center justify-center pt-28 px-4">
//         <div className="w-full max-w-3xl">

//           {/* Title */}
//           <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-6">
//             <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
//               ParallelMind
//             </h2>
//             <p className="text-gray-300 mt-2">
//               Transform a single idea into 5 futuristic product variations.
//             </p>
//           </motion.div>

//           {/* Input Box */}
//           <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
//             <IdeaInput onResult={({ variants }) => setVariants(variants)} />
//           </div>

//           {/* Variants */}
//           <div className="mt-8">
//             <VariantList variants={variants} />
//           </div>
//         </div>
//       </main>

//       {/* FOOTER */}
//       <footer className="w-full py-6 text-center text-gray-300 bg-black/10 backdrop-blur-md">
//         © {new Date().getFullYear()} ParallelMind • Built with ❤️
//       </footer>
//     </div>
//   );
// }


import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IdeaInput from "../components/IdeaInput";
import VariantCard from "../components/VariantCard";
import UiPreviewModal from "../components/UiPreviewModal";

export default function Home() {
  const [variants, setVariants] = useState([]);
  const [previewData, setPreviewData] = useState(null); // <-- FIXED (inside component)

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0c29] text-white overflow-x-hidden">

      {/* Background gradients */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-800/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-800/30 rounded-full blur-[120px]" />
      </div>

      <Header />

      <main className="relative z-10 flex-1 flex flex-col items-center pt-32 pb-20 px-4 max-w-7xl mx-auto w-full">

        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4">
            One Idea. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">
              Infinite Realities.
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Generate <span className="text-white font-semibold">personas</span>,{" "}
            <span className="text-white font-semibold">strategic pivots</span>, and{" "}
            <span className="text-white font-semibold">UI mockups</span> instantly.
          </p>
        </div>

        {/* INPUT BOX */}
        <div className="w-full max-w-3xl mb-12 relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-2xl opacity-70 blur group-hover:opacity-100 transition-all duration-700" />

          <div className="relative bg-[#1a1638]/90 rounded-2xl backdrop-blur-xl p-1">
            <div className="bg-[#0f0c29]/90 rounded-xl p-8">
              <IdeaInput onResult={setVariants} />
            </div>
          </div>
        </div>

        {/* GENERATED VARIANTS */}
        {variants.length > 0 && (
          <div className="w-full">
            <div className="flex items-center justify-center gap-4 mb-8 opacity-80">
              <div className="h-px w-24 bg-gradient-to-l from-pink-500 to-transparent" />
              <h3 className="text-xl font-bold">Generated Variants</h3>
              <div className="h-px w-24 bg-gradient-to-r from-pink-500 to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {variants.map((v, i) => (
                <VariantCard
                  key={i}
                  variant={v}
                  index={i}
                  onPreview={(codeBundle) => setPreviewData(codeBundle)} // <-- Hook preview
                />
              ))}
            </div>
          </div>
        )}

      </main>

      {/* UI Preview Modal */}
      {previewData && (
        <UiPreviewModal
          data={previewData}
          onClose={() => setPreviewData(null)}
        />
      )}

      <Footer />
    </div>
  );
}




// import { useState } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import IdeaInput from "../components/IdeaInput";
// import VariantCard from "../components/VariantCard";
// import UiPreviewModal from "../components/UiPreviewModal";

// const [previewData, setPreviewData] = useState(null);

// export default function Home() {
//   const [variants, setVariants] = useState([]);

//   return (
//     <div className="min-h-screen flex flex-col bg-[#0f0c29] text-white overflow-x-hidden">

//       {/* Background gradients */}
//       <div className="fixed inset-0 -z-10 pointer-events-none">
//         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-800/40 rounded-full blur-[120px]" />
//         <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-800/30 rounded-full blur-[120px]" />
//       </div>

//       <Header />

//       <main className="relative z-10 flex-1 flex flex-col items-center pt-32 pb-20 px-4 max-w-7xl mx-auto w-full">

//         {/* HERO */}
//         <div className="text-center max-w-4xl mx-auto mb-16">
//           <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4">
//             One Idea. <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">
//               Infinite Realities.
//             </span>
//           </h1>
//           <p className="text-lg text-gray-400 max-w-xl mx-auto">
//             Generate <span className="text-white font-semibold">personas</span>,{" "}
//             <span className="text-white font-semibold">strategic pivots</span>, and{" "}
//             <span className="text-white font-semibold">UI mockups</span> instantly.
//           </p>
//         </div>

//         {/* INPUT BOX */}
//         <div className="w-full max-w-3xl mb-12 relative group">
//           <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-2xl opacity-70 blur group-hover:opacity-100 transition-all duration-700" />

//           <div className="relative bg-[#1a1638]/90 rounded-2xl backdrop-blur-xl p-1">
//             <div className="bg-[#0f0c29]/90 rounded-xl p-8">
//               <IdeaInput onResult={setVariants} />
//             </div>
//           </div>
//         </div>

//         {/* GENERATED VARIANTS */}
//         {variants.length > 0 && (
//           <div className="w-full">
//             <div className="flex items-center justify-center gap-4 mb-8 opacity-80">
//               <div className="h-px w-24 bg-gradient-to-l from-pink-500 to-transparent" />
//               <h3 className="text-xl font-bold">Generated Variants</h3>
//               <div className="h-px w-24 bg-gradient-to-r from-pink-500 to-transparent" />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
//               {variants.map((v, i) => (
//                 <VariantCard key={i} variant={v} index={i} />
//               ))}
//             </div>
//           </div>
//         )}

//       </main>
//          {previewData && (
//   <UiPreviewModal data={previewData} onClose={() => setPreviewData(null)} />
// )}

//       <Footer />
//     </div>
//   );
// }








// import { useState } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import IdeaInput from "../components/IdeaInput";
// import VariantCard from "../components/VariantCard";

// export default function Home() {
//   const [variants, setVariants] = useState([]);

//   return (
//     <div className="min-h-screen flex flex-col bg-[#0f0c29] text-white selection:bg-pink-500/30 overflow-x-hidden">
//       {/* Background Gradients */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/40 rounded-full blur-[120px]" />
//         <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-900/30 rounded-full blur-[120px]" />
//       </div>

//       <Header />

//       <main className="relative z-10 flex-1 flex flex-col items-center pt-32 pb-20 px-4 max-w-7xl mx-auto w-full">
//         {/* HERO */}
//         <div className="text-center max-w-4xl mx-auto mb-16">
//           <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-6">
//             One Idea.
//             <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">
//               Infinite Realities.
//             </span>
//           </h1>
//           <p className="text-lg text-gray-400 max-w-2xl mx-auto">
//             Instantly generate <span className="font-semibold text-white">personas</span>,{" "}
//             <span className="font-semibold text-white">strategic pivots</span>, and{" "}
//             <span className="font-semibold text-white">UI mockups</span>.
//           </p>
//         </div>

//         {/* INPUT BOX */}
//         <div className="w-full max-w-3xl relative group mb-12">
//           <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-1000"></div>

//           <div className="relative bg-[#1a1638]/90 backdrop-blur-xl rounded-2xl p-1">
//             <div className="bg-[#0f0c29]/90 rounded-xl p-8">
//               <IdeaInput onResult={setVariants} />
//             </div>
//           </div>
//         </div>

//         {/* RESULTS */}
//         {variants.length > 0 && (
//           <div className="w-full">
//             <div className="flex items-center justify-center gap-4 mb-8 opacity-80">
//               <div className="h-px w-24 bg-gradient-to-l from-pink-500 to-transparent"></div>
//               <h3 className="text-xl font-bold text-white">Generated Variants</h3>
//               <div className="h-px w-24 bg-gradient-to-r from-pink-500 to-transparent"></div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
//               {variants.map((v, i) => (
//                 <VariantCard key={i} variant={v} index={i} />
//               ))}
//             </div>
//           </div>
//         )}
//       </main>

//       <Footer />
//     </div>
//   );
// }


// import IdeaInput from "../components/IdeaInput";
//  import VariantList from "../components/VariantList";
// import { motion } from "framer-motion";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate, Link } from "react-router-dom";

// import VariantCard from "./VariantCard";

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Sparkles, LogOut, History, Info, Home, 
//   ArrowRight, Loader2, ChevronDown, ChevronUp,
//   Layers, User, AlertCircle, CheckCircle
// } from 'lucide-react';

// // --- MOCK DATA & COMPONENTS FOR PREVIEW ---

// // 1. MOCKED NAVBAR
// const Navbar = () => {
//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-[#0f0c29]/70 backdrop-blur-xl border-b border-white/10">
//       <div className="flex items-center gap-2">
//         <span className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 cursor-pointer hover:opacity-80 transition-opacity">
//           ParallelMind
//         </span>
//       </div>

//       <nav className="hidden md:flex items-center gap-6">
//         {["Home", "History", "About"].map((item) => (
//           <a key={item} href="#" className="text-sm font-medium text-gray-300 hover:text-pink-400 transition-colors relative group">
//             {item}
//             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
//           </a>
//         ))}
        
//         <div className="flex items-center gap-4 ml-4 pl-4 border-l border-white/20">
//           <div className="text-right">
//             <span className="block text-xs text-gray-400">Logged in as</span>
//             <span className="block text-sm font-bold text-white leading-none">DemoUser 👋</span>
//           </div>
//           <button className="px-5 py-2 text-sm font-bold text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-full shadow-lg shadow-purple-500/30 hover:shadow-pink-500/50 hover:scale-105 transition-all">
//             Logout
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// // 2. MOCKED FOOTER
// const Footer = () => (
//   <footer className="w-full py-8 mt-auto border-t border-white/5 bg-[#0f0c29]/50 backdrop-blur-sm text-center relative z-10">
//     <p className="text-gray-500 text-sm font-medium">
//       © 2025 <span className="text-pink-500">ParallelMind</span>. Architecting the future.
//     </p>
//   </footer>
// );

// // 3. MOCKED IDEA INPUT
// const IdeaInput = ({ onResult }) => {
//   const [loading, setLoading] = useState(false);
//   const [text, setText] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if(!text) return;
//     setLoading(true);
//     // Simulate API call
//     setTimeout(() => {
//       onResult([
//         {
//           name: "Gamified Learning Pivot",
//           summary: "Turn the core functionality into a competitive game loop.",
//           persona: "Gen Z Students",
//           problem: "Low engagement with traditional study methods.",
//           features: ["Leaderboards", "Daily Streaks", "XP System"]
//         },
//         {
//           name: "Enterprise B2B Suite",
//           summary: "Focus on analytics, security, and team collaboration.",
//           persona: "Product Managers",
//           problem: "Enterprises need data visibility and compliance.",
//           features: ["SSO", "Audit Logs", "Role-Based Access"]
//         },
//         {
//           name: "Community-First Platform",
//           summary: "Shift focus from individual utility to social sharing.",
//           persona: "Content Creators",
//           problem: "Users feel isolated and want to share progress.",
//           features: ["User Profiles", "Feed", "Groups"]
//         }
//       ]);
//       setLoading(false);
//     }, 1500);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="relative w-full">
//       <div className="relative group">
//         <textarea
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           placeholder="Describe your product idea here (e.g. A dating app for dog owners)..."
//           className="w-full h-32 bg-[#0a0a0a]/40 text-white p-4 rounded-xl border border-white/10 focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 resize-none outline-none transition-all placeholder:text-gray-600 text-lg leading-relaxed"
//         />
//       </div>
//       <div className="mt-4 flex justify-end">
//         <button
//           disabled={loading || !text}
//           className="px-8 py-3 rounded-xl font-bold text-white shadow-lg bg-gradient-to-r from-pink-600 to-purple-600 hover:shadow-pink-500/25 transition-all flex items-center gap-2 disabled:opacity-50"
//         >
//           {loading ? <Loader2 className="animate-spin" size={20} /> : <Sparkles size={20} />}
//           {loading ? "Architecting..." : "Generate Variants"}
//         </button>
//       </div>
//     </form>
//   );
// };

// // 4. MOCKED VARIANT CARD
// const VariantCard = ({ variant, index }) => {
//   const [expanded, setExpanded] = useState(false);
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: index * 0.1 }}
//       className={`bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all hover:border-pink-500/30 ${expanded ? 'bg-white/10' : ''}`}
//     >
//       <div className="p-5">
//         <div className="flex justify-between items-start mb-2">
//           <h3 className="text-lg font-bold text-white">{variant.name}</h3>
//           <span className="text-[10px] font-mono text-pink-400 bg-pink-500/10 px-2 py-1 rounded">V{index + 1}</span>
//         </div>
//         <p className="text-gray-400 text-sm mb-4">{variant.summary}</p>
//         <div className="flex gap-2">
//           <button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2">
//             <Layers size={14}/> Mockup
//           </button>
//           <button onClick={() => setExpanded(!expanded)} className="px-3 py-2 bg-transparent hover:bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white">
//             {expanded ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
//           </button>
//         </div>
//       </div>
//       <AnimatePresence>
//         {expanded && (
//           <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="bg-black/20 border-t border-white/5 overflow-hidden">
//             <div className="p-5 text-sm space-y-3">
//               <div><span className="text-pink-400 text-xs font-bold uppercase block mb-1">Target Persona</span> <span className="text-gray-300">{variant.persona}</span></div>
//               <div><span className="text-purple-400 text-xs font-bold uppercase block mb-1">Problem</span> <span className="text-gray-300">{variant.problem}</span></div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// // --- MAIN PREVIEW COMPONENT ---

// export default function HomePreview() {
//   const [variants, setVariants] = useState([]);

//   return (
//     <div className="min-h-screen flex flex-col bg-[#0f0c29] text-white selection:bg-pink-500/30 overflow-x-hidden font-sans relative">
      
//       {/* Background Gradients */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/40 rounded-full blur-[120px]" />
//         <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-900/30 rounded-full blur-[120px]" />
//       </div>

//       <Navbar />

//       <main className="relative z-10 flex-1 flex flex-col items-center pt-32 pb-20 px-4 max-w-7xl mx-auto w-full">
        
//         {/* Hero */}
//         <div className="text-center max-w-4xl mx-auto mb-16">
//           <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-6">
//             One Idea. <br className="hidden md:block" />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">
//               Five Infinite Realities.
//             </span>
//           </h1>
//           <p className="text-lg text-gray-400 max-w-2xl mx-auto">
//             Instantly generate <span className="text-white font-semibold">strategic pivots</span>, <span className="text-white font-semibold">personas</span>, and <span className="text-white font-semibold">UI mockups</span>.
//           </p>
//         </div>

//         {/* Input Stage */}
//         <div className="w-full max-w-3xl relative group mb-12">
//           <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-1000"></div>
//           <div className="relative bg-[#1a1638]/90 backdrop-blur-xl rounded-2xl p-1">
//             <div className="bg-[#0f0c29]/90 rounded-xl p-8">
//                <div className="flex items-center gap-2 mb-6 text-gray-500 text-xs font-mono uppercase tracking-widest">
//                  <Sparkles size={14} className="text-pink-500" /> Input Terminal
//                </div>
//                <IdeaInput onResult={setVariants} />
//             </div>
//           </div>
//         </div>

//         {/* Results */}
//         {variants.length > 0 && (
//           <div className="w-full">
//              <div className="flex items-center justify-center gap-4 mb-8 opacity-80">
//                <div className="h-px w-24 bg-gradient-to-l from-pink-500 to-transparent"></div>
//                <h3 className="text-xl font-bold text-white">Generated Variants</h3>
//                <div className="h-px w-24 bg-gradient-to-r from-pink-500 to-transparent"></div>
//              </div>
//              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
//                {variants.map((v, i) => <VariantCard key={i} variant={v} index={i} />)}
//              </div>
//           </div>
//         )}
//       </main>

//       <Footer />
//     </div>
//   );
// }