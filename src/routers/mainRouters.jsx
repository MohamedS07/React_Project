import Login from "../pages/LoginPage"
import DashBoardPage from "../pages/DashBoardPage"
import SearchStocksPage from "../pages/SearchStocksPage"
import SideBar from "../components/dashboard/Sidebar"

const mainRouter = {
    path: "/",
    element:<SideBar/>,
    children: [
        {
        path: "/dashboard",
        element: <DashBoardPage/>
        },
        {
            path: "/stock",
            element:<SearchStocksPage/>
        }
    ]
}

export default mainRouter

