import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { Toaster } from "./components/ui/toaster";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import KiteNavbar from "./components/KiteNavbar";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import Support from "./pages/Support";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Kite Pages
import KiteDashboard from "./pages/KiteDashboard";
import Holdings from "./pages/Holdings";
import Positions from "./pages/Positions";
import Orders from "./pages/Orders";
import Funds from "./pages/Funds";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }
  
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// Layout Components
const MainLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

const KiteLayout = ({ children }) => (
  <>
    <KiteNavbar />
    {children}
  </>
);

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<MainLayout><Home /></MainLayout>} />
            <Route path="/products" element={<MainLayout><Products /></MainLayout>} />
            <Route path="/pricing" element={<MainLayout><Pricing /></MainLayout>} />
            <Route path="/support" element={<MainLayout><Support /></MainLayout>} />
            <Route path="/about" element={<MainLayout><About /></MainLayout>} />
            <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
            <Route path="/signup" element={<MainLayout><Signup /></MainLayout>} />

            {/* Protected Kite Routes */}
            <Route
              path="/kite/dashboard"
              element={
                <ProtectedRoute>
                  <KiteLayout><KiteDashboard /></KiteLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/kite/holdings"
              element={
                <ProtectedRoute>
                  <KiteLayout><Holdings /></KiteLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/kite/positions"
              element={
                <ProtectedRoute>
                  <KiteLayout><Positions /></KiteLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/kite/orders"
              element={
                <ProtectedRoute>
                  <KiteLayout><Orders /></KiteLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/kite/funds"
              element={
                <ProtectedRoute>
                  <KiteLayout><Funds /></KiteLayout>
                </ProtectedRoute>
              }
            />

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
