import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  width: 300px;
  min-width: 200px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  cursor: pointer;
`;

export const CardContent = styled.div`
  padding: 16px;
`;

export const ProductName = styled.div`
  font-size: 20px;
  margin: 0 0 10px;
  color: #333;
  width: 100%;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
`;

const ProductPriceWrapper = styled.div`
  width: 100px;
  padding: 8px;
  border: 1px solid #ddd;
  color: black;
  display: flex;
  flex-direction: column;
`;

const PriceTag = styled.div``;

const ProductCard = ({ name, productId }) => {
  productId = 1;
  return (
    <Card>
      <Link to={`/products/${productId}`}>
        <CardContent>
          <ProductName>{name}</ProductName>
          <PriceContainer>
            <ProductPriceWrapper>
              <PriceTag>{`Purchase`}</PriceTag>
              <PriceTag>{`${200}`}</PriceTag>
            </ProductPriceWrapper>
            <ProductPriceWrapper>
              <PriceTag>{`Sales`}</PriceTag>
              <PriceTag>{`${100}`}</PriceTag>
            </ProductPriceWrapper>
          </PriceContainer>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductCard;
