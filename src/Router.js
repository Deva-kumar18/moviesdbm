import { createBrowserRouter } from "react-router-dom";
import LayoutPage from "./Pages/Layout/LayoutPage";
import LoginPage from "./Pages/LoginForm/LoginPage/LoginPage";
import { ProtectedRoute, PublicRoute } from "./Utills/Utills";

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
    path: "/login",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
]);
