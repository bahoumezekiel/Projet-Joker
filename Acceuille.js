import React from 'react';
import '../styles/Acceuille.css';

function Accueil() {
  return (
    <main className="accueil">
      <section className="intro">
        <h2>Qu'est-ce que c'est ?</h2>
        <p>Notre tableau de bord vous permet de gérer vos tokens fongibles en toute simplicité. Émettez, détruisez et suivez vos tokens avec une interface intuitive.</p>
      </section>

      <section className="features">
        <h2>Fonctionnalités Clés</h2>
        <div className="feature-card">
          <h3>Émission de Tokens</h3>
          <p>Créez de nouveaux tokens fongibles en quelques clics.</p>
        </div>
        <div className="feature-card">
          <h3>Détruire des Tokens</h3>
          <p>Supprimez des tokens de la circulation facilement.</p>
        </div>
        <div className="feature-card">
          <h3>Suivi et Analyse</h3>
          <p>Consultez des graphiques et des rapports pour suivre vos tokens.</p>
        </div>
      </section>

      <section className="cta">
        <h2>Prêt à Commencer ?</h2>
        <a href="/signup" className="btn">Créez un Compte</a>
        <a href="/login" className="btn">Se Connecter</a>
      </section>
    </main>
  );
}

export default Accueil;
