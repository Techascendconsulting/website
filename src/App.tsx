import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ConsultingServices from './pages/ConsultingServices';
import TalentDevelopment from './pages/TalentDevelopment';
import WorkExperience from './pages/WorkExperience';
import SuccessStories from './pages/SuccessStories';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import ApplyNow from './pages/ApplyNow';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consulting" element={<ConsultingServices />} />
          <Route path="/talent-development" element={<TalentDevelopment />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<ApplyNow />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;