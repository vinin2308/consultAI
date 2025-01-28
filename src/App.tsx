import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, FileText, Phone } from 'lucide-react';
import HomePage from './pages/HomePage';
import ExamForm from './pages/ExamForm';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exame" element={<ExamForm />} />
        <Route path="/contatos" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;