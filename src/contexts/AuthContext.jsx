// import React, { createContext, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   const login = (username, password) => {
//     if (username === "user" && password === "user@123") {
//       setIsAuthenticated(true);
//       navigate("/home");
//     } else {
//       alert("Invalid username or password");
//     }
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//     navigate("/login");
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
