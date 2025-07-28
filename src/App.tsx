import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import EnrollmentForm from './pages/EnrollmentForm';
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 overflow-x-hidden">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/enroll" element={<EnrollmentForm />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;