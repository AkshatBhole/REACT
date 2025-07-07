import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/product" element={<h1>Product Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
        <Route path="/profile" element={<h1>Profile Page</h1>} />
      </Routes>
    </div>
  );
};

export default App;
