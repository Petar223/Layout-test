import React from "react";
import styled from "styled-components";
import { Discount as DiscountSVG } from "~components/Icons";

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`;

const Price = styled.span`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.palette.grey[800]};
`;

const ShippingCost = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

const DiscountIcon = styled(DiscountSVG)`
  width: 22px;
  height: 22px;
  fill: ${({ theme }) => theme.palette.text.secondary};
`;

function ProductPrice({ price, currency, transportCosts }) {
  return (
    <PriceContainer>
      <Price>{`${price.toFixed(2)} ${currency}`}</Price>
      <ShippingCost>{`+ ${transportCosts.toFixed(2)} ${currency} shipping`}</ShippingCost>
      <DiscountIcon />
    </PriceContainer>
  );
}

export default ProductPrice;
