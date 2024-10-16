import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';
import LibrarianPanel from './pages/LibrarianPanel';
import UserPanel from './pages/UserPanel';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navigation />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/librarian" element={<LibrarianPanel />} />
            <Route path="/user" element={<UserPanel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;