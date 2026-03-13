import DashBoardPage from '../pages/DashBoardPage';
import SearchStocksPage from '../pages/SearchStocksPage';
import MyPortfolioPage from '../pages/MyPortfolioPage';
import ProfilePage from '../pages/ProfilePage';

const mainRouters = [
    {
        index: true,
        element: <DashBoardPage />
    },
    {
        path: "search",
        element: <SearchStocksPage />
    },
    {
        path: "portfolio",
        element: <MyPortfolioPage />
    },
    {
        path: "profile",
        element: <ProfilePage />
    }
];

export default mainRouters;
