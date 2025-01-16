import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import WeatherApp from './Components/WeatherApp.tsx'
import HomeButton from './Components/homebutton.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
    <HomeButton /> 
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/weather" element={<WeatherApp />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
  