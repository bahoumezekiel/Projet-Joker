import React from 'react';
import '../styles/Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Projet Joker. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
