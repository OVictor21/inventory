import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    user: null,
    isReady: false,
  });

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setAuthState({
        user: JSON.parse(storedUser),
        isReady: true,
      });
    } else {
      setAuthState({
        user: null,
        isReady: true,
      });
    }
  }, []);

  const login = (_tokenIgnored, userData) => {
    sessionStorage.setItem("user", JSON.stringify(userData));
    setAuthState({
      user: userData,
      isReady: true,
    });
  };

  const logout = () => {
    sessionStorage.removeItem("user");
    setAuthState({
      user: null,
      isReady: true,
    });
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
