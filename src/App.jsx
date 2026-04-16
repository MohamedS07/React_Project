import { RouterProvider } from 'react-router-dom'
import router from './routers/router'
import './App.css'
import "./Dashboard.css"
import './index.css'


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
