// Burn.js
import React from 'react';
import '../styles/TokenActions.css'; // Assurez-vous que le chemin est correct
import BurnForm from '../components/BurnForm';

function BurnToken() {
  return (
    <div className='token-actions-container'>
      <div className='token-actions-header'>
        <h2>Destruction de Token</h2>
      </div>
      <BurnForm />
    </div>
  );
}

export default BurnToken;
