import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:productId" element={<Product />} />
        <Route path="/colecoes" element={<Collection />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pedidos" element={<Orders />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
