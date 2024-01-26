import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <main className="relative">
      <Header />       
      
      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </main>
  );
}

export default App;
