// // // // // // frontend/src/components/UiPreviewModal.jsx
// // // // // import { useEffect, useState } from "react";
// // // // // import axios from "axios";
// // // // // import { SandpackProvider, SandpackPreview, SandpackCodeEditor } from "@codesandbox/sandpack-react";
// // // // // import { Loader2 } from "lucide-react";
// // // // // import { useAuth } from "../context/AuthContext";

// // // // // export default function UiPreviewModal({ open, onClose, variant }) {
// // // // //   const { token } = useAuth();
// // // // //   const [files, setFiles] = useState(null);
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [deploying, setDeploying] = useState(false);
// // // // //   const [deployUrl, setDeployUrl] = useState(null);

// // // // //   useEffect(() => {
// // // // //     if (!open || !variant) return;
// // // // //     setFiles(null);
// // // // //     setDeployUrl(null);
// // // // //     setLoading(true);

// // // // //     axios.post("http://localhost:5000/ui/generate-code", { variant }, { headers: { Authorization: `Bearer ${token}` } })
// // // // //       .then((res) => {
// // // // //         // res.data.files = { "package.json": "...", "src/App.jsx": "...", ... }
// // // // //         setFiles(res.data.files);
// // // // //       })
// // // // //       .catch((err) => {
// // // // //         console.error("UI GENERATE ERR", err);
// // // // //         alert("Failed to generate UI preview");
// // // // //       })
// // // // //       .finally(() => setLoading(false));
// // // // //   }, [open, variant]);

// // // // //   const handleDeploy = async () => {
// // // // //     if (!files) return;
// // // // //     setDeploying(true);
// // // // //     try {
// // // // //       const res = await axios.post("http://localhost:5000/ui/deploy", { files, name: `pm-${variant.id || Date.now()}` }, { headers: { Authorization: `Bearer ${token}` } });
// // // // //       setDeployUrl(res.data.url || res.data.deployment?.url);
// // // // //     } catch (err) {
// // // // //       console.error("DEPLOY ERR", err);
// // // // //       alert("Deploy failed");
// // // // //     } finally {
// // // // //       setDeploying(false);
// // // // //     }
// // // // //   };

// // // // //   if (!open) return null;

// // // // //   return (
// // // // //     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">
// // // // //       <div className="w-full max-w-6xl h-[80vh] bg-[#0b0520] rounded-2xl p-4 overflow-hidden flex flex-col">
// // // // //         <div className="flex items-center justify-between mb-3">
// // // // //           <h3 className="text-lg font-bold">UI Preview — {variant.name}</h3>
// // // // //           <div className="flex items-center gap-3">
// // // // //             {deployUrl && (
// // // // //               <a className="text-sm text-green-400 underline" href={deployUrl} target="_blank" rel="noreferrer">
// // // // //                 Open deployed app
// // // // //               </a>
// // // // //             )}
// // // // //             <button onClick={onClose} className="px-3 py-1 rounded bg-white/5">Close</button>
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="flex-1 bg-[#080417] rounded-lg overflow-hidden">
// // // // //           {loading && (
// // // // //             <div className="w-full h-full flex items-center justify-center">
// // // // //               <Loader2 className="animate-spin" />
// // // // //             </div>
// // // // //           )}

// // // // //           {!loading && files && (
// // // // //             <SandpackProvider
// // // // //               template="react"
// // // // //               customSetup={{
// // // // //                 files,
// // // // //                 dependencies: {
// // // // //                   react: "18.2.0",
// // // // //                   "react-dom": "18.2.0"
// // // // //                 }
// // // // //               }}
// // // // //             >
// // // // //               <div className="h-full flex">
// // // // //                 <div className="w-1/2 h-full">
// // // // //                   <SandpackPreview />
// // // // //                 </div>
// // // // //                 <div className="w-1/2 h-full border-l border-white/5">
// // // // //                   <SandpackCodeEditor showTabs />
// // // // //                 </div>
// // // // //               </div>
// // // // //             </SandpackProvider>
// // // // //           )}
// // // // //         </div>

// // // // //         <div className="mt-3 flex items-center justify-between">
// // // // //           <div className="text-sm text-gray-300">
// // // // //             {deployUrl ? `Deployed: ${deployUrl}` : "Live preview shown above. Click Deploy to publish on Vercel."}
// // // // //           </div>

// // // // //           <div>
// // // // //             <button onClick={handleDeploy} disabled={!files || deploying} className="px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg">
// // // // //               {deploying ? "Deploying..." : "Deploy to Vercel"}
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }



// // // // // frontend/src/components/UiPreviewModal.jsx
// // // // import { useEffect, useState } from "react";
// // // // import axios from "axios";
// // // // import { SandpackProvider, SandpackPreview, SandpackCodeEditor } from "@codesandbox/sandpack-react";
// // // // import { Loader2 } from "lucide-react";
// // // // import { useAuth } from "../context/AuthContext";

// // // // export default function UiPreviewModal({ open, onClose, variant }) {
// // // //   const { token } = useAuth();
// // // //   const [files, setFiles] = useState(null);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [deploying, setDeploying] = useState(false);
// // // //   const [deployUrl, setDeployUrl] = useState(null);

// // // //   useEffect(() => {
// // // //     if (!open || !variant) return;
// // // //     setFiles(null);
// // // //     setDeployUrl(null);
// // // //     setLoading(true);

// // // //     axios.post("http://localhost:5000/ui/mockup", { variant }, { headers: { Authorization: `Bearer ${token}` } })
// // // //       .then((res) => {
// // // //         // res.data.files expected as an object keyed by path
// // // //         setFiles(res.data.files);
// // // //       })
// // // //       .catch((err) => {
// // // //         console.error("UI GENERATE ERR", err);
// // // //         alert("Failed to generate UI preview");
// // // //       })
// // // //       .finally(() => setLoading(false));
// // // //   }, [open, variant]);

// // // //   const handleDeploy = async () => {
// // // //     if (!files) return;
// // // //     setDeploying(true);
// // // //     try {
// // // //       const res = await axios.post("http://localhost:5000/ui/deploy", { files, name: `pm-${variant.id || Date.now()}` }, { headers: { Authorization: `Bearer ${token}` } });
// // // //       setDeployUrl(res.data.url || res.data.deployment?.url);
// // // //       alert("Deployment initiated. It may take a minute to build.");
// // // //     } catch (err) {
// // // //       console.error("DEPLOY ERR", err);
// // // //       alert("Deploy failed: " + (err?.response?.data?.error || err.message));
// // // //     } finally {
// // // //       setDeploying(false);
// // // //     }
// // // //   };

// // // //   if (!open) return null;

// // // //   return (
// // // //     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
// // // //       <div className="w-full max-w-6xl h-[80vh] bg-[#0b0520] rounded-2xl p-4 overflow-hidden flex flex-col">
// // // //         <div className="flex items-center justify-between mb-3">
// // // //           <h3 className="text-lg font-bold">UI Preview — {variant.variant_name || variant.name}</h3>
// // // //           <div className="flex items-center gap-3">
// // // //             {deployUrl && (
// // // //               <a className="text-sm text-green-400 underline" href={deployUrl} target="_blank" rel="noreferrer">
// // // //                 Open deployed app
// // // //               </a>
// // // //             )}
// // // //             <button onClick={onClose} className="px-3 py-1 rounded bg-white/5">Close</button>
// // // //           </div>
// // // //         </div>

// // // //         <div className="flex-1 bg-[#080417] rounded-lg overflow-hidden">
// // // //           {loading && (
// // // //             <div className="w-full h-full flex items-center justify-center">
// // // //               <Loader2 className="animate-spin" />
// // // //             </div>
// // // //           )}

// // // //           {!loading && files && (
// // // //             <SandpackProvider
// // // //               template="react"
// // // //               customSetup={{
// // // //                 files,
// // // //                 dependencies: {
// // // //                   react: "18.2.0",
// // // //                   "react-dom": "18.2.0",
// // // //                   "lucide-react": "0.268.0"
// // // //                 }
// // // //               }}
// // // //             >
// // // //               <div className="h-full flex">
// // // //                 <div className="w-1/2 h-full">
// // // //                   <SandpackPreview />
// // // //                 </div>
// // // //                 <div className="w-1/2 h-full border-l border-white/5">
// // // //                   <SandpackCodeEditor showTabs />
// // // //                 </div>
// // // //               </div>
// // // //             </SandpackProvider>
// // // //           )}
// // // //         </div>

// // // //         <div className="mt-3 flex items-center justify-between">
// // // //           <div className="text-sm text-gray-300">
// // // //             {deployUrl ? `Deployed: ${deployUrl}` : "Live preview shown above. Click Deploy to publish on Vercel."}
// // // //           </div>

// // // //           <div>
// // // //             <button onClick={handleDeploy} disabled={!files || deploying} className="px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg">
// // // //               {deploying ? "Deploying..." : "Deploy to Vercel"}
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }



// // // import { useEffect, useState } from "react";
// // // import axios from "axios";
// // // import {
// // //   SandpackProvider,
// // //   SandpackPreview,
// // //   SandpackCodeEditor,
// // // } from "@codesandbox/sandpack-react";
// // // import { Loader2 } from "lucide-react";
// // // import { useAuth } from "../context/AuthContext";

// // // export default function UiPreviewModal({ open, onClose, variant }) {
// // //   const { token } = useAuth();
// // //   const [files, setFiles] = useState(null);
// // //   const [loading, setLoading] = useState(false);
// // //   const [deploying, setDeploying] = useState(false);
// // //   const [deployUrl, setDeployUrl] = useState(null);

// // //   useEffect(() => {
// // //     if (!open || !variant) return;

// // //     setFiles(null);
// // //     setDeployUrl(null);
// // //     setLoading(true);

// // //     axios
// // //       .post(
// // //         "http://localhost:5000/ui/mockup",
// // //         { variant },
// // //         { headers: { Authorization: `Bearer ${token}` } }
// // //       )
// // //       .then((res) => {
// // //         if (!res.data || !res.data.files) {
// // //           alert("Backend did not send files!");
// // //           return;
// // //         }
// // //         setFiles(res.data.files);
// // //       })
// // //       .catch((err) => {
// // //         console.error("UI GENERATE ERR:", err);
// // //         alert("Failed to generate UI preview. Check backend logs.");
// // //       })
// // //       .finally(() => setLoading(false));
// // //   }, [open, variant]);

// // //   // --- DEPLOY ---
// // //   const handleDeploy = async () => {
// // //     if (!files) return;
// // //     setDeploying(true);

// // //     try {
// // //       const res = await axios.post(
// // //         "http://localhost:5000/ui/deploy",
// // //         {
// // //           files,
// // //           name: `pm-${variant.id || Date.now()}`,
// // //         },
// // //         { headers: { Authorization: `Bearer ${token}` } }
// // //       );

// // //       setDeployUrl(res.data.url);
// // //       alert("Deployment started. Build takes ~10-30 sec.");
// // //     } catch (err) {
// // //       console.error("DEPLOY ERR:", err);
// // //       alert("Deploy failed → " + (err.response?.data?.error || err.message));
// // //     }

// // //     setDeploying(false);
// // //   };

// // //   if (!open) return null;

// // //   return (
// // //     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
// // //       <div className="w-full max-w-6xl h-[80vh] bg-[#0b0520] rounded-2xl p-4 overflow-hidden flex flex-col">
        
// // //         {/* Header */}
// // //         <div className="flex items-center justify-between mb-3">
// // //           <h3 className="text-lg font-bold">
// // //             UI Preview — {variant.variant_name || variant.name}
// // //           </h3>

// // //           <div className="flex items-center gap-3">
// // //             {deployUrl && (
// // //               <a
// // //                 href={deployUrl}
// // //                 target="_blank"
// // //                 rel="noreferrer"
// // //                 className="text-green-400 underline"
// // //               >
// // //                 Open deployed app
// // //               </a>
// // //             )}

// // //             <button
// // //               onClick={onClose}
// // //               className="px-3 py-1 rounded bg-white/5"
// // //             >
// // //               Close
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Preview */}
// // //         <div className="flex-1 bg-[#080417] rounded-lg overflow-hidden">
// // //           {loading && (
// // //             <div className="w-full h-full flex items-center justify-center">
// // //               <Loader2 className="animate-spin" />
// // //             </div>
// // //           )}

// // //           {!loading && files && (
// // //             <SandpackProvider
// // //               template="react"
// // //               customSetup={{
// // //                 files,
// // //                 dependencies: {
// // //                   react: "18.2.0",
// // //                   "react-dom": "18.2.0",
// // //                   "lucide-react": "0.268.0",
// // //                 },
// // //               }}
// // //             >
// // //               <div className="h-full flex">
// // //                 <div className="w-1/2 h-full">
// // //                   <SandpackPreview />
// // //                 </div>

// // //                 <div className="w-1/2 h-full border-l border-white/5">
// // //                   <SandpackCodeEditor showTabs />
// // //                 </div>
// // //               </div>
// // //             </SandpackProvider>
// // //           )}
// // //         </div>

// // //         {/* Footer */}
// // //         <div className="mt-3 flex items-center justify-between">
// // //           <div className="text-sm text-gray-300">
// // //             {deployUrl
// // //               ? `Deployed: ${deployUrl}`
// // //               : "Preview running locally. Deploy to publish on Vercel."}
// // //           </div>

// // //           <button
// // //             onClick={handleDeploy}
// // //             disabled={!files || deploying}
// // //             className="px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg"
// // //           >
// // //             {deploying ? "Deploying..." : "Deploy to Vercel"}
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }



// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import { Loader2, X, Rocket } from "lucide-react";
// // import { useAuth } from "../context/AuthContext";
// // import SimplePreview from "./SimplePreview"; // <--- Import the new component

// // export default function UiPreviewModal({ open, onClose, variant }) {
// //   const { token } = useAuth();
  
// //   // Changed 'files' to 'code' since we are now just handling a raw string
// //   const [code, setCode] = useState(null); 
// //   const [loading, setLoading] = useState(false);

// //   useEffect(() => {
// //     if (!open || !variant) return;

// //     setCode(null);
// //     setLoading(true);

// //     // 1. Fetch the raw code from your new backend controller
// //     axios
// //       .post(
// //         "http://localhost:5000/ui/generate", // Ensure this matches your route
// //         { variant },
// //         { headers: { Authorization: `Bearer ${token}` } }
// //       )
// //       .then((res) => {
// //         if (!res.data || !res.data.code) {
// //           console.error("No code received:", res.data);
// //           alert("Backend sent empty code.");
// //           return;
// //         }
// //         setCode(res.data.code);
// //       })
// //       .catch((err) => {
// //         console.error("UI GENERATE ERR:", err);
// //         alert("Failed to generate UI. Check backend console.");
// //       })
// //       .finally(() => setLoading(false));
// //   }, [open, variant, token]);

// //   if (!open) return null;

// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
// //       <div className="w-full max-w-6xl h-[90vh] bg-[#0b0520] rounded-2xl border border-gray-800 flex flex-col shadow-2xl overflow-hidden">
        
// //         {/* --- HEADER --- */}
// //         <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#151030]">
// //           <div>
// //             <h3 className="text-lg font-bold text-white">
// //               UI Preview
// //             </h3>
// //             <p className="text-xs text-gray-400">
// //               Generated based on: {variant?.variant_name || "Custom Prompt"}
// //             </p>
// //           </div>

// //           <button
// //             onClick={onClose}
// //             className="p-2 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
// //           >
// //             <X size={20} />
// //           </button>
// //         </div>

// //         {/* --- MAIN CONTENT (The Iframe) --- */}
// //         <div className="flex-1 bg-[#0f0c29] relative overflow-hidden">
// //           {loading && (
// //             <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-[#0f0c29]">
// //               <Loader2 className="animate-spin text-purple-500 mb-4" size={40} />
// //               <p className="text-gray-400 animate-pulse">Generating your UI...</p>
// //             </div>
// //           )}

// //           {/* This uses your new SimplePreview component */}
// //           {!loading && code && (
// //             <div className="w-full h-full">
// //                <SimplePreview code={code} />
// //             </div>
// //           )}
// //         </div>

// //         {/* --- FOOTER --- */}
// //         <div className="p-4 border-t border-gray-800 bg-[#151030] flex items-center justify-between">
// //           <div className="text-sm text-gray-400">
// //              Preview running in local browser environment.
// //           </div>

// //           <button
// //             onClick={() => alert("Vercel Deployment coming in next update!")}
// //             className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium rounded-lg transition-all shadow-lg shadow-purple-900/20"
// //           >
// //             <Rocket size={18} />
// //             Deploy (Simulated)
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }




// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Loader2, X, Rocket } from "lucide-react";
// import { useAuth } from "../context/AuthContext";
// import SimplePreview from "./SimplePreview"; 

// export default function UiPreviewModal({ open, onClose, variant }) {
//   const { token } = useAuth();
  
//   const [code, setCode] = useState(null); 
//   const [loading, setLoading] = useState(false);
  
//   // New state for deployment loading status
//   const [deploying, setDeploying] = useState(false); 

//   useEffect(() => {
//     if (!open || !variant) return;

//     setCode(null);
//     setLoading(true);

//     // 1. Fetch the raw code from your backend
//     axios
//       .post(
//         "http://localhost:5000/ui/generate", 
//         { variant },
//         { headers: { Authorization: `Bearer ${token}` } }
//       )
//       .then((res) => {
//         if (!res.data || !res.data.code) {
//           console.error("No code received:", res.data);
//           alert("Backend sent empty code.");
//           return;
//         }
//         setCode(res.data.code);
//       })
//       .catch((err) => {
//         console.error("UI GENERATE ERR:", err);
//         alert("Failed to generate UI. Check backend console.");
//       })
//       .finally(() => setLoading(false));
//   }, [open, variant, token]);

//   // --- NEW: Handle Deployment ---
//   const handleDeploy = async () => {
//     if (!code) return;
    
//     setDeploying(true);
    
//     try {
//       const res = await axios.post(
//         "http://localhost:5000/ui/deploy", // Calls your new deploy route
//         { 
//           code: code, 
//           variant_name: variant.variant_name 
//         },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
      
//       // Success!
//       alert(`Deployment Successful! Your site is live at: \n${res.data.url}`);
//       window.open(res.data.url, "_blank"); // Open the live site
      
//     } catch (err) {
//       console.error("DEPLOY ERR:", err);
//       alert("Deployment failed. See console for details.");
//     } finally {
//       setDeploying(false);
//     }
//   };

//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
//       <div className="w-full max-w-6xl h-[90vh] bg-[#0b0520] rounded-2xl border border-gray-800 flex flex-col shadow-2xl overflow-hidden">
        
//         {/* --- HEADER --- */}
//         <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#151030]">
//           <div>
//             <h3 className="text-lg font-bold text-white">
//               UI Preview
//             </h3>
//             <p className="text-xs text-gray-400">
//               Generated based on: {variant?.variant_name || "Custom Prompt"}
//             </p>
//           </div>

//           <button
//             onClick={onClose}
//             className="p-2 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         {/* --- MAIN CONTENT (The Iframe) --- */}
//         <div className="flex-1 bg-[#0f0c29] relative overflow-hidden">
//           {loading && (
//             <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-[#0f0c29]">
//               <Loader2 className="animate-spin text-purple-500 mb-4" size={40} />
//               <p className="text-gray-400 animate-pulse">Generating your UI...</p>
//             </div>
//           )}

//           {!loading && code && (
//             <div className="w-full h-full">
//                <SimplePreview code={code} />
//             </div>
//           )}
//         </div>

//         {/* --- FOOTER --- */}
//         <div className="p-4 border-t border-gray-800 bg-[#151030] flex items-center justify-between">
//           <div className="text-sm text-gray-400">
//              Preview running in local browser environment.
//           </div>

//           <button
//             onClick={handleDeploy}
//             disabled={loading || deploying || !code}
//             className={`flex items-center gap-2 px-5 py-2.5 font-medium rounded-lg transition-all shadow-lg 
//               ${loading || deploying || !code 
//                 ? "bg-gray-700 text-gray-400 cursor-not-allowed" 
//                 : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-purple-900/20"
//               }`}
//           >
//             {deploying ? (
//               <>
//                 <Loader2 size={18} className="animate-spin" />
//                 Deploying to Vercel...
//               </>
//             ) : (
//               <>
//                 <Rocket size={18} />
//                 Deploy to Live
//               </>
//             )}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Loader2, X, Rocket } from "lucide-react";
// import { useAuth } from "../context/AuthContext";
// import SimplePreview from "./SimplePreview"; 
// import { VITE_API_URL } from "../config";

// export default function UiPreviewModal({ open, onClose, variant }) {
//   const { token } = useAuth();
  
//   const [code, setCode] = useState(null); 
//   const [loading, setLoading] = useState(false);
  
//   // New state for deployment loading status
//   const [deploying, setDeploying] = useState(false); 

//   useEffect(() => {
//     if (!open || !variant) return;

//     setCode(null);
//     setLoading(true);

//     // 1. Fetch the raw code from your backend
//     axios
//       .post(
//         `${VITE_API_URL}/ui/generate`, 
//         { variant },
//         { headers: { Authorization: `Bearer ${token}` } }
//       )
//       .then((res) => {
//         if (!res.data || !res.data.code) {
//           console.error("No code received:", res.data);
//           alert("Backend sent empty code.");
//           return;
//         }
//         setCode(res.data.code);
//       })
//       .catch((err) => {
//         console.error("UI GENERATE ERR:", err);
//         alert("Failed to generate UI. Check backend console.");
//       })
//       .finally(() => setLoading(false));
//   }, [open, variant, token]);

//   // --- HANDLE DEPLOYMENT ---
//   const handleDeploy = async () => {
//     if (!code) return;
    
//     setDeploying(true);
    
//     try {
//       const res = await axios.post(
//         `${VITE_API_URL}/ui/deploy`, 
//         { 
//           code: code, 
//           variant_name: variant.variant_name,
//           variant_id: variant.id // 👈 CRITICAL ADDITION: Needed for DB Link Caching
//         },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
      
//       // Success!
//       alert(`Deployment Successful! Your site is live at: \n${res.data.url}`);
//       window.open(res.data.url, "_blank"); // Open the live site
      
//     } catch (err) {
//       console.error("DEPLOY ERR:", err);
//       alert("Deployment failed. See console for details.");
//     } finally {
//       setDeploying(false);
//     }
//   };

//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
//       <div className="w-full max-w-6xl h-[90vh] bg-[#0b0520] rounded-2xl border border-gray-800 flex flex-col shadow-2xl overflow-hidden">
        
//         {/* --- HEADER --- */}
//         <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#151030]">
//           <div>
//             <h3 className="text-lg font-bold text-white">
//               UI Preview
//             </h3>
//             <p className="text-xs text-gray-400">
//               Generated based on: {variant?.variant_name || "Custom Prompt"}
//             </p>
//           </div>

//           <button
//             onClick={onClose}
//             className="p-2 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         {/* --- MAIN CONTENT (The Iframe) --- */}
//         <div className="flex-1 bg-[#0f0c29] relative overflow-hidden">
//           {loading && (
//             <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-[#0f0c29]">
//               <Loader2 className="animate-spin text-purple-500 mb-4" size={40} />
//               <p className="text-gray-400 animate-pulse">Generating your UI...</p>
//             </div>
//           )}

//           {!loading && code && (
//             <div className="w-full h-full">
//                <SimplePreview code={code} />
//             </div>
//           )}
//         </div>

//         {/* --- FOOTER --- */}
//         <div className="p-4 border-t border-gray-800 bg-[#151030] flex items-center justify-between">
//           <div className="text-sm text-gray-400">
//              Preview running in local browser environment.
//           </div>

//           <button
//             onClick={handleDeploy}
//             disabled={loading || deploying || !code}
//             className={`flex items-center gap-2 px-5 py-2.5 font-medium rounded-lg transition-all shadow-lg 
//               ${loading || deploying || !code 
//                 ? "bg-gray-700 text-gray-400 cursor-not-allowed" 
//                 : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-purple-900/20"
//               }`}
//           >
//             {deploying ? (
//               <>
//                 <Loader2 size={18} className="animate-spin" />
//                 Deploying to Vercel...
//               </>
//             ) : (
//               <>
//                 <Rocket size={18} />
//                 Deploy to Live
//               </>
//             )}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Loader2, X, ExternalLink } from "lucide-react"; // 👈 Changed Icon to ExternalLink
// import { useAuth } from "../context/AuthContext";
// import SimplePreview from "./SimplePreview"; 
// import { VITE_API_URL } from "../config";

// export default function UiPreviewModal({ open, onClose, variant }) {
//   const { token } = useAuth();
  
//   const [code, setCode] = useState(null); 
//   const [loading, setLoading] = useState(false);
  
//   // (Removed 'deploying' state - not needed anymore)

//   useEffect(() => {
//     if (!open || !variant) return;

//     setCode(null);
//     setLoading(true);

//     // 1. Fetch the raw code from your backend
//     axios
//       .post(
//         `${VITE_API_URL}/ui/generate`, 
//         { variant },
//         { headers: { Authorization: `Bearer ${token}` } }
//       )
//       .then((res) => {
//         if (!res.data || !res.data.code) {
//           console.error("No code received:", res.data);
//           alert("Backend sent empty code.");
//           return;
//         }
//         setCode(res.data.code);
//       })
//       .catch((err) => {
//         console.error("UI GENERATE ERR:", err);
//         alert("Failed to generate UI. Check backend console.");
//       })
//       .finally(() => setLoading(false));
//   }, [open, variant, token]);

//   // --- NEW SIMPLE HANDLER ---
//   const handleOpenLiveLink = () => {
//     if (!variant?.id) {
//       alert("Error: No Variant ID found.");
//       return;
//     }
    
//     // Construct the public link
//     const liveLink = `${window.location.origin}/view/${variant.id}`;
    
//     // Open in new tab
//     window.open(liveLink, '_blank');
//   };

//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
//       <div className="w-full max-w-6xl h-[90vh] bg-[#0b0520] rounded-2xl border border-gray-800 flex flex-col shadow-2xl overflow-hidden">
        
//         {/* --- HEADER --- */}
//         <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#151030]">
//           <div>
//             <h3 className="text-lg font-bold text-white">
//               UI Preview
//             </h3>
//             <p className="text-xs text-gray-400">
//               Generated based on: {variant?.variant_name || "Custom Prompt"}
//             </p>
//           </div>

//           <button
//             onClick={onClose}
//             className="p-2 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         {/* --- MAIN CONTENT (The Preview) --- */}
//         <div className="flex-1 bg-[#0f0c29] relative overflow-hidden">
//           {loading && (
//             <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-[#0f0c29]">
//               <Loader2 className="animate-spin text-purple-500 mb-4" size={40} />
//               <p className="text-gray-400 animate-pulse">Generating your UI...</p>
//             </div>
//           )}

//           {!loading && code && (
//             <div className="w-full h-full">
//                <SimplePreview code={code} />
//             </div>
//           )}
//         </div>

//         {/* --- FOOTER --- */}
//         <div className="p-4 border-t border-gray-800 bg-[#151030] flex items-center justify-between">
//           <div className="text-sm text-gray-400">
//              Preview running in local browser environment.
//           </div>

//           <button
//             onClick={handleOpenLiveLink} // 👈 Calls the new simple function
//             disabled={loading || !code}
//             className={`flex items-center gap-2 px-5 py-2.5 font-medium rounded-lg transition-all shadow-lg 
//               ${loading || !code 
//                 ? "bg-gray-700 text-gray-400 cursor-not-allowed" 
//                 : "bg-green-600 hover:bg-green-500 text-white shadow-green-900/20"
//               }`}
//           >
//             {/* Changed Icon and Text to reflect "Live Link" */}
//             <ExternalLink size={18} />
//             Open Live Link
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }






import { useEffect, useState } from "react";
import axios from "axios";
import { Loader2, X, ExternalLink } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import SimplePreview from "./SimplePreview"; 
import { VITE_API_URL } from "../config";
import { createClient } from '@supabase/supabase-js'; // 👈 1. Import Supabase

// 2. Initialize Supabase
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function UiPreviewModal({ open, onClose, variant }) {
  const { token } = useAuth();
  
  const [code, setCode] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false); // 👈 3. Add Saving State

  useEffect(() => {
    if (!open || !variant) return;

    setCode(null);
    setLoading(true);

    // Fetch the raw code from your backend
    axios
      .post(
        `${VITE_API_URL}/ui/generate`, 
        { variant },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        if (!res.data || !res.data.code) {
          console.error("No code received:", res.data);
          alert("Backend sent empty code.");
          return;
        }
        setCode(res.data.code);
      })
      .catch((err) => {
        console.error("UI GENERATE ERR:", err);
        alert("Failed to generate UI. Check backend console.");
      })
      .finally(() => setLoading(false));
  }, [open, variant, token]);

  // --- 4. UPDATED HANDLER: SAVE THEN OPEN ---
  const handleOpenLiveLink = async () => {
    if (!variant?.id || !code) {
      alert("Error: Missing Data.");
      return;
    }
    
    try {
      setIsSaving(true);

      // A. Save the generated code to Supabase first!
      const { error } = await supabase
        .from('variants')
        .update({ code: code }) 
        .eq('id', variant.id);

      if (error) {
        console.error("Supabase Save Error:", error);
        throw error;
      }

      // B. ONLY after saving, open the link
      const liveLink = `${window.location.origin}/view/${variant.id}`;
      window.open(liveLink, '_blank');

    } catch (err) {
      console.error("Save failed:", err);
      alert("Could not save design to database. Check console.");
    } finally {
      setIsSaving(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-6xl h-[90vh] bg-[#0b0520] rounded-2xl border border-gray-800 flex flex-col shadow-2xl overflow-hidden">
        
        {/* --- HEADER --- */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#151030]">
          <div>
            <h3 className="text-lg font-bold text-white">
              UI Preview
            </h3>
            <p className="text-xs text-gray-400">
              Generated based on: {variant?.variant_name || "Custom Prompt"}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* --- MAIN CONTENT --- */}
        <div className="flex-1 bg-[#0f0c29] relative overflow-hidden">
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-[#0f0c29]">
              <Loader2 className="animate-spin text-purple-500 mb-4" size={40} />
              <p className="text-gray-400 animate-pulse">Generating your UI...</p>
            </div>
          )}

          {!loading && code && (
            <div className="w-full h-full">
               <SimplePreview code={code} />
            </div>
          )}
        </div>

        {/* --- FOOTER --- */}
        <div className="p-4 border-t border-gray-800 bg-[#151030] flex items-center justify-between">
          <div className="text-sm text-gray-400">
             Preview running in local browser environment.
          </div>

          <button
            onClick={handleOpenLiveLink} // Calls the saving function
            disabled={loading || !code || isSaving}
            className={`flex items-center gap-2 px-5 py-2.5 font-medium rounded-lg transition-all shadow-lg 
              ${loading || !code || isSaving
                ? "bg-gray-700 text-gray-400 cursor-not-allowed" 
                : "bg-green-600 hover:bg-green-500 text-white shadow-green-900/20"
              }`}
          >
            {isSaving ? (
               <>
                 <Loader2 size={18} className="animate-spin" />
                 Saving...
               </>
            ) : (
               <>
                 <ExternalLink size={18} />
                 Open Live Link
               </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}