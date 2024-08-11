import App from "@/App";
import LoginPage from "@/components/login/LoginPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <LoginPage /> },
]);

export default router;
