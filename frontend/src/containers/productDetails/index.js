import styled from "styled-components";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { useEffect, useState } from "react";
import { getProductDetailsById } from "../../services/productService";
import { useParams } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  padding: 20px;
`;

const ProductDetails = () => {
  const { id } = useParams();

  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    getProductDetailsById(id)
      .then((res) => setProductDetails(res.data?.product))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <Container>
      <CardWrapper>
        <h2>Product Details</h2>
        <ProductDetailsCard productDetails={productDetails} />
      </CardWrapper>
    </Container>
  );
};

export default ProductDetails;
