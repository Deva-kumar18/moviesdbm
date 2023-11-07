import { createBrowserRouter } from "react-router-dom";
import LayoutPage from "./Pages/Layout/LayoutPage";
import LoginPage from "./Pages/LoginForm/LoginPage/LoginPage";
import { ProtectedRoute, PublicRoute } from "./Utills/Utills";
import MovieDetails from "./Pages/MovieDetails/MovieDetails";
import { useState } from "react";


export const router = createBrowserRouter([

  
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <LayoutPage />
      </ProtectedRoute>
    ),
  },
  {
    path:'/moviedetails/:id',
    element:<MovieDetails/>
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
]);
