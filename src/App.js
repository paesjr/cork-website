import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopNav from "./components/TopNav";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Products from "./pages/Products.jsx";
import Calculator from "./pages/Calculator.jsx";
import Quote from "./pages/Quote.jsx";
import Blog from "./pages/Blog";
import Store from "./pages/Store";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Quote" element={<Quote />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Store" element={<Store />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
