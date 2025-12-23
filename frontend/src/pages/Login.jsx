// // src/pages/Login.jsx
// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useAuth } from "../context/AuthContext";
// import axios from "axios";

// export default function Login() {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const submit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await axios.post("http://localhost:5000/auth/login", {
//         email,
//         password,
//       });

//       // ✔ FIXED: Supabase returns access token in session
//       const token = res.data.session?.access_token;
//       const user = res.data.user;

//       if (!token) {
//         alert("Invalid login response.");
//         return;
//       }

//       login(user, token); // save to context + localStorage
//       navigate("/home");

//     } catch (err) {
//       alert(err?.response?.data?.error || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#021022] to-[#081025] p-6">
//       <motion.div
//         initial={{ opacity: 0, y: 12 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.45 }}
//         className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl"
//       >
//         <h2 className="text-3xl font-bold text-white mb-2 text-center">Login</h2>
//         <p className="text-sm text-gray-300 mb-6 text-center">
//           Sign in to access your ParallelMind dashboard
//         </p>

//         <form onSubmit={submit} className="space-y-4">
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-3 rounded-md bg-white/10 text-white placeholder:text-gray-400 border border-white/20 focus:outline-none"
//             type="email"
//             placeholder="Email"
//             required
//           />

//           <input
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-3 rounded-md bg-white/10 text-white placeholder:text-gray-400 border border-white/20 focus:outline-none"
//             type="password"
//             placeholder="Password"
//             required
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:opacity-90 transition"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         <p className="text-sm text-gray-300 mt-4 text-center">
//           Don’t have an account?{" "}
//           <Link to="/signup" className="underline text-white">
//             Create account
//           </Link>
//         </p>
//       </motion.div>
//     </div>
//   );
// }










// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { VITE_API_URL } from "../config";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${VITE_API_URL}/auth/login`, {
        email,
        password,
      });

      // ✅ CORRECT WAY (your backend returns token + user)
      const token = res.data.token;
      const user = res.data.user;

      if (!token || !user) {
        alert("Invalid server response.");
        return;
      }

      // Save user + token to context/localStorage
      login(user, token);

      // Redirect
      navigate("/home");

    } catch (err) {
      alert(err?.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#021022] to-[#081025] p-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl"
      >
        <h2 className="text-3xl font-bold text-white mb-2 text-center">Login</h2>
        <p className="text-sm text-gray-300 mb-6 text-center">
          Sign in to access your ParallelMind dashboard
        </p>

        <form onSubmit={submit} className="space-y-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md bg-white/10 text-white placeholder:text-gray-400 border border-white/20 focus:outline-none"
            type="email"
            placeholder="Email"
            required
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-md bg-white/10 text-white placeholder:text-gray-400 border border-white/20 focus:outline-none"
            type="password"
            placeholder="Password"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:opacity-90 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-sm text-gray-300 mt-4 text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="underline text-white">
            Create account
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
