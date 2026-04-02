import { createContext, useContext, useState, useEffect } from "react";
import { logout as logoutAPI } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    user: null,
    isReady: false,
  });

  useEffect(() => {
    // Check for user in sessionStorage first, then localStorage
    const storedUser = sessionStorage.getItem("user") || localStorage.getItem("user");
    const token = sessionStorage.getItem("token") || localStorage.getItem("token");
    
    if (storedUser && token) {
      try {
        setAuthState({
          user: JSON.parse(storedUser),
          isReady: true,
        });
      } catch (error) {
        console.error("Error parsing user data:", error);
        setAuthState({
          user: null,
          isReady: true,
        });
      }
    } else {
      setAuthState({
        user: null,
        isReady: true,
      });
    }
  }, []);

  const login = (token, userData) => {
    // Store user data
    const userToStore = typeof userData === "object" ? userData : { email: userData };
    sessionStorage.setItem("user", JSON.stringify(userToStore));
    
    setAuthState({
      user: userToStore,
      isReady: true,
    });
  };

  const logout = async () => {
    try {
      // Call API logout endpoint if token exists
      const token = sessionStorage.getItem("token") || localStorage.getItem("token");
      if (token) {
        await logoutAPI();
      }
    } catch (error) {
      console.error("Logout API error:", error);
      // Continue with local logout even if API call fails
    } finally {
      // Clear all storage
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      
      setAuthState({
        user: null,
        isReady: true,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: authState.user,
        isLoggedIn: !!authState.user,
        isReady: authState.isReady,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
