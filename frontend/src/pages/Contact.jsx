// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; 
// import { ArrowLeft, Mail, Github, Linkedin, Send, MessageSquare, CheckCircle, Loader2 } from "lucide-react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// const Contact = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await axios.post("http://localhost:5000/feedback", formData);

//       setSuccess(true);
//       setFormData({ name: "", email: "", message: "" });
      
//       setTimeout(() => setSuccess(false), 5000);

//     } catch (error) {
//       console.error("Error sending feedback:", error);
//       alert("Failed to send message. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     // 1. Changed to 'flex-col' to stack elements vertically
//     <div className="min-h-screen bg-[#0b0520] text-white overflow-hidden relative flex flex-col">
      
//       {/* --- Background Glows --- */}
//       <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />

//       {/* --- HEADER (Stays at Top) --- */}
//       <Header />

//       {/* --- MAIN CONTENT (Centers itself in the remaining space) --- */}
//       <main className="flex-1 flex items-center justify-center p-6 relative z-10">
//         <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8">
          
//           {/* LEFT COLUMN: Contact Info */}
//           <div className="flex flex-col justify-center space-y-8 p-8 md:p-12">
//             <div>
//               <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
//                 Let's Connect.
//               </h1>
//               <p className="text-gray-400 text-lg leading-relaxed">
//                 Have a question, feedback, or just want to discuss the future of AI? I'm always open to new ideas and collaborations.
//               </p>
//             </div>

//             <div className="space-y-6">
//               <a href="mailto:your.email@example.com" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group">
//                 <div className="p-3 rounded-full bg-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
//                   <Mail size={24} />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-400">Email Me</p>
//                   <p className="text-white font-medium">your.email@example.com</p>
//                 </div>
//               </a>

//               <div className="grid grid-cols-2 gap-4">
//                 <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group">
//                   <Github size={20} className="text-gray-400 group-hover:text-white" />
//                   <span className="font-medium">GitHub</span>
//                 </a>
//                 <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group">
//                   <Linkedin size={20} className="text-blue-400 group-hover:text-blue-300" />
//                   <span className="font-medium">LinkedIn</span>
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT COLUMN: Feedback Form */}
//           <div className="bg-[#130f2a]/60 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl shadow-purple-900/20">
//             <div className="flex items-center gap-3 mb-8">
//               <MessageSquare className="text-purple-400" />
//               <h2 className="text-2xl font-bold">Send Feedback</h2>
//             </div>

//             {success ? (
//               <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in">
//                 <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6">
//                   <CheckCircle size={32} />
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
//                 <p className="text-gray-400">Thank you for your feedback. I'll get back to you soon.</p>
//                 <button 
//                   onClick={() => setSuccess(false)}
//                   className="mt-8 text-sm text-purple-400 hover:text-purple-300 underline"
//                 >
//                   Send another message
//                 </button>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium text-gray-400 ml-1">Your Name</label>
//                   <input 
//                     type="text" 
//                     required
//                     value={formData.name}
//                     onChange={(e) => setFormData({...formData, name: e.target.value})}
//                     className="w-full bg-[#0b0520] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
//                     placeholder="John Doe"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-medium text-gray-400 ml-1">Your Email</label>
//                   <input 
//                     type="email" 
//                     required
//                     value={formData.email}
//                     onChange={(e) => setFormData({...formData, email: e.target.value})}
//                     className="w-full bg-[#0b0520] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
//                     placeholder="john@example.com"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
//                   <textarea 
//                     required
//                     rows={4}
//                     value={formData.message}
//                     onChange={(e) => setFormData({...formData, message: e.target.value})}
//                     className="w-full bg-[#0b0520] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
//                     placeholder="I loved the app! Maybe add a feature to..."
//                   />
//                 </div>

//                 <button 
//                   type="submit"
//                   disabled={loading}
//                   className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-purple-900/20 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   {loading ? (
//                     <>
//                       <Loader2 size={20} className="animate-spin" />
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       <Send size={20} />
//                       Send Message
//                     </>
//                   )}
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </main>

//       {/* --- FOOTER (Stays at Bottom) --- */}
//       <Footer />
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import { ArrowLeft, Mail, Github, Linkedin, Send, MessageSquare, CheckCircle, Loader2 } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("http://localhost:5000/feedback", formData);

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => setSuccess(false), 5000);

    } catch (error) {
      console.error("Error sending feedback:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0520] text-white overflow-hidden relative flex flex-col">
      
      {/* --- Background Glows --- */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />

      {/* --- HEADER --- */}
      <Header />

      {/* --- MAIN CONTENT --- */}
      {/* Added 'pt-24' (padding-top) to push content down from the Header */}
      <main className="flex-1 flex items-center justify-center p-6 pt-24 md:pt-32 relative z-10">
        <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8">
          
          {/* LEFT COLUMN: Contact Info */}
          <div className="flex flex-col justify-center space-y-8 p-8 md:p-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                Let's Connect.
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                Have a question, feedback, or just want to discuss the future of AI? I'm always open to new ideas and collaborations.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:your.email@example.com" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group">
                <div className="p-3 rounded-full bg-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Me</p>
                  <p className="text-white font-medium">vatsapurva31@gmail.com</p>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a href="https://github.com/apurvavats" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group">
                  <Github size={20} className="text-gray-400 group-hover:text-white" />
                  <span className="font-medium">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/apurva-vats-12193b292/" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group">
                  <Linkedin size={20} className="text-blue-400 group-hover:text-blue-300" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Feedback Form */}
          <div className="bg-[#130f2a]/60 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl shadow-purple-900/20">
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="text-purple-400" />
              <h2 className="text-2xl font-bold">Send Feedback</h2>
            </div>

            {success ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in">
                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thank you for your feedback. I'll get back to you soon.</p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="mt-8 text-sm text-purple-400 hover:text-purple-300 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-[#0b0520] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Your Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-[#0b0520] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-[#0b0520] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                    placeholder="I loved the app! Maybe add a feature to..."
                  />
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-purple-900/20 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
};

export default Contact;