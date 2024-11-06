import React, { useState } from 'react';
import { web3, contract } from './web3';

function BurnForm() {
  const [amount, setAmount] = useState('');

  const handleBurn = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    await contract.methods.burnTokens(web3.utils.toWei(amount, 'ether')).send({ from: accounts[0] });
  };

  return (
    <form onSubmit={handleBurn}>
      <input type="number" placeholder="Quantité à détruire" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <button type="submit">Détruire Token</button>
    </form>
  );
}

export default BurnForm;
