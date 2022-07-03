import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import MainTheme from './container/MainTheme';
import WeatherBackground from './components/WeatherBackground';
import Settings from './components/Settings'
import Contact from './components/Contact';

export default function App() {
  return (
    <Router>
      <MainTheme>
        <Routes>
          <Route exact path= '/weather-app-by-nils' element={<WeatherBackground />} />
          <Route path= '/weather-app-by-nils/contact' element={<Contact />} />
          <Route path= '/weather-app-by-nils/settings' element={<Settings />} />
        </Routes> 
      </MainTheme>        
    </Router>
  );
}