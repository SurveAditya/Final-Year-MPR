import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

axios.defaults.baseURL = "http://localhost:4000/";

const AuthProvider = ({ children }) => {
  // States
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // check local storage if name exist then set user
    const user = localStorage.getItem("name");
    if (user) {
      setUser(user);
    }
    setLoading(false);
  }, []);

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  const login = async (email, password) => {
    localStorage.setItem("email", email);
    localStorage.setItem("name", "John Doe");
    localStorage.setItem("company", "Google");

    setUser({
      email,
      name: "John Doe",
      company: "Google",
    });
  };

  const register = async (name, email, password, companyName) => {
    localStorage.setItem("email", email);
    localStorage.setItem("name", name);
    localStorage.setItem("company", companyName);

    setUser({
      email,
      name,
      company: companyName,
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, setUser, logout, register, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);
