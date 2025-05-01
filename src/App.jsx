import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Product from "./Procuct/Product";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
};

export default App;
