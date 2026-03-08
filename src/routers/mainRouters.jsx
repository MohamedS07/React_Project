import Login from "../pages/LoginPage"
import MainLayout from "../layout/MainLayout"

const mainRouter = {
    path: "/",
    element:<MainLayout/>,
    children: [
        {
        path: "/login",
        element: <LoginPage/>
        }
    ]
}

export default mainRouter

