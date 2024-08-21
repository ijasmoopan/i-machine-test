import styled from "styled-components";
import { CardContent } from "./ProductCard";

const Card = styled.div`
  width: 300px;
  min-width: 200px;
  background-color: #fff;
`;

const StyledTable = styled.table`
`;

const StyledTRow = styled.tr``;

const StyledTData = styled.td``;

const ProductDetailsCard = () => {
  return (
    <Card>
      <CardContent>
        <StyledTable>
          <StyledTRow>
            <StyledTData>{'Name'}</StyledTData>
            <StyledTData>{'Product 1'}</StyledTData>
          </StyledTRow>
          <StyledTRow>
            <StyledTData>{'Purchase Price'}</StyledTData>
            <StyledTData>{'Product 1'}</StyledTData>
          </StyledTRow>
          <StyledTRow>
            <StyledTData>{'Sales Price'}</StyledTData>
            <StyledTData>{'Product 1'}</StyledTData>
          </StyledTRow>
          <StyledTRow>
            <StyledTData>{'Profit'}</StyledTData>
            <StyledTData>{'Product 1'}</StyledTData>
          </StyledTRow>
        </StyledTable>
      </CardContent>
    </Card>
  );
};

export default ProductDetailsCard;