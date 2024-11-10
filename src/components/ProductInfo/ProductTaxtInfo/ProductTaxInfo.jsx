import React from "react";
import styled from "styled-components";

const TaxInfo = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-top: 4px;
`;

function ProductTaxInfo({ vatPercent }) {
  return <TaxInfo>{`all prices incl. ${vatPercent}% taxes`}</TaxInfo>;
}

export default ProductTaxInfo;
