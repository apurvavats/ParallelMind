// import React, { useEffect, useRef } from "react";

// export default function SimplePreview({ code }) {
//   const iframeRef = useRef(null);

//   useEffect(() => {
//     if (!iframeRef.current || !code) return;

//     const htmlContent = `
//       <!DOCTYPE html>
//       <html>
//         <head>
//           <meta charset="UTF-8" />
//           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//           <script src="[https://cdn.tailwindcss.com](https://cdn.tailwindcss.com)"></script>
//           <script src="[https://unpkg.com/react@18/umd/react.development.js](https://unpkg.com/react@18/umd/react.development.js)" crossorigin></script>
//           <script src="[https://unpkg.com/react-dom@18/umd/react-dom.development.js](https://unpkg.com/react-dom@18/umd/react-dom.development.js)" crossorigin></script>
//           <script src="[https://unpkg.com/@babel/standalone/babel.min.js](https://unpkg.com/@babel/standalone/babel.min.js)"></script>
          
//           <style>
//             body { background-color: #0f0c29; color: white; margin: 0; height: 100vh; display: flex; justify-content: center; align-items: center; }
//             #root { width: 100%; height: 100%; }
//           </style>
//         </head>
//         <body>
//           <div id="root"></div>

//           <script type="text/babel">
//             // Error Boundary to catch crashes
//             window.onerror = function(message, source, lineno, colno, error) {
//               document.getElementById('root').innerHTML = '<div style="color:red; padding:20px;">' + message + '</div>';
//             };

//             try {
//               // Ensure React variables are available
//               const { useState, useEffect, useRef } = React;
              
//               // INJECT GENERATED CODE HERE
//               ${code}

//               // Render the 'App' component
//               const root = ReactDOM.createRoot(document.getElementById('root'));
//               root.render(<App />);
//             } catch (err) {
//                document.getElementById('root').innerHTML = '<div style="color:red; padding:20px;">Runtime Error: ' + err.message + '</div>';
//             }
//           </script>
//         </body>
//       </html>
//     `;

//     const doc = iframeRef.current.contentWindow.document;
//     doc.open();
//     doc.write(htmlContent);
//     doc.close();

//   }, [code]);

//   return (
//     <div className="w-full h-full bg-[#1a1a1a] rounded-lg overflow-hidden border border-gray-700 relative">
//       {!code && (
//         <div className="absolute inset-0 flex items-center justify-center text-gray-500">
//           Waiting for code...
//         </div>
//       )}
//       <iframe 
//         ref={iframeRef}
//         title="Preview"
//         className="w-full h-full border-none"
//         sandbox="allow-scripts allow-same-origin"
//       />
//     </div>
//   );
// }



import React, { useEffect, useRef } from "react";

export default function SimplePreview({ code }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (!iframeRef.current || !code) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          
          <script src="https://cdn.tailwindcss.com"></script>
          <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
          <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
          <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
          
          <script src="https://unpkg.com/lucide@latest"></script>
          
          <style>
            body { background-color: #0f0c29; color: white; margin: 0; min-height: 100vh; }
            #root { width: 100%; height: 100%; }
            /* Hide scrollbar for cleaner look */
            ::-webkit-scrollbar { width: 8px; }
            ::-webkit-scrollbar-track { background: #0f0c29; }
            ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
          </style>
        </head>
        <body>
          <div id="root"></div>

          <script type="text/babel">
            // Error Boundary
            window.onerror = function(message, source, lineno, colno, error) {
              document.getElementById('root').innerHTML = '<div style="color:#ff6b6b; padding:20px; font-family:sans-serif;"><h3>Preview Error</h3>' + message + '</div>';
            };

            try {
              // 1. Make React hooks global
              const { useState, useEffect, useRef } = React;
              
              // 2. Make Icons global (AI loves using lucide)
              const lucide = window.lucide;

              // 3. INJECT GENERATED CODE
              // The AI writes "function App() { ... }" here
              ${code}

              // 4. Render App
              const root = ReactDOM.createRoot(document.getElementById('root'));
              root.render(<App />);
              
            } catch (err) {
               document.getElementById('root').innerHTML = '<div style="color:#ff6b6b; padding:20px; font-family:sans-serif;"><h3>Runtime Error</h3>' + err.message + '</div>';
            }
          </script>
        </body>
      </html>
    `;

    const doc = iframeRef.current.contentWindow.document;
    doc.open();
    doc.write(htmlContent);
    doc.close();

  }, [code]);

  return (
    <div className="w-full h-full bg-[#1a1a1a] rounded-lg overflow-hidden border border-gray-700 relative">
      {!code && (
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 animate-pulse">
          Generating Preview...
        </div>
      )}
      <iframe 
        ref={iframeRef}
        title="Preview"
        className="w-full h-full border-none"
        // 'allow-modals' is useful if the AI adds alerts
        sandbox="allow-scripts allow-same-origin allow-modals"
      />
    </div>
  );
}