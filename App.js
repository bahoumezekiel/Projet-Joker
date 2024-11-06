import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header';
import SearchBar from './SearchBar';
import Dashboard from './Dashboard';
import MintToken from './MintToken';
import BurnToken from './BurnToken';
import Footer from './Footer';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ProtectedRoute from './ProtectedRoute'; // Import du composant de route protégée
import Acceuille from './Acceuille'

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Header />
        <div className='main-content'>
          <SearchBar />
          <div className='token-actions-container'>
            <div className='token-actions-header'>
            <Link to="/" className='token-action-button'>Acceuille</Link>
              <Link to="/" className='token-action-button'>Tableau de bord</Link>
              <Link to="/mint" className='token-action-button'>Émission de Token</Link>
              <Link to="/burn" className='token-action-button'>Destruction de Token</Link>
               
            </div>
            <div className='token-action-content'>
              <Routes>
                <Route path="/" element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />
                <Route path="/mint" element={
                  <ProtectedRoute>
                    <MintToken />
                  </ProtectedRoute>
                } />
                <Route path="/burn" element={
                  <ProtectedRoute>
                    <BurnToken />
                  </ProtectedRoute>
                } />

                <Route path="/Acceuille" element={
                  <ProtectedRoute>
                    <Acceuille/>
                  </ProtectedRoute>
                } />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
