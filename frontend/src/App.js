import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { Toaster } from "./components/ui/toaster";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import MFHome from "./pages/MFHome";
import SIPCalculators from "./pages/SIPCalculators";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-genzpink to-genzpurple">
        <div className="text-white text-xl font-semibold animate-pulse">Loading your portfolio...</div>
      </div>
    );
  }
  
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// Layout Component
const MainLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<MainLayout><MFHome /></MainLayout>} />
            <Route path="/calculators" element={<MainLayout><SIPCalculators /></MainLayout>} />
            <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
            <Route path="/signup" element={<MainLayout><Signup /></MainLayout>} />

            {/* Placeholder routes */}
            <Route path="/explore" element={<MainLayout><MFHome /></MainLayout>} />
            <Route path="/learn" element={<MainLayout><MFHome /></MainLayout>} />
            <Route path="/portfolio" element={
              <ProtectedRoute>
                <MainLayout><MFHome /></MainLayout>
              </ProtectedRoute>
            } />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Toaster />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
