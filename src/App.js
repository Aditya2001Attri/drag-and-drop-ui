import React from 'react';
import Canvas from './Canvas';
import './App.css';

function App() {
  const handleClick = () => {
    // Handle the button click if needed
  };

  return (
    <div className="App">
      <header className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button 
          onClick={handleClick} 
          className="navbar-brand" 
          style={{ background: 'none', border: 'none', color: 'white', textDecoration: 'underline', cursor: 'pointer' }}
        >
          Drag-and-Drop UI
        </button>
      </header>
      <Canvas />
      <footer className="footer bg-dark text-white text-center py-3">
        <p>© 2024 Drag-and-Drop UI. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
