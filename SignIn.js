// SignIn.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignIn.css';
function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.email === email && user.password === password);
    
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      setError(null);
      navigate('/dashboard');
    } else {
      setError('Email ou mot de passe incorrect.');
    }
  };

  return (
    <div className="signin-container">
      <h2>PAGE DE CONNEXION</h2>
      <form onSubmit={handleSignIn}>
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
          <label>Mot de passe :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            required
          />
        </div>
        <button type="submit">Se connecter</button>
        {error && <p className="error">{error}</p>}
      </form>
      <p>Vous n'avez pas de compte? <button onClick={() => navigate('/signup')}>S'inscrire</button></p>
    </div>
  );
}

export default SignIn;
