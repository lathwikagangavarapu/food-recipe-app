import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) {
      setCurrentUser(JSON.parse(user));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await fetch('http://localhost:9090/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      if (response.ok) {
        const message = await response.text();
        setCurrentUser({ username });
        setIsAuthenticated(true);
        localStorage.setItem('currentUser', JSON.stringify({ username }));
        return { success: true, message };
      } else {
        const error = await response.text();
        return { success: false, message: error };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Network error' };
    }
  };

  const signup = async (username, password) => {
    try {
      const response = await fetch('http://localhost:9090/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      if (response.ok) {
        const message = await response.text();
        setCurrentUser({ username });
        setIsAuthenticated(true);
        localStorage.setItem('currentUser', JSON.stringify({ username }));
        return { success: true, message };
      } else {
        const error = await response.text();
        return { success: false, message: error };
      }
    } catch (error) {
      console.error('Signup error:', error);
      return { success: false, message: 'Network error' };
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  };

  const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, currentUser, login, signup, logout, getAuthHeaders }}>
      {children}
    </AuthContext.Provider>
  );
};