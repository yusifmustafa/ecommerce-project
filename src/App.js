import "./App.css";
import Card from "./components/Navbar/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Basket from "./components/Basket/Basket";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/basket" element={<Basket />} />
        <Route path="/" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
