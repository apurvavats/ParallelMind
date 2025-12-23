// export default function VariantList({ variants }) {
//   if (!variants.length) return null

//   return (
//     <div className="max-w-6xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
//       {variants.map((v, idx) => (
//         <VariantCard key={idx} variant={v} />
//       ))}
//     </div>
//   )
// }



// src/components/VariantList.jsx
import VariantCard from "./VariantCard";

export default function VariantList({ variants }) {
  if (!variants || variants.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      {variants.map((v, i) => (
        <VariantCard key={i} variant={v} />
      ))}
    </div>
  );
}
