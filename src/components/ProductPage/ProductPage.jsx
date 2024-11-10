import React, { useContext, useEffect, useRef } from "react";
import CardSection from "~components/CardSection/CardSection";
import styled from "styled-components";
import DescriptionSection from "~components/DescriptionSection/DescriptionSection";
import DataContext from "../../context/DataContext";
import DetailSection from "~components/DetailSection/DetailSection";
import ProductInfo from "~components/ProductInfo/ProductInfo";
import ProductImageGallery from "~components/ProductImageGallery/ProductImageGallery";

const ProductPageContainer = styled.div`
  width: 100%;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.grey[200]};
  padding: 24px;
  gap: 16px;
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const ContentWrapper = styled.div`
  display: flex;
  margin: 64px 32px;
  gap: 32px;
  width: 100%;
  max-width: 1600px;
  flex-wrap: wrap;
`;

const ProductImageWrapper = styled.div`
  flex: 1;
  max-width: 600px;
`;

const ProductInfoWrapper = styled.div`
  flex: 2;
`;

function ProductPage() {
  const { data, setQuantityEditorVisible } = useContext(DataContext);
  const quantityEditorRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (quantityEditorRef.current) {
        const rect = quantityEditorRef.current.getBoundingClientRect();
        setQuantityEditorVisible(
          rect.top >= 0 && rect.bottom <= window.innerHeight
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setQuantityEditorVisible]);

  return (
    <ProductPageContainer>
      <TopContainer>
        <ContentWrapper>
          <ProductImageWrapper>
            <ProductImageGallery data={data} />
          </ProductImageWrapper>
          <ProductInfoWrapper>
            <ProductInfo
              article={data.article}
              quantityEditorRef={quantityEditorRef}
            />
          </ProductInfoWrapper>
        </ContentWrapper>
      </TopContainer>
      <BottomContainer>
        <DescriptionSection data={data} />
        <CardWrapper>
          <CardSection title="Details">
            <DetailSection
              title="Features"
              data={data.article.features}
              type="features"
            />
            <DetailSection
              title="Attachments"
              data={data.article.attachments}
              type="attachments"
            />
            <DetailSection
              title="Keywords"
              data={data.article.keywords}
              type="keywords"
            />
          </CardSection>
          <CardSection title="Pricing & Shipping">
            <DetailSection data={data} type="pricing_details" />
            <DetailSection title="Price breaks" data={data} type="price_breaks" />
          </CardSection>
        </CardWrapper>
      </BottomContainer>
    </ProductPageContainer>
  );
}

export default ProductPage;
