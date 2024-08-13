import React, { useEffect, useState } from 'react';
import './shared/styles/App.css';
import { getDataModal } from './service';

function App() {
  useEffect(() => {
    getDataModal();
  });

  return <div className="App"></div>;
}

export default App;
