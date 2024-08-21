import styled from "styled-components";
import ApplicationForm from "../../components/ApplicationForm";

const Container = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  justify-content: center;
`;

const AddProduct = () => {
  return (
    <Container>
      <ApplicationForm />
    </Container>
  );
};

export default AddProduct;
