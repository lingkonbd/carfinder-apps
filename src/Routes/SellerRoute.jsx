import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useSeller from "../hooks/useSeller";


const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const location = useLocation();

  if (loading || isSellerLoading) {
    return (
      <div className="h-[800px] flex justify-center items-center">
        <div className="w-16 text-center h-16 border-4 border-dashed rounded-full animate-spin border-violet-800"></div>
      </div>
    ); 
  } 

  if (user && isSeller) {
    return children;
  }

  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
