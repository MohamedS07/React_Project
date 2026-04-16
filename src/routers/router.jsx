import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import mainRouters from "./mainRouters";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: localStorage.getItem('token') ? (
            <ProtectedRoute>
                <MainLayout />
            </ProtectedRoute>
        ) : <RegisterPage />,
        children: mainRouters
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/register",
        element: <RegisterPage />
    }
]);

export default router;
