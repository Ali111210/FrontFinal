import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaUser, FaSearch } from 'react-icons/fa'; 
import '../style/Header.css';

function Header() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Ищем по запросу:', searchQuery);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/'); 
    alert('Сіз жүйеден шықтыңыз!');
};

  const handleNavigateHome = () => {
    navigate('/home');  
  };

  const handleNavigateProfile = () => {
    navigate('/profile');  
  };

  return (
    <header className="header">
      <div className="logo" onClick={handleNavigateHome}>Qyzmetker</div>

      <div className="header-center">
        <button className="home-btn" onClick={handleNavigateHome}>Basty bet</button>
      </div>

      <div className="header-right">
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            placeholder="Izdeu..."
            value={searchQuery}
            onChange={handleSearchChange}
          />

          <button type="submit">
            <FaSearch /> 
          </button>
        </form>


        <button className="profile-btn" onClick={handleNavigateProfile}>
          <FaUser /> 
        </button>

        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt />
        </button>
      </div>
    </header>
  );
}

export default Header;
