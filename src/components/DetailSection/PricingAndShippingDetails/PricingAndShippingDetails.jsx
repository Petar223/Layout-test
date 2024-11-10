import React from "react";
import styled from "styled-components";
import DetailItem from "./DetailItem/DetailItem";

const ListContainer = styled.div`
  padding: 0;
`;

function PricingAndShippingDetails({ data }) {
  return (
    <ListContainer>
      <DetailItem
        label="Minimum order:"
        value={`${data.article.minimum_order_quantity} ${data.article.unit}`}
      />
      <DetailItem
        label="Shipping:"
        value={`${data.article.transport_costs.toFixed(2)} ${data.article.currency}`}
      />
      <DetailItem
        label="Delivery:"
        value={`${data.article.delivery_time} days`}
      />
    </ListContainer>
  );
}

export default PricingAndShippingDetails;
