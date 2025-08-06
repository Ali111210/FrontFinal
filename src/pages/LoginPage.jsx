import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'; 
import axios from 'axios';
import '../style/Login.css';
import workerImage from '../assets/worker-human2.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); 

  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await axios.post('http://localhost:3002/api/login', { email, password });
      alert('Сәтті кірдіңіз!');
      console.log(res.data);

      navigate('/home'); 
    } catch (err) {
      console.error(err.response ? err.response.data.error : err.message);
      setError('Құпиясөз немесе email қате!');
    }
  };

  return (
    <div className='login-root'>
      <div className='login-left'>
        <img src={workerImage} alt="Worker" className="worker-img" />
      </div>
      <div className='login-right'>
        <div className="form-box">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="input-wrapper">
              <FaUser className="input-icon" />
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <FaLock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"} 
                placeholder="Qupia Soz"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="password-icon"
                onClick={() => setShowPassword(prev => !prev)} 
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />} 
              </div>
            </div>
            <div className="forgot-row">
              <Link to="/forgot-password" className="forgot-password-link">
                Forgot Password?
              </Link>
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit" className='kiru-btn'>Kiru</button>
            <p className="nemese-text">Nemese</p>
          </form>
          <button className='register-btn'>
            <Link to="/register">Tirkelu</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
