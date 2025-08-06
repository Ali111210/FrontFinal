import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/Profile.css';
import { FaEdit, FaCamera, FaArrowLeft } from 'react-icons/fa';

function Profile() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('http://localhost:3002//api/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, 
          },
        });
        setUsername(response.data.username);
        setEmail(response.data.email);
        setCity(response.data.city);
        setBio(response.data.bio);
        setProfilePicture(response.data.profile_picture); 
      } catch (error) {
        console.error('Ошибка получения данных профиля:', error);
      }
    };

    fetchProfileData();
  }, []);

  const handleSave = async () => {
    const updatedProfile = { username, email, city, bio, profile_picture: profilePicture };
    try {
      const response = await axios.put('http://localhost:3002//api/profile', updatedProfile, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      console.log('Профиль обновлен:', response.data);
      navigate('/home'); 
    } catch (error) {
      console.error('Ошибка сохранения профиля:', error);
    }
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  const handleNavigateBack = () => {
    navigate('/home');
  };

  return (
    <div className="profile-container">
      <div className="back-icon" onClick={handleNavigateBack}>
        <FaArrowLeft />
      </div>

      <div className="profile-header">
        <h2>Profile</h2>
      </div>

      <div className="profile-info">
        <div className="profile-picture">
          <img
            src={profilePicture || '/default-avatar.png'}
            alt="Profile"
            className="profile-avatar"
          />
          <label htmlFor="profile-picture">
            <FaCamera className="camera-icon" />
          </label>
          <input
            type="file"
            id="profile-picture"
            style={{ display: 'none' }}
            onChange={handleProfilePictureChange}
          />
        </div>

        <div className="profile-field">
          <label>Nickname</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="profile-field">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="profile-field">
          <label>Qala</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className="profile-field">
          <label>Oziniz Turaly</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Расскажите о себе..."
          />
        </div>

        <button className="save-btn" onClick={handleSave}>Сохранить</button>
      </div>
    </div>
  );
}

export default Profile;
