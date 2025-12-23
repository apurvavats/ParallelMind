import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

export default function Signup() {
    const navigate = useNavigate();
const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await axios.post("http://localhost:5000/auth/signup", {
                name,
                email,
                password,
            });

            alert("Signup successful! Please login.");
            navigate("/login");
        } catch (err) {
            alert(err?.response?.data?.error || "Signup failed");
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
                className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8"
            >
                <h2 className="text-2xl font-semibold text-white mb-2">Create Account</h2>
                <p className="text-sm text-gray-300 mb-6">
                    Sign up to start building projects on ParallelMind
                </p>

                <form onSubmit={submit} className="space-y-4">
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 rounded-md bg-white/10 text-white placeholder:text-gray-400 border border-white/20"
                        type="text"
                        placeholder="Full Name"
                        required
                    />

                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 rounded-md bg-white/10 text-white placeholder:text-gray-400 border border-white/10"
                        type="email"
                        placeholder="Email"
                        required
                    />

                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 rounded-md bg-white/10 text-white placeholder:text-gray-400 border border-white/10"
                        type="password"
                        placeholder="Password"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-purple-400 to-pink-500 text-black font-semibold rounded-lg"
                    >
                        {loading ? "Creating account..." : "Create account"}
                    </button>
                </form>

                <p className="text-sm text-gray-300 mt-4 text-center">
                    Already have an account?{" "}
                    <Link to="/login" className="underline text-white">
                        Login
                    </Link>
                </p>
            </motion.div>
        </div>
    );
}
