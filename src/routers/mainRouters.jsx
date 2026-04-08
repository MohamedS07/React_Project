import DashBoardPage from '../pages/DashBoardPage';
import SearchStocksPage from '../pages/SearchStocksPage';
import MyPortfolioPage from '../pages/MyPortfolioPage';
import ProfilePage from '../pages/ProfilePage';
import AIInsightsPage from '../pages/AIInsightsPage';
import WatchlistPage from '../pages/WatchlistPage';

const mainRouters = [
    {
        path:"/",
        element: <DashBoardPage />
    },
    {
        path: "search",
        element: <SearchStocksPage />
    },
    {
        path: "watchlist",
        element: <WatchlistPage />
    },
    {
        path: "portfolio",
        element: <MyPortfolioPage />
    },
    {
        path: "ai-insights",
        element: <AIInsightsPage/>
    }
    ,
    {
        path: "profile",
        element: <ProfilePage />
    }
];

export default mainRouters;
