import Web3 from 'web3';

 
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; 

// Configuration de Web3
const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');

 
const contractABI = [
  //  pour mettre mon ABI
];

// Création de l'instance du contrat
const contract = new web3.eth.Contract(contractABI, contractAddress);

export { web3, contract };
