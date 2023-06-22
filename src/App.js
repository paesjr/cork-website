import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopNav from "./components/TopNav";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Bodyboards from "./pages/Bodyboards.jsx";
import Calculator from "./pages/Calculator.jsx";
import Quote from "./pages/Quote.jsx";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import PostList from "./components/PostList";
import Checkout from "./pages/cart/checkout";

const App = () => {
  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
          <TopNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Bodyboards" element={<Bodyboards />} />
            <Route path="/Calculator" element={<Calculator />} />
            <Route path="/Quote" element={<Quote />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Blog" element={<PostList />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
};

export default App;
