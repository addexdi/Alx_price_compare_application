// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import React from "react";
import Products from "./views/Products/Products";


function App() {
  return (
    <React.Fragment>
      <main className="main">
        <Products />
      </main>
    </React.Fragment>
  );
}

export default App;
