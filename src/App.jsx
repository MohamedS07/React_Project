import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashBoardPage from './pages/DashBoardPage'
import SearchStocksPage from './pages/SearchStocksPage'
import MyPortfolioPage from './pages/MyPortfolioPage'
import ProfilePage from './pages/ProfilePage'
import './App.css'
import "./Dashboard.css"
import { RouterProvider } from 'react-router-dom'
import router from './routers/router'

function App() {

  return (
    <>
      <DashBoardPage>
        
          <RouterProvider router={router}/>
        
      </DashBoardPage>
      
    </>
  )
}

export default App
