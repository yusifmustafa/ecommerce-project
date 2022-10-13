import "./App.css";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Basket from "./components/Basket/Basket";
import ItemInfo from "./components/ItemInfo/ItemInfo";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/basket" element={<Basket />} />
        <Route path="/" element={<Card />} />
        <Route path="/itemInfo" element={<ItemInfo />} />
        <Route path="/itemInfo/:id" element={<ItemInfo />} />
      </Routes>
    </div>
  );
}

export default App;
