import React from "react";
import Header from "../Header/Header";
import { Outlet } from 'react-router-dom';

import './App.scss'
import ThemeProvider from "../Contexts/ThemeContext";

function App() {

  return (
    <ThemeProvider>
      <div className="page">
        <Header />
        <Outlet
        />
      </div>
    </ThemeProvider>
    
  );
}

export default App;
