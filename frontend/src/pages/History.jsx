// // src/pages/History.jsx
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useAuth } from "../context/AuthContext";
// import { Link } from "react-router-dom";

// export default function History() {
//   const { token } = useAuth();
//   const [history, setHistory] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/history", {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => {
//         setHistory(res.data.history || []);
//       })
//       .catch((err) => console.error(err));
//   }, [token]); // <-- Important fix

//   return (
//     <div className="min-h-screen text-white p-6">
//       <h1 className="text-3xl font-bold mb-6">Your History</h1>

//       {history.length === 0 && (
//         <p className="opacity-70 text-lg">No history yet...</p>
//       )}

//       <div className="space-y-6">
//         {history.map((item) => (
//           <Link
//             to={`/history/${item.id}`}
//             key={item.id}
//             className="block p-5 bg-white/10 rounded-xl hover:bg-white/20"
//           >
//             <p className="text-sm opacity-60">
//               {new Date(item.created_at).toLocaleString()}
//             </p>

//             <h3 className="text-xl font-semibold mt-1">
//               {item.idea.length > 90 ? item.idea.slice(0, 90) + "..." : item.idea}
//             </h3>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useAuth } from "../context/AuthContext";
// import { Link } from "react-router-dom";

// export default function History() {
//   const { token } = useAuth();
//   const [history, setHistory] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/history", {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//     .then((res) => {
//       setHistory(res.data.history || []);
//     })
//     .catch((err) => console.error("HISTORY ERROR:", err));
//   }, []);

//   return (
//     <div className="min-h-screen text-white p-6">
//       <h1 className="text-3xl font-bold mb-6">Your History</h1>

//       {history.length === 0 && (
//         <p className="opacity-70 text-lg">No history yet...</p>
//       )}

//       <div className="space-y-6">
//         {history.map((item) => (
//           <Link
//             to={`/history/${item.id}`}
//             key={item.id}
//             className="block p-5 bg-white/10 rounded-xl hover:bg-white/20"
//           >
//             <p className="text-sm opacity-60">
//               {new Date(item.created_at).toLocaleString()}
//             </p>
//             <h3 className="text-xl font-semibold mt-1">
//               {item.idea}
//             </h3>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createClient } from '@supabase/supabase-js';
import { useAuth } from "../context/AuthContext"; 
import { Loader2, Calendar, ChevronRight, Search } from 'lucide-react';
import Header from "../components/Header";
import Footer from "../components/Footer";
// Initialize Supabase Client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function History() {
  const { user } = useAuth(); 
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchHistory();
    }
  }, [user]);

  const fetchHistory = async () => {
    try {
      setLoading(true);
      // Fetch projects specifically for this user, newest first
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setHistory(data || []);
    } catch (err) {
      console.error("Error fetching history:", err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0F071A] text-white">
        <Loader2 className="animate-spin h-8 w-8 text-purple-500" />
      </div>
    );
  }

  return (
    
    <div className="min-h-screen text-white p-6 pt-24 bg-[#0F071A]">
      <Header />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Calendar className="text-purple-400" />
          Your Innovation History
        </h1>

        {history.length === 0 ? (
          <div className="p-12 bg-white/5 rounded-xl text-center border border-white/10">
            <Search className="mx-auto h-12 w-12 text-gray-500 mb-4" />
            <h3 className="text-xl font-semibold">No history found</h3>
            <p className="text-gray-400 mt-2">Generate your first product idea to see it here.</p>
            <Link 
              to="/" 
              className="mt-6 inline-block px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
            >
              Create New Idea
            </Link>
          </div>
        ) : (
          <div className="grid gap-4">
            {history.map((item) => (
              <Link
                to={`/history/${item.id}`}
                key={item.id}
                className="group p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 flex justify-between items-center"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-purple-400 px-2 py-0.5 bg-purple-500/10 rounded">
                      {new Date(item.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-200 transition-colors">
                    {item.idea}
                  </h3>
                </div>
                <ChevronRight className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}