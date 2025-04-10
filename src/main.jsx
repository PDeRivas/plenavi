import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css'
import Home from './pages/home.jsx'

const routes = [
  {
    path: "/",
    element: <Home />,
  },
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
        <Routes>
        {
          routes.map(route => (
            <Route
            path={route.path}
            element={route.element}
            key={route.path}
            />))
        }
      </Routes>
    </Router>
  </StrictMode>,
)
