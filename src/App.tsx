import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import Industries from './pages/Industries';
import Careers from './pages/Careers';
import TrainingPathway from './pages/TrainingPathway';
import About from './pages/About';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL || '/website/'}>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* New structure */}
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/training-pathway" element={<TrainingPathway />} />
          <Route path="/about" element={<About />} />

          {/* Legacy routes kept for compatibility */}
          <Route path="/consulting" element={<ConsultingServices />} />
          <Route path="/talent-development" element={<TalentDevelopment />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/success-stories" element={<Navigate to="/case-studies" replace />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<ApplyNow />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;