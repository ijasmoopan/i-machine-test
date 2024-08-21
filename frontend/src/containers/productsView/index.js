import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "../../components/ProductCard";
import { getProducts } from "../../services/productService";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;

const ProductsView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res.data?.products))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      <h2>Products</h2>
      <ProductsWrapper>
        {products.map((product, idx) => (
          <ProductCard
            key={idx}
            productId={product.productId}
            name={product.name}
            salesPrice={product.salesPrice}
            purchasePrice={product.purchasePrice}
          />
        ))}
      </ProductsWrapper>
    </Container>
  );
};

export default ProductsView;
