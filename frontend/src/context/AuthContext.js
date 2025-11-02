import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('zerodha_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Mock login - in real app, this would call backend API
    const mockUser = {
      name: email.split('@')[0],
      email: email,
      userId: 'ZU' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      funds: {
        available: 125000,
        used: 75000,
        total: 200000
      }
    };
    setUser(mockUser);
    localStorage.setItem('zerodha_user', JSON.stringify(mockUser));
    return Promise.resolve(mockUser);
  };

  const signup = (name, email, password, mobile) => {
    // Mock signup
    const mockUser = {
      name: name,
      email: email,
      mobile: mobile,
      userId: 'ZU' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      funds: {
        available: 0,
        used: 0,
        total: 0
      }
    };
    setUser(mockUser);
    localStorage.setItem('zerodha_user', JSON.stringify(mockUser));
    return Promise.resolve(mockUser);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('zerodha_user');
  };

  const value = {
    user,
    login,
    signup,
    logout,
    loading,
    isAuthenticated: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};