import React from "react";
import styled from "styled-components";
import ProductTitle from "~components/ProductInfo/ProductTitle/ProductTitle";
import ProductRating from "~components/ProductInfo/ProductRating/ProductRating";
import ProductPrice from "~components/ProductInfo/ProductPrice/ProductPrice";
import ProductTaxInfo from "~components/ProductInfo/ProductTaxtInfo/ProductTaxInfo";
import QuantityEditor from "~components/QuantityEditor/QuantityEditor";

const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-width: 400px;
`;

const ProductInfoWrapper = styled.div`
  padding: 0;
  width: 100%;
`;

const QuantityEditorContainer = styled.div`
  margin: 0;
  padding: 0;
`;

function ProductInfo({ article, quantityEditorRef }) {
  return (
    <ProductInfoContainer>
      <ProductInfoWrapper>
        <ProductTitle
          title={article.title}
          supplierName={article.supplier_name}
          supplierLink={article.supplier_link}
        />
        <ProductRating rating={article.stars} />
        <ProductPrice
          price={article.price}
          currency={article.currency}
          transportCosts={article.transport_costs}
        />
        <ProductTaxInfo vatPercent={article.vat_percent} />
      </ProductInfoWrapper>
      <QuantityEditorContainer ref={quantityEditorRef}>
        <QuantityEditor article={article} />
      </QuantityEditorContainer>
    </ProductInfoContainer>
  );
}

export default ProductInfo;
