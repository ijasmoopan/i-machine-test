import styled from "styled-components";
import { CardContent } from "./ProductCard";

const Card = styled.div`
  width: 300px;
  min-width: 200px;
  background-color: #fff;
`;

const StyledTable = styled.table``;

const StyledTRow = styled.tr``;

const StyledTData = styled.td`
  padding: 7px 5px;
`;

const ProductDetailsCard = ({ productDetails }) => {
  return (
    <Card>
      <CardContent>
        <StyledTable>
          <StyledTRow>
            <StyledTData>{"Name"}</StyledTData>
            <StyledTData>{productDetails.name}</StyledTData>
          </StyledTRow>
          <StyledTRow>
            <StyledTData>{"Purchase Price"}</StyledTData>
            <StyledTData>{productDetails.purchasePrice}</StyledTData>
          </StyledTRow>
          <StyledTRow>
            <StyledTData>{"Sales Price"}</StyledTData>
            <StyledTData>{productDetails.salesPrice}</StyledTData>
          </StyledTRow>
          <StyledTRow>
            <StyledTData>{"Profit"}</StyledTData>
            <StyledTData>{productDetails.profit?.profit}</StyledTData>
          </StyledTRow>
        </StyledTable>
      </CardContent>
    </Card>
  );
};

export default ProductDetailsCard;
