import DashBoardPage from '../pages/DashBoardPage';
import SearchStocksPage from '../pages/SearchStocksPage';
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
        path: "profile",
        element: <ProfilePage />
    }
];

export default mainRouters;
