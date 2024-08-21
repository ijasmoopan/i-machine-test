import styled from "styled-components";
import ProductDetailsCard from "../../components/ProductDetailsCard";

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
  return (
    <Container>
      <CardWrapper>
        <h2>Product Details</h2>
        <ProductDetailsCard />
      </CardWrapper>
    </Container>
  );
};

export default ProductDetails;
