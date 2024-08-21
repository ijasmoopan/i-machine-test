import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Styled components
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: normal;
  font-size: medium;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 300px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  &:hover {
    background-color: #0056b3;
  }
`;

const AddProductForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [salesPrice, setSalesPrice] = useState();
  const [profit, setProfit] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (purchasePrice && salesPrice) {
      setProfit(salesPrice - purchasePrice);
    } else {
      setProfit("");
    }
  }, [purchasePrice, salesPrice]);

  const formValidate = () => {
    let newError = "";
    if (!name) {
      newError = "Name is required!";
    } else if (!purchasePrice) {
      newError = "Purchase price is required!";
    } else if (!salesPrice) {
      newError = "Sales price is required!";
    }
    return newError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = formValidate();

    if (validationError) {
      setError(validationError);
    } else {
      onSubmit({ name, salesPrice, purchasePrice, profit });
      setName("");
      setPurchasePrice("");
      setSalesPrice("");
      setProfit("");
      setError("");
    }
  };

  return (
    <FormContainer>
      <h2>Add Products</h2>
      <Form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="name">Product Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Enter the name of the product"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormField>
        <FormField>
          <Label htmlFor="purchasePrice">Purchase Price</Label>
          <Input
            type="number"
            id="purchasePrice"
            name="purchasePrice"
            placeholder="Enter the purchase price of the product"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(e.target.value)}
          />
        </FormField>
        <FormField>
          <Label htmlFor="salesPrice">Sales Price</Label>
          <Input
            type="number"
            id="salesPrice"
            name="salesPrice"
            placeholder="Enter the sales price of the product"
            value={salesPrice}
            onChange={(e) => setSalesPrice(e.target.value)}
          />
        </FormField>
        <FormField>
          <Label htmlFor="profit">Profit</Label>
          <Input
            type="number"
            id="profit"
            name="profit"
            placeholder="Profit calculator"
            value={profit}
            disabled
          />
        </FormField>
        {error && <span style={{ color: "red" }}>{error}</span>}
        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default AddProductForm;
