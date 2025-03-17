import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen p-6">
        {/* Navbar */}
        <nav className="flex justify-between items-center bg-white p-4 shadow-md">
          <Link to="/" className="text-xl font-bold">Shop</Link>
          <Link to="/cart" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Cart
          </Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
