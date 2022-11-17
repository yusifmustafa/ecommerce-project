import "./App.css";
import Card from "./components/Card/Card";
import { Route, Routes } from "react-router-dom";
import Basket from "./components/Basket/Basket";
import ItemInfo from "./components/ItemInfo/ItemInfo";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/card" element={<Card />} />
        <Route path="/itemInfo" element={<ItemInfo />} />
        <Route path="/itemInfo/:id" element={<ItemInfo />} />
      </Routes>
    </div>
  );
}

export default App;
