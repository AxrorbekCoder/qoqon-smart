// src/MainPage.js
import React, { useState } from 'react';
import { FaChalkboardUser, FaFlaskVial, FaUsersGear, FaScrewdriverWrench, FaCompassDrafting, FaBook, FaWrench, FaMapLocationDot, FaRoute } from 'react-icons/fa6';
import './MainPage.css'; // Добавьте файл стилей

const MainPage = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPassword = 'depo2'; // Установите здесь правильный пароль

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Неверный пароль. Пожалуйста, попробуйте снова.');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '30px' }}>
      {!isAuthenticated ? (
        <form onSubmit={handleSubmit}>
          <h2>Введите пароль для доступа</h2>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Пароль"
            required
            style={{ padding: '10px', fontSize: '16px' }}
          />
          <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', marginLeft: '10px' }}>
            Войти
          </button>
        </form>
      ) : (
        <div>
          <div className="card-container">
            <a href="https://tch-qoqon.uz/" className="smart-card">
              <FaChalkboardUser className="icon" />
              <div className="title">Дежурный по депо</div>
            </a>
            <a href="https://tch-qoqon.uz/labq/" className="smart-card">
              <FaFlaskVial className="icon" />
              <div className="title">Лаборатория</div>
            </a>
            <a href="#" className="smart-card">
              <FaUsersGear className="icon" />
              <div className="title">Нарядчик</div>
            </a>
            <a href="https://tch-qoqon.uz/remont/index.php" className="smart-card">
              <FaScrewdriverWrench className="icon" />
              <div className="title">Анализ ремонт</div>
            </a>
            <a href="https://tch-qoqon.uz/remont/index.php" className="smart-card">
              <FaCompassDrafting className="icon" />
              <div className="title">Расшифровка</div>
            </a>
            <a href="https://depouzbekistan.uz/dpx-lib/" className="smart-card">
              <FaBook className="icon" />
              <div className="title">E-NOTES</div>
            </a>
            <a href="https://airtable.com/login?continue=%2FappnEmfvh8SEv3ZwC%2FtblhA6YeJAScgxxkN%2Fviw2oViXqsRoI1zoZ%3Fblocks%3Dhide&redirectSource=liveapp" className="smart-card">
              <FaWrench className="icon" />
              <div className="title">Инструмент</div>
            </a>
            <a href="#" className="smart-card">
              <FaMapLocationDot className="icon" />
              <div className="title">E-MAP</div>
            </a>
            <a href="https://utysmpo.uzgps.uz/" className="smart-card">
              <FaRoute className="icon" />
              <div className="title">GPS</div>
            </a>

          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
