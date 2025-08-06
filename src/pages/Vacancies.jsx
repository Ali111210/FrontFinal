import React from 'react';
import '../style/Vacancies.css';

const Vacancies = () => {
  return (
    <div className="vacancies-section">
      <h2>Найдено 30 вакансий</h2>
      <div className="vacancy-card">
        <button className="vacancy-btn">Откликнуться</button>
        <button className="vacancy-btn">Связаться</button>
      </div>
      <div className="vacancy-card">
        <button className="vacancy-btn">Откликнуться</button>
        <button className="vacancy-btn">Связаться</button>
      </div>
      <div className="vacancy-card">
        <button className="vacancy-btn">Откликнуться</button>
        <button className="vacancy-btn">Связаться</button>
      </div>
      <div className="vacancy-card">
        <button className="vacancy-btn">Откликнуться</button>
        <button className="vacancy-btn">Связаться</button>
      </div>    
    </div>
  );
};

export default Vacancies;
