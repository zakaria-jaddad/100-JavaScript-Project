import NavApp from "./components/NavApp";
import Cart from "./Pages/Cart";
import Products from "./Pages/Products";
import { Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <>
      <NavApp />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/card" element={<Cart />} />
      </Routes>

    </>
  )
}