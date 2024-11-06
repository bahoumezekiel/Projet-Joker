// SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUp.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find((user) => user.email === email);
    
    if (userExists) {
      setError('Cet utilisateur existe déjà.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }

    users.push({ email, name, password });
    localStorage.setItem('users', JSON.stringify(users));

    setSuccess('Inscription réussie!');
    setError(null);
    setTimeout(() => {
      setSuccess(null);
    }, 3000); // Message d'alerte disparaît après 3 secondes
  };

  return (
    <div className="signup-container">
      <h2>PAGE D'INSCRIPTION</h2>
      <form onSubmit={handleSignUp}>
        <div className="input-group">
          <label>E-mail :</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            required
          />
        </div>
        <div className="input-group">
          <label style={{ color: 'red' }}>Nom & prénom :</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nom & prénom"
            required
          />
        </div>
        <div className="input-group">
          <label>Mot de passe :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            required
          />
        </div>
        <div className="input-group">
          <label>Confirmer le mot de passe :</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirmer le mot de passe"
            required
          />
        </div>
        <button type="submit">S'inscrire</button>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>
      <p>Déjà inscrit? <button onClick={() => navigate('/signin')}>Se connecter</button></p>
    </div>
  );
}

export default SignUp;
