import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/Register.css';
import workerImage from '../assets/worker-human2.png'; 


export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  let navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password ) {
      setError('Барлық өрістерді толтырыңыз');
      return;
    }

    try {
      const res = await axios.post('http://localhost:3002/api/register', {
        email, password
      });
      alert('Тіркелу сәтті өтті!');
      navigate('/'); 
    } catch (err) {
      console.log(err.message);
      setError('Қолданушыны тіркеу кезінде қате пайда болды');
    }
  };

  return (
     <div className='register-root'>
      <div className='register-left'>
        <img src={workerImage} alt="Worker" className="worker-img" />
        <div className="worker-shadow"></div>
      </div>
      <div className='register-right'>
        <div className="register-container">
          <h2>Тіркелу</h2>
          <form onSubmit={handleRegister}>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
           
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error">{error}</p>}
            <button type="submit">Тіркелу</button>
          </form>
          <p>Аккаунтыңыз бар ма? <Link to="/">Кіру</Link></p>
        </div>
      </div>
    </div>
  );
}
