import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useUserAuth, UserAuthContextProvider } from "./UserAuth";
export const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  const handleLogout = async () => {
    
    try {
      await user.logOut();
      return <Navigate to="/login" />;
    } catch (error) {
      console.log(error.message);
    }
  };
  
  console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;