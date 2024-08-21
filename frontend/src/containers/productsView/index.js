import React from "react";
import styled from "styled-components";
import ProductCard from "../../components/ProductCard";

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
  const products = [
    "Product 1",
    "Product 2",
    "Product 3",
    "Product 4",
    "Product 5",
  ];
  return (
    <Container>
      <h2>Products</h2>
      <ProductsWrapper>
        {products.map((product, idx) => (
          <ProductCard key={idx} name={product} />
        ))}
      </ProductsWrapper>
    </Container>
  );
};

export default ProductsView;
