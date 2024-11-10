import React from "react";
import styled from "styled-components";

const PriceBreakContainer = styled.div`
  display: flex;
  max-width: 220px;
  justify-content: space-between;
  align-items: center;
  padding: 4px 12px;
  border-bottom: 0.5px solid ${({ theme }) => theme.palette.grey[300]};

  &:first-child {
    border-top: 0.5px solid ${({ theme }) => theme.palette.grey[300]};
  }
`;

const PriceBreakText = styled.span`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-weight: bold;
  font-size: 0.875rem;
`;

const ListContainer = styled.div`
  padding: 0;
`;

function PriceBreaksSection({ data }) {
  return (
    <ListContainer>
      {Object.entries(data.article.price_breaks)?.map(
        ([quantity, price], index) => (
          <PriceBreakContainer key={index}>
            <PriceBreakText>{`ex ${quantity} ${data.article.unit}`}</PriceBreakText>
            <PriceBreakText>{`${price.toFixed(2)} ${data.article.currency}/${data.article.unit}`}</PriceBreakText>
          </PriceBreakContainer>
        )
      )}
    </ListContainer>
  );
}

export default PriceBreaksSection;
