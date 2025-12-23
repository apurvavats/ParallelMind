import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-[#0f0c29]/70 backdrop-blur-xl border-b border-white/10">
      <div className="flex items-center gap-2">
        <Link
          to="/home"
          className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 cursor-pointer hover:opacity-80 transition-opacity"
        >
          ParallelMind
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-6">
        <Link to="/home" className="text-sm text-gray-300 hover:text-pink-400 transition-colors">
          Home
        </Link>
        <Link to="/history" className="text-sm text-gray-300 hover:text-pink-400 transition-colors">
          History
        </Link>
        <Link to="/about" className="text-sm text-gray-300 hover:text-pink-400 transition-colors">
          About
        </Link>
        <Link to="/contact" className="text-sm text-gray-300 hover:text-pink-400 transition-colors">
          Contact Us
        </Link>

        {user && (
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-white/20">
            <div className="text-right">
              <span className="block text-s text-white-400">Hi!!👋</span>
               
              
            </div>

            <button
              onClick={logout}
              className="px-5 py-2 text-sm font-bold text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-full shadow-lg hover:scale-105 transition-all"
            >
              Logout
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
