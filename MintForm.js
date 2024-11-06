import React, { useState } from 'react';
import { web3, contract } from './web3';
import '../styles/TokenActions.css';  

function MintForm() {
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');


  const handleMint = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    await contract.methods.mintTokens(accounts[0], web3.utils.toWei(amount, 'ether')).send({ from: accounts[0] });
  };

  return (
    <form onSubmit={handleMint} className="token-action-form">
      <div className="token-action-group">
        <label htmlFor="name">Nom du token :</label>
        <input type="text" id="name" placeholder="Nom du token" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="token-action-group">
        <label htmlFor="symbol">Symbole du token :</label>
        <input type="text" id="symbol" placeholder="Symbole du token" value={symbol} onChange={(e) => setSymbol(e.target.value)} required />
      </div>
      <div className="token-action-group">
        <label htmlFor="amount">Quantité :</label>
        <input type="number" id="amount" placeholder="Quantité" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      </div>
      <div className="token-action-group">
        <label htmlFor="symbol">Description du token :</label>
        <input type="text" id="symbol" placeholder="Symbole du token" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <button type="submit">Émettre Token</button>
    </form>
  );
}

export default MintForm;
