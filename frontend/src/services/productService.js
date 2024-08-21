import { get, post } from "./apiService";

export const getProducts = () => get("/products");

export const getProductDetailsById = (id) => get(`/productDetails/${id}`);

export const addProduct = (data) => post("/addProduct", data);
