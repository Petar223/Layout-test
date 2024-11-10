import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.palette.grey[800]};
  font-weight: normal;
  margin: 0;
  width: 400px;
`;

const SupplierInfo = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

const SupplierLink = styled.a`
  color: ${({ theme }) => theme.palette.link[400]};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function ProductTitle({ title, supplierName, supplierLink }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <SupplierInfo>
        by{" "}
        <SupplierLink
          href={supplierLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {supplierName}
        </SupplierLink>
      </SupplierInfo>
    </Wrapper>
  );
}

export default ProductTitle;
