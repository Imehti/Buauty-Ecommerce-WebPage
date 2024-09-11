import App from "@/App";
import Cart from "@/components/Cart";
import LoginPage from "@/components/auth/LoginPage";
import RegisterPage from "@/components/auth/RegisterPage";
import currentUserState from "@/selector/currentUser";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { useRecoilValue } from "recoil";


const RequireAuth=({children}:any) => {
 const currentUser=useRecoilValue(currentUserState)

  return currentUser  ? children : <Navigate to="/login" />
}



const router = createBrowserRouter([
  { path: "/", element: <App />},
  { path: "/Cart",   element: (
    <RequireAuth>
      <Cart />
    </RequireAuth>
  ),},
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
]);

export default router;
