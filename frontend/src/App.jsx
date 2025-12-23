// // import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// // import Landing from "./pages/Landing";
// // import Login from "./pages/Login";
// // import Signup from "./pages/Signup";
// // import Home from "./pages/Home";
// // import { AuthProvider, useAuth } from "./context/AuthContext";
// // import History from "./pages/History";

// // function ProtectedRoute({ children }) {
// //   const { user } = useAuth();
// //   if (!user) return <Navigate to="/" />;
// //   return children;
// // }

// // export default function App() {
// //   return (
// //     <AuthProvider>
// //       <BrowserRouter>
// //         <Routes>
// //           <Route path="/" element={<Landing />} />
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/signup" element={<Signup />} />
// //           <Route
// //   path="/history"
// //   element={
// //     <ProtectedRoute>
// //       <History />
// //     </ProtectedRoute>
// //   }
// // />

// //           <Route
// //             path="/home"
// //             element={
// //               <ProtectedRoute>
// //                 <Home />
// //               </ProtectedRoute>
// //             }
// //           />
// //         </Routes>
// //       </BrowserRouter>
// //     </AuthProvider>
// //   );
// // }

// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Landing from "./pages/Landing";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import About from "./pages/About";
// import History from "./pages/History";
// import HistoryDetails from "./pages/HistoryDetails";  // ✅ NEW
// import { AuthProvider, useAuth } from "./context/AuthContext";

// function ProtectedRoute({ children }) {
//   const { user } = useAuth();
//   if (!user) return <Navigate to="/" />;
//   return children;
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>

//           {/* Public Routes */}
//           <Route path="/" element={<Landing />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />

//           {/* Protected Routes */}
//           <Route
//             path="/home"
//             element={
//               <ProtectedRoute>
//                 <Home />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="/history"
//             element={
//               <ProtectedRoute>
//                 <History />
//               </ProtectedRoute>
//             }
//           />
//            <Route
//             path="/about"
//             element={
//               <ProtectedRoute>
//                 <About />
//               </ProtectedRoute>
//             }
//           />
//            <Route
//             path="/contact"
//             element={
//               <ProtectedRoute>
//                 <Contact />
//               </ProtectedRoute>
//             }
//           />
//           {/* 🔥 NEW: History Details Route */}
//           <Route
//             path="/history/:id"
//             element={
//               <ProtectedRoute>
//                 <HistoryDetails />
//               </ProtectedRoute>
//             }
//           />

//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }



import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import History from "./pages/History";
import HistoryDetails from "./pages/HistoryDetails";
import { AuthProvider, useAuth } from "./context/AuthContext";
import LiveView from "./pages/LiveView";

// --- 1. PROTECT DASHBOARD ROUTES ---
// If NOT logged in, kick them to Landing Page ("/")
function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/" replace />;
  return children;
}

// --- 2. PROTECT PUBLIC ROUTES (NEW) ---
// If ALREADY logged in, kick them to Home Page ("/home")
function PublicRoute({ children }) {
  const { user } = useAuth();
  if (user) return <Navigate to="/home" replace />;
  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* --- PUBLIC ROUTES (Landing, Login, Signup) --- */}
          {/* We wrap these so logged-in users don't see them */}
          <Route
            path="/"
            element={
              <PublicRoute>
                <Landing />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />
          <Route
            path="/view/:id"
            element={<LiveView />}
          />
          {/* --- PROTECTED ROUTES (Home, History, etc.) --- */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/history"
            element={
              <ProtectedRoute>
                <History />
              </ProtectedRoute>
            }
          />

          <Route
            path="/history/:id"
            element={
              <ProtectedRoute>
                <HistoryDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />

          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}