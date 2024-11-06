import React, { useState } from 'react';
import '../styles/SearchBar.css'
const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour la recherche (peut-être un appel API ou un filtre)
    console.log('Recherche pour :', query);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Rechercher..."
      />
      <button type="submit">🔍</button>
    </form>
  );
};

export default SearchBar;
