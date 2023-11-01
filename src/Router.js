import { createBrowserRouter } from "react-router-dom";
import LayoutPage from "./Pages/Layout/LayoutPage";
import LoginPage from "./Pages/LoginForm/LoginPage/LoginPage";




export const router = createBrowserRouter([{
    path:'/',
    element:<LayoutPage/>
},{
    path:"/login",
    element:<LoginPage/>
}]);