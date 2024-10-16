import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Login from './pages/Login';
import Home from './pages/Home';
import AdminPanel from './pages/AdminPanel';
import LibrarianPanel from './pages/LibrarianPanel';
import UserPanel from './pages/UserPanel';

const App = () => {
  return (
    <Router>
      <main className='flex flex-col min-h-screen'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<UserPanel />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/librarian" element={<LibrarianPanel />} />
          </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default App;