import { router } from "./Router";
import { RouterProvider, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
  

  return(
 <>
 <ToastContainer />
 <RouterProvider router={router}/>
 </>
  )
}
export default App;
