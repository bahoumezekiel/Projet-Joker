// Mint.js
import React from 'react';
import '../styles/TokenActions.css'; // Assurez-vous que le chemin est correct
import MintForm from '../components/MintForm';

function MintToken() {
  return (
    <div className='token-actions-container'>
      <div className='token-actions-header'>
        <h2>Émission de Token</h2>
      </div>
      <MintForm />
    </div>
  );
}

export default MintToken;
