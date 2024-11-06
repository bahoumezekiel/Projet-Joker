import React from 'react';
import TokenStats from '../components/TokenStats';
import RecentTransactions from '../components/RecentTransactions';
import '../styles/Dashboard.css';

// Importez l'image
import acceuilImage from '../assets/acceuil.jpg';  
import TransactionImage from '../assets/Transaction.jpg'

function Dashboard() {
  return (
    <div className='dashboard-container'>
      <h1 className='dashboard-header'>Tableau de bord</h1>
      <div className='dashboard-content'>
        <TokenStats />
        <RecentTransactions />

        {/* Affichez l'image */}
        <div className='image-container'>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                <img src={acceuilImage} alt="Accueil" className='dashboard-image' width={300}  height={200}/>
            </a>
        </div>

        <div className='image-container'>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                <img src={TransactionImage} alt="Transaction" className='transaction recente' width={300}  height={200}/>
            </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
