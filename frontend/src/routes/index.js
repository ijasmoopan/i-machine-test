import { Route, Routes } from "react-router-dom";
import Layout from "../layout";

import Home from "../containers/home";
import AddProduct from "../containers/addProduct";
import ProductsView from "../containers/productsView";
import ProductDetails from "../containers/productDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/products" element={<ProductsView />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
