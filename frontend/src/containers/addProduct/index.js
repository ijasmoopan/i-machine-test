import styled from "styled-components";
import AddProductForm from "../../components/AddProductForm";
import { addProduct } from "../../services/productService";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  justify-content: center;
`;

const AddProduct = () => {
  const handleSubmit = ({ name, salesPrice, purchasePrice, profit }) => {
    addProduct({
      name,
      salesPrice,
      purchasePrice,
      profit,
    })
      .then((res) => {
        if (res.data?.product) {
          toast.success("Product added successfully!");
        }
      })
      .catch((error) => {
        toast.error("Something went wrong!");
      });
  };

  return (
    <>
      <Container>
        <AddProductForm onSubmit={handleSubmit} />
      </Container>
      <ToastContainer />
    </>
  );
};

export default AddProduct;
