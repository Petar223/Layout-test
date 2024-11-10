import React from "react";
import styled from "styled-components";
import AttachmentList from "~components/DetailSection/AttachmentList/AttachmentList";
import KeywordsList from "~components/DetailSection/KeywordsList/KeywordsList";
import FeaturesList from "~components/DetailSection/FeaturesList/FeaturesList";
import PriceBreaksSection from "~components/DetailSection/PriceBreaksSection/PriceBreaksSection";
import PricingAndShippingDetails from "~components/DetailSection/PricingAndShippingDetails/PricingAndShippingDetails";

const Title = styled.div`
  font-size: 13px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: 8px;
`;
const SectionWrapper = styled.div`
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

function DetailSection({ title, data, type }) {
  let content;

  switch (type) {
    case "pricing_details":
      content = <PricingAndShippingDetails data={data} />;
      break;
    case "price_breaks":
      content = <PriceBreaksSection data={data} />;
      break;
    case "features":
      content = <FeaturesList items={data} />;
      break;
    case "attachments":
      content = <AttachmentList items={data} />;
      break;
    case "keywords":
      content = <KeywordsList items={data} />;
      break;
    case "price_breaks":
      content = <PriceBreaksSection data={data} />;
    case "pricing":
      content = <PricingAndShippingDetails data={data} />;
      break;
    default:
      content = null;
  }

  return (
    <SectionWrapper>
      <Title>{title}</Title>
      {content}
    </SectionWrapper>
  );
}

export default DetailSection;
