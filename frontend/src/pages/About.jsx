// import React from "react";
// import { Rocket, BrainCircuit, Zap, Globe2, Layers, Sparkles } from "lucide-react";

// const About = () => {
//   return (
//     <div className="min-h-screen bg-[#0b0520] text-white overflow-hidden relative">
//       {/* --- Background ambient glows --- */}
//       <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[150px] pointer-events-none" />

//       {/* --- Main Container --- */}
//       <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        
//         {/* --- HERO SECTION --- */}
//         <div className="text-center max-w-3xl mx-auto mb-24">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
//             <Sparkles size={16} className="text-purple-400" />
//             <span className="text-sm font-medium text-purple-200">The Engine of Imagination</span>
//           </div>
//           <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-indigo-300">
//             Redefining Creation Speed.
//           </h1>
//           <p className="text-xl text-gray-400 leading-relaxed">
//             ParallelMind isn't just a website builder. It is an AI-powered conduit that transforms raw abstract ideas into fully realized, deployable web experiences in seconds. We bridge the gap between "what if" and "it's live."
//           </p>
//         </div>

//         {/* --- THE PHILOSOPHY --- */}
//         <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
//           <div className="space-y-6">
//             <h2 className="text-3xl font-bold">The Philosophy of Flow</h2>
//             <p className="text-gray-400 text-lg">
//               In traditional development, friction is everywhere: setup, coding, debugging, deployment pipelines. 
//             </p>
//             <p className="text-gray-400 text-lg">
//               ParallelMind removes friction entirely. We believe creators should focus on the vision—the user persona, the core problem—and let intelligent systems handle the architectural heavy lifting. It's about staying in the flow state from conception to launch.
//             </p>
//           </div>
//           <div className="relative h-96 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/20 bg-[#0f0c29]/50 backdrop-blur-xl flex items-center justify-center">
//              <BrainCircuit size={120} className="text-purple-500/50 animate-pulse" />
//              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-purple-500/10"></div>
//           </div>
//         </div>

//         {/* --- FEATURE SHOWCASE (The Core Pillars) --- */}
//         <div className="mb-24">
//           <h2 className="text-3xl font-bold text-center mb-16">The Pillars of ParallelMind</h2>
          
//           <div className="grid md:grid-cols-3 gap-8">
            
//             {/* Feature 1: AI Core */}
//             <FeatureCard 
//               icon={<BrainCircuit size={32} className="text-indigo-400" />}
//               title="Generative UI Architecture"
//               description="At our core is an advanced LLM trained to understand design intent. It doesn't just spew code; it interprets personas and requirements to craft bespoke React components tailored to your specific vision, using modern Tailwind CSS utility classes."
//             />

//             {/* Feature 2: Instant Preview */}
//             <FeatureCard 
//               icon={<Zap size={32} className="text-yellow-400" />}
//               title="Zero-Latency Visualization"
//               description="Forget build steps and waiting for local servers. We utilize advanced in-browser compilation technology to render complex React and Tailwind code instantly. What you generate is immediately interactive."
//             />

//             {/* Feature 3: Velocity Deployment */}
//             <FeatureCard 
//               icon={<Rocket size={32} className="text-purple-400" />}
//               title="One-Click Global Launch"
//               description="Through a seamless integration with Vercel's edge network, a single click transforms your preview into a live, globally distributed website with a unique public URL. No config, no servers to manage."
//             />
//              {/* Feature 4: Intelligent Caching */}
//             <FeatureCard 
//               icon={<Layers size={32} className="text-cyan-400" />}
//               title="Smart State Persistence"
//               description="Our database layer intelligently caches every generation and deployment link. Revisiting past ideas costs zero time and zero computational resources, delivering instant results for iterations."
//             />

//              {/* Feature 5: Clean Stack */}
//             <FeatureCard 
//               icon={<Globe2 size={32} className="text-emerald-400" />}
//               title="Pure Standard Web Tech"
//               description="We don't lock you into proprietary builders. The output is standard, clean HTML, React, and CSS that you can inspect, understand, and eventually export to any standard development environment."
//             />

//              {/* Feature 6: Future Proof */}
//             <FeatureCard 
//               icon={<Sparkles size={32} className="text-pink-400" />}
//               title="Evolving Capability"
//               description="As AI models improve, so does ParallelMind. We are constantly tuning our prompts and underlying infrastructure to support more complex interactions, richer designs, and deeper integrations."
//             />

//           </div>
//         </div>

//         {/* --- CTA SECTION --- */}
//         <div className="relative rounded-3xl border border-white/10 bg-gradient-to-r from-[#151030] to-[#0f0c29] p-12 text-center overflow-hidden">
//           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
//           <div className="relative z-10">
//             <h2 className="text-4xl font-bold mb-6">Ready to materialize your ideas?</h2>
//             <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
//               Stop planning and start creating. Join the future of web development today.
//             </p>
//             <button 
//               // Replace onClick with navigation to your dashboard/create page
//               onClick={() => window.location.href = '/home'}
//               className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 hover:scale-105"
//             >
//               Start Building Now
//             </button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// // --- Internal Sub-Component for Feature Cards ---
// // Keeps the main component clean and ensures consistent styling
// const FeatureCard = ({ icon, title, description }) => (
//   <div className="group p-8 rounded-2xl bg-[#130f2a]/60 border border-white/5 backdrop-blur-sm hover:border-purple-500/30 hover:bg-[#1a1535] transition-all duration-300">
//     <div className="mb-6 p-4 rounded-xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
//       {icon}
//     </div>
//     <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">{title}</h3>
//     <p className="text-gray-400 leading-relaxed">
//       {description}
//     </p>
//   </div>
// );

// export default About;




import React from "react";
import { useNavigate } from "react-router-dom"; // 👈 Import hooks for navigation
import { Rocket, BrainCircuit, Zap, Globe2, Layers, Sparkles, ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0b0520] text-white overflow-hidden relative">
      
     
     <Header />

      {/* --- Background ambient glows --- */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[150px] pointer-events-none" />

      {/* --- Main Container --- */}
      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        
        {/* --- HERO SECTION --- */}
        <div className="text-center max-w-3xl mx-auto mb-24 mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in-up">
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-sm font-medium text-purple-200">The Engine of Imagination</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-indigo-300">
            Redefining Creation Speed.
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            ParallelMind isn't just a website builder. It is an AI-powered conduit that transforms raw abstract ideas into fully realized, deployable web experiences in seconds. We bridge the gap between "what if" and "it's live."
          </p>
        </div>

        {/* --- THE PHILOSOPHY --- */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">The Philosophy of Flow</h2>
            <p className="text-gray-400 text-lg">
              In traditional development, friction is everywhere: setup, coding, debugging, deployment pipelines. 
            </p>
            <p className="text-gray-400 text-lg">
              ParallelMind removes friction entirely. We believe creators should focus on the vision—the user persona, the core problem—and let intelligent systems handle the architectural heavy lifting. It's about staying in the flow state from conception to launch.
            </p>
          </div>
          <div className="relative h-96 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/20 bg-[#0f0c29]/50 backdrop-blur-xl flex items-center justify-center group">
             <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
             <BrainCircuit size={120} className="text-purple-500/50 group-hover:text-purple-400/80 transition-colors duration-500" />
          </div>
        </div>

        {/* --- FEATURE SHOWCASE --- */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-16">The Pillars of ParallelMind</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <FeatureCard 
              icon={<BrainCircuit size={32} className="text-indigo-400" />}
              title="Generative UI Architecture"
              description="At our core is an advanced LLM trained to understand design intent. It doesn't just spew code; it interprets personas and requirements to craft bespoke React components tailored to your specific vision."
            />

            {/* Feature 2 */}
            <FeatureCard 
              icon={<Zap size={32} className="text-yellow-400" />}
              title="Zero-Latency Visualization"
              description="Forget build steps and waiting for local servers. We utilize advanced in-browser compilation technology to render complex React and Tailwind code instantly."
            />

            {/* Feature 3 */}
            <FeatureCard 
              icon={<Rocket size={32} className="text-purple-400" />}
              title="One-Click Global Launch"
              description="Through a seamless integration with Vercel's edge network, a single click transforms your preview into a live, globally distributed website with a unique public URL."
            />
             {/* Feature 4 */}
            <FeatureCard 
              icon={<Layers size={32} className="text-cyan-400" />}
              title="Smart State Persistence"
              description="Our database layer intelligently caches every generation and deployment link. Revisiting past ideas costs zero time and zero computational resources."
            />

             {/* Feature 5 */}
            <FeatureCard 
              icon={<Globe2 size={32} className="text-emerald-400" />}
              title="Pure Standard Web Tech"
              description="We don't lock you into proprietary builders. The output is standard, clean HTML, React, and CSS that you can inspect, understand, and export."
            />

             {/* Feature 6 */}
            <FeatureCard 
              icon={<Sparkles size={32} className="text-pink-400" />}
              title="Evolving Capability"
              description="As AI models improve, so does ParallelMind. We are constantly tuning our prompts and underlying infrastructure to support more complex interactions."
            />

          </div>
        </div>

        {/* --- CTA SECTION --- */}
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-r from-[#151030] to-[#0f0c29] p-12 text-center overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Ready to materialize your ideas?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Stop planning and start creating. Join the future of web development today.
            </p>
            <button 
              onClick={() => navigate("/home")}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 hover:scale-105"
            >
              Start Building Now
            </button>
          </div>
        </div>

      </div>
       <Footer />
    </div>
  );
};

// --- Sub-Component for Feature Cards ---
const FeatureCard = ({ icon, title, description }) => (
  <div className="group p-8 rounded-2xl bg-[#130f2a]/60 border border-white/5 backdrop-blur-sm hover:border-purple-500/30 hover:bg-[#1a1535] transition-all duration-300 hover:-translate-y-1">
    <div className="mb-6 p-4 rounded-xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-purple-500/20">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">{title}</h3>
    <p className="text-gray-400 leading-relaxed">
      {description}
    </p>
   
  </div>
);

export default About;