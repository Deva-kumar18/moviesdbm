import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useEffect } from "react";

export const ProtectedRoute = ({ children }) => {
  const requestToken = localStorage.getItem("Request_token");
  return requestToken !== null ? <> {children}</> : <Navigate to="/login" />;
};

export const PublicRoute = ({ children }) => {
  const navigate = useNavigate();
  const Request_token = localStorage.getItem("Request_token");
  useEffect(() => {
    if (Request_token !== null) {
      return navigate("/");
    } else {
      return navigate("/login");
    }
  }, []);
  return <>{children}</>;
};
