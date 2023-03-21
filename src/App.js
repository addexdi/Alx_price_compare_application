import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Componenet/home/home";
import MyDocument from "./Componenet/Doc/document";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/doc" element={<MyDocument />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
