// import { Link } from "react-router-dom";

// export default function Landing() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white flex flex-col justify-center items-center px-6">

//       <h1 className="text-5xl font-extrabold mb-4 text-center drop-shadow-lg">
//         ParallelMind
//       </h1>

//       <p className="text-xl max-w-2xl text-center opacity-90">
//         Transform your product ideas into stunning variants, visual UI mockups, 
//         and instant deployable previews — powered by AI.
//       </p>

//       <div className="mt-10 flex gap-6">
//         <Link
//           to="/login"
//           className="px-8 py-3 bg-white text-black rounded-lg text-lg font-semibold shadow-lg hover:scale-105 transition"
//         >
//           Login
//         </Link>

//         <Link
//           to="/signup"
//           className="px-8 py-3 bg-black text-white rounded-lg text-lg font-semibold shadow-lg hover:scale-105 transition"
//         >
//           Get Started
//         </Link>
//       </div>

//     </div>
//   );
// }




import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Zap, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0f0c29] text-white font-sans selection:bg-pink-500/30 flex flex-col justify-center items-center px-6">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-[#0f0c29] to-pink-900/20" />

        {/* Animated Blobs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px] mix-blend-screen"
        />

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-300 text-xs font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md"
        >
          <Zap size={12} />
          The Multiverse of Ideas
        </motion.div>

        {/* Big Heading */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6"
        >
          Fork Your
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 animate-gradient-x">
            Reality.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mb-12"
        >
          Don't just brainstorm. <span className="text-white font-semibold">Architect.</span>  
          Turn a single thought into 5 revolutionary product variants, complete with  
          personas and UI mockups—instantly.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link
            to="/login"
            className="group relative px-8 py-4 rounded-xl text-lg font-bold text-white overflow-hidden transition-all hover:scale-105"
          >
            <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-xl group-hover:bg-white/10 transition-all" />
            <span className="relative">Login</span>
          </Link>

          <Link
            to="/signup"
            className="group relative px-10 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl text-lg font-bold text-white shadow-xl shadow-purple-500/30 hover:shadow-pink-500/50 hover:scale-105 transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative flex items-center gap-2">
              Start Architecting <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Floating Icons */}
      <motion.div 
        animate={{ y: [0, -20, 0] }} 
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/4 left-10 text-white/5 hidden lg:block"
      >
        <Sparkles size={64} />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0] }} 
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/4 right-10 text-white/5 hidden lg:block"
      >
        <Rocket size={64} />
      </motion.div>

    </div>
  );
}
