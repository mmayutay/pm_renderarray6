import React from 'react';
import logo from './logo.svg';
import './App.css';
import RenderArray from './RenderArray';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="table">
          <p>
            <RenderArray />
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
