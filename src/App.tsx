import * as React from 'react'
import Header from "./components/Header/Header";
import { Outlet } from 'react-router-dom';

import "./App.scss";
import ThemeProvider from "./contexts/ThemeContext";

export default function App() {

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