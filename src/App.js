import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import PageLayout from './components/layout/PageLayout';
import Home from './components/pages/Home';
import Story from './components/pages/Story';
import Technology from './components/pages/Technology';
import Journal from './components/pages/Journal';
import About from './components/pages/About';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <PageLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </PageLayout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
