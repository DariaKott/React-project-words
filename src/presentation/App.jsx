import React from 'react';
import '../assets/global.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TrainingPage } from './pages/TrainingPage';
import { HowToLearnPage } from './pages/HoToLearnPage';

function App() {
  return (
    <Router>
      <div className="app_wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/how-to-learn" element={<HowToLearnPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export { App };
