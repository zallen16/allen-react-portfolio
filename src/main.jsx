import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from './pages/AboutPage';
import Error from './pages/ErrorPage';
import Contact from './pages/ContactPage';
import Portfolio from './pages/PortfolioPage';

const router = createBrowserRouter([
  {
    path: '/'
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
