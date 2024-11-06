// Header.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    setCurrentUser(user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    navigate('/signin');
  };

  return (
    <header>
      <h1>Bienvenue au Tableau de Bord</h1>
      {currentUser ? (
        <div className='lmj-souhait'>
          <span>Bienvenue, {currentUser.email}!</span>
          <button onClick={handleLogout}>Se déconnecter</button>
        </div>
      ) : (
        <div className='lmj-conn'>
          <a href="/signin">Se connecter</a> | <a href="/signup">S'inscrire</a>
        </div> 
      )}
    </header>
  );
};

export default Header;
