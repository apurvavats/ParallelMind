// // // // import { useState } from "react";

// // // // export default function VariantCard({ variant, onGenerateUI }) {
// // // //   const [expanded, setExpanded] = useState(false);

// // // //   return (
// // // //     <div className="bg-white/10 p-5 rounded-xl text-white border border-white/20 backdrop-blur-lg">
// // // //       <h2 className="text-xl font-bold mb-2">{variant.variant_name}</h2>
// // // //       <p className="text-gray-300 mb-3">{variant.summary}</p>

// // // //       <button
// // // //         className="text-sm underline mb-3"
// // // //         onClick={() => setExpanded(!expanded)}
// // // //       >
// // // //         {expanded ? "Hide details" : "Expand details"}
// // // //       </button>

// // // //       {expanded && (
// // // //         <div className="text-sm space-y-2">
// // // //           <p><b>Persona:</b> {variant.persona}</p>
// // // //           <p><b>Problem:</b> {variant.problem_statement}</p>

// // // //           <p className="font-semibold mt-2">Core Features:</p>
// // // //           <ul className="ml-5 list-disc">
// // // //             {variant.core_features.map((f, i) => <li key={i}>{f}</li>)}
// // // //           </ul>
// // // //         </div>
// // // //       )}

// // // //       <button
// // // //         onClick={() => onGenerateUI(variant)}
// // // //         className="mt-4 bg-blue-600 px-4 py-2 rounded-md"
// // // //       >
// // // //         Generate UI Mockup
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // }


// // // // import { useState } from "react";
// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import { ChevronDown, ChevronUp, Layers } from "lucide-react";

// // // // export default function VariantCard({ variant, index }) {
// // // //   const [expanded, setExpanded] = useState(false);

// // // //   return (
// // // //     <motion.div
// // // //       initial={{ opacity: 0, y: 20 }}
// // // //       animate={{ opacity: 1, y: 0 }}
// // // //       transition={{ delay: index * 0.1 }}
// // // //       className={`bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all hover:border-pink-500/30 ${
// // // //         expanded ? "bg-white/10" : ""
// // // //       }`}
// // // //     >
// // // //       <div className="p-5">
// // // //         <div className="flex justify-between items-start mb-2">
// // // //           <h3 className="text-lg font-bold text-white">{variant.name}</h3>
// // // //           <span className="text-[10px] font-mono text-pink-400 bg-pink-500/10 px-2 py-1 rounded">
// // // //             V{index + 1}
// // // //           </span>
// // // //         </div>

// // // //         <p className="text-gray-400 text-sm mb-4">{variant.summary}</p>

// // // //         <div className="flex gap-2">
// // // //           <button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2">
// // // //             <Layers size={14} /> Mockup
// // // //           </button>

// // // //           <button
// // // //             onClick={() => setExpanded(!expanded)}
// // // //             className="px-3 py-2 bg-transparent border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"
// // // //           >
// // // //             {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
// // // //           </button>
// // // //         </div>
// // // //       </div>

// // // //       <AnimatePresence>
// // // //         {expanded && (
// // // //           <motion.div
// // // //             initial={{ height: 0 }}
// // // //             animate={{ height: "auto" }}
// // // //             exit={{ height: 0 }}
// // // //             className="bg-black/20 border-t border-white/5 overflow-hidden"
// // // //           >
// // // //             <div className="p-5 text-sm space-y-3">
// // // //               <div>
// // // //                 <span className="text-pink-400 text-xs font-bold uppercase block mb-1">
// // // //                   Target Persona
// // // //                 </span>
// // // //                 <span className="text-gray-300">{variant.persona}</span>
// // // //               </div>

// // // //               <div>
// // // //                 <span className="text-purple-400 text-xs font-bold uppercase block mb-1">
// // // //                   Problem
// // // //                 </span>
// // // //                 <span className="text-gray-300">{variant.problem}</span>
// // // //               </div>
// // // //             </div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>
// // // //     </motion.div>
// // // //   );
// // // // }
// // // import { useState } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { ChevronDown, ChevronUp, Layers } from "lucide-react";

// // // export default function VariantCard({ variant, index }) {
// // //   const [expanded, setExpanded] = useState(false);

// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0, y: 20 }}
// // //       animate={{ opacity: 1, y: 0 }}
// // //       transition={{ delay: index * 0.1 }}
// // //       className={`bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all hover:border-pink-500/30 ${
// // //         expanded ? "bg-white/10" : ""
// // //       }`}
// // //     >
// // //       <div className="p-5">
// // //         <div className="flex justify-between items-start mb-2">
// // //           <h3 className="text-lg font-bold text-white">{variant.name}</h3>
// // //           <span className="text-[10px] font-mono text-pink-400 bg-pink-500/10 px-2 py-1 rounded">
// // //             V{index + 1}
// // //           </span>
// // //         </div>

// // //         <p className="text-gray-400 text-sm mb-4">{variant.summary}</p>

// // //         <div className="flex gap-2">
// // //           <button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2">
// // //             <Layers size={14} /> Mockup
// // //           </button>

// // //           <button
// // //             onClick={() => setExpanded(!expanded)}
// // //             className="px-3 py-2 bg-transparent border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"
// // //           >
// // //             {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
// // //           </button>
// // //         </div>
// // //       </div>

// // //       <AnimatePresence>
// // //         {expanded && (
// // //           <motion.div
// // //             initial={{ height: 0 }}
// // //             animate={{ height: "auto" }}
// // //             exit={{ height: 0 }}
// // //             className="bg-black/20 border-t border-white/5 overflow-hidden"
// // //           >
// // //             <div className="p-5 text-sm space-y-3">
// // //               <div>
// // //                 <span className="text-pink-400 text-xs font-bold uppercase block mb-1">
// // //                   Target Persona
// // //                 </span>
// // //                 <span className="text-gray-300">
// // //                   {variant.full_plan?.persona || "—"}
// // //                 </span>
// // //               </div>

// // //               <div>
// // //                 <span className="text-purple-400 text-xs font-bold uppercase block mb-1">
// // //                   Problem
// // //                 </span>
// // //                 <span className="text-gray-300">
// // //                   {variant.full_plan?.problem || "—"}
// // //                 </span>
// // //               </div>

// // //               <div>
// // //                 <span className="text-blue-400 text-xs font-bold uppercase block mb-1">
// // //                   Core Features
// // //                 </span>
// // //                 <ul className="list-disc ml-4 text-gray-300">
// // //                   {variant.full_plan?.core_features?.map((f, i) => (
// // //                     <li key={i}>{f}</li>
// // //                   ))}
// // //                 </ul>
// // //               </div>

// // //               <div>
// // //                 <span className="text-green-400 text-xs font-bold uppercase block mb-1">
// // //                   Tagline
// // //                 </span>
// // //                 <span className="text-gray-300">
// // //                   {variant.full_plan?.tagline || "—"}
// // //                 </span>
// // //               </div>
// // //             </div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </motion.div>
// // //   );
// // // }




// // import { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { ChevronDown, ChevronUp, Layers } from "lucide-react";

// // export default function VariantCard({ variant, index }) {
// //   const [expanded, setExpanded] = useState(false);

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ delay: index * 0.1 }}
// //       className={`bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all hover:border-pink-500/30 ${
// //         expanded ? "bg-white/10" : ""
// //       }`}
// //     >
// //       <div className="p-5">
// //         <div className="flex justify-between items-start mb-2">
// //           <h3 className="text-lg font-bold text-white">{variant.name}</h3>

// //           <span className="text-[10px] font-mono text-pink-400 bg-pink-500/10 px-2 py-1 rounded">
// //             V{index + 1}
// //           </span>
// //         </div>

// //         <p className="text-gray-400 text-sm mb-4">{variant.summary}</p>

// //         <div className="flex gap-2">
// //           <button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2">
// //             <Layers size={14} /> Mockup
// //           </button>

// //           <button
// //             onClick={() => setExpanded(!expanded)}
// //             className="px-3 py-2 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"
// //           >
// //             {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
// //           </button>
// //         </div>
// //       </div>

// //       <AnimatePresence>
// //         {expanded && (
// //           <motion.div
// //             initial={{ height: 0 }}
// //             animate={{ height: "auto" }}
// //             exit={{ height: 0 }}
// //             className="bg-black/20 border-t border-white/5 overflow-hidden"
// //           >
// //             <div className="p-5 text-sm space-y-3">

// //               <div>
// //                 <span className="text-pink-400 text-xs font-bold uppercase block">
// //                   Target Persona
// //                 </span>
// //                 <span className="text-gray-300">
// //                   {variant.full_plan?.persona}
// //                 </span>
// //               </div>

// //               <div>
// //                 <span className="text-purple-400 text-xs font-bold uppercase block">
// //                   Problem
// //                 </span>
// //                 <span className="text-gray-300">
// //                   {variant.full_plan?.problem}
// //                 </span>
// //               </div>

// //               <div>
// //                 <span className="text-blue-400 text-xs font-bold uppercase block">
// //                   Core Features
// //                 </span>
// //                 <ul className="list-disc ml-5 text-gray-300">
// //                   {variant.full_plan?.core_features?.map((f, i) => (
// //                     <li key={i}>{f}</li>
// //                   ))}
// //                 </ul>
// //               </div>

// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </motion.div>
// //   );
// // }








// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, ChevronUp, Layers } from "lucide-react";

// export default function VariantCard({ variant, index }) {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: index * 0.1 }}
//       className={`bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all hover:border-pink-500/30 ${
//         expanded ? "bg-white/10" : ""
//       }`}
//     >
//       <div className="p-5">
//         <div className="flex justify-between items-start mb-2">
//           <h3 className="text-lg font-bold text-white">
//             {variant.variant_name}
//           </h3>

//           <span className="text-[10px] font-mono text-pink-400 bg-pink-500/10 px-2 py-1 rounded">
//             V{index + 1}
//           </span>
//         </div>

//         <p className="text-gray-400 text-sm mb-4">{variant.tagline}</p>

//         <div className="flex gap-2">
//           <button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2">
//             <Layers size={14} /> Mockup
//           </button>

//           <button
//             onClick={() => setExpanded(!expanded)}
//             className="px-3 py-2 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"
//           >
//             {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
//           </button>
//         </div>
//       </div>

//       <AnimatePresence>
//         {expanded && (
//           <motion.div
//             initial={{ height: 0 }}
//             animate={{ height: "auto" }}
//             exit={{ height: 0 }}
//             className="bg-black/20 border-t border-white/5 overflow-hidden"
//           >
//             <div className="p-5 text-sm space-y-4">

//               <div>
//                 <span className="text-pink-400 text-xs font-bold uppercase block">
//                   Target Persona
//                 </span>
//                 <span className="text-gray-300">{variant.persona}</span>
//               </div>

//               <div>
//                 <span className="text-purple-400 text-xs font-bold uppercase block">
//                   Problem Statement
//                 </span>
//                 <span className="text-gray-300">{variant.problem_statement}</span>
//               </div>

//               <div>
//                 <span className="text-blue-400 text-xs font-bold uppercase block">
//                   Core Features
//                 </span>
//                 <ul className="list-disc ml-5 text-gray-300">
//                   {variant.core_features?.map((f, i) => (
//                     <li key={i}>{f}</li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <span className="text-green-400 text-xs font-bold uppercase block">
//                   User Flow
//                 </span>
//                 <ul className="list-disc ml-5 text-gray-300">
//                   {variant.user_flow?.map((f, i) => (
//                     <li key={i}>{f}</li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <span className="text-yellow-400 text-xs font-bold uppercase block">
//                   MVP Tasks
//                 </span>
//                 <ul className="list-disc ml-5 text-gray-300">
//                   {variant.mvp_tasks?.map((f, i) => (
//                     <li key={i}>{f}</li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <span className="text-orange-400 text-xs font-bold uppercase block">
//                   Revenue Model
//                 </span>
//                 <span className="text-gray-300">{variant.revenue_model}</span>
//               </div>

//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// }


// frontend/src/components/VariantCard.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Layers } from "lucide-react";
import UiPreviewModal from "./UiPreviewModal";

export default function VariantCard({ variant, index }) {
  const [expanded, setExpanded] = useState(false);
  const [openPreview, setOpenPreview] = useState(false);

  // Safe access to fields whether from full_plan or flattened DB mapping
  const name = variant.name || variant.variant_name || variant.variantName;
  const summary = variant.summary || variant.reasoning || variant.tagline || "";
  const full = variant.full_plan || {
    persona: variant.persona,
    problem: variant.problem_statement || variant.problem,
    core_features: variant.core_features || variant.features || [],
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.06 }}
        className={`bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all hover:border-pink-500/30 relative min-h-[200px]`}
      >
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-white">{name}</h3>
            <span className="text-[10px] font-mono text-pink-400 bg-pink-500/10 px-2 py-1 rounded">
              V{index + 1}
            </span>
          </div>

          <p className="text-gray-400 text-sm mb-4">{summary}</p>

          <div className="flex gap-2">
            <button
              onClick={() => setOpenPreview(true)}
              className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2"
            >
              <Layers size={14} /> Mockup
            </button>

            <button
              onClick={() => setExpanded(!expanded)}
              className="px-3 py-2 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"
            >
              {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        </div>

        {expanded && (
          <div className="bg-black/20 border-t border-white/5 overflow-hidden p-5 text-sm">
            <div>
              <div className="text-pink-400 text-xs font-bold uppercase">Target Persona</div>
              <div className="text-gray-300 mb-3">{full.persona}</div>
            </div>

            <div>
              <div className="text-purple-400 text-xs font-bold uppercase">Problem</div>
              <div className="text-gray-300 mb-3">{full.problem}</div>
            </div>

            <div>
              <div className="text-blue-400 text-xs font-bold uppercase">Core Features</div>
              <ul className="list-disc ml-5 text-gray-300">
                {(full.core_features || []).map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          </div>
        )}
      </motion.div>

      {openPreview && (
        <UiPreviewModal open={openPreview} onClose={() => setOpenPreview(false)} variant={variant} />
      )}
    </>
  );
}
