import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./containers/home";
import ProductsView from "./containers/productsView";
import AddProduct from "./containers/addProduct";
import ProductDetails from "./containers/productDetails";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addProduct">Add Product</Link>
          </li>
          <li>
            <Link to="/products">Product Details</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/products" element={<ProductsView />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
