import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import App from './App'
import HomePage from './pages/homePage/HomePage'
import CategoryPage from './pages/categoryPage/CategoryPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/homepage' element={<HomePage />} />
      <Route path='/category' element={<CategoryPage />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
