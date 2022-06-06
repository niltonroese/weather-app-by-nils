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
          <Route exact path= '/' element={<WeatherBackground />} />
          <Route path= '/contact' element={<Contact />} />
          <Route path= '/settings' element={<Settings />} />
        </Routes> 
      </MainTheme>        
    </Router>
  );
}