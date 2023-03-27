import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// import Home from "./Componenet/Pages/Home/index";
import Products from "./Pages/Products/Products"
import Navigation from "./Components/Navigation/Navigation";
 

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        {/* <Route path="/" element={<Home /> } /> */}
        <Route path="/product" element={<Products />  } />
      </Routes>
    </BrowserRouter>
  );
} 

export default App;
