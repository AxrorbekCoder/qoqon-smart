// src/App.js
import React, { useState } from 'react';
import LogoAnimation from './LogoAnimation';
import MainPage from './MainPage';

function App() {
  const [showMainPage, setShowMainPage] = useState(false);

  return (
    <div className="App">
      {!showMainPage && <LogoAnimation onComplete={() => setShowMainPage(true)} />}
      {showMainPage && <MainPage />}
    </div>
  );
}

export default App;
