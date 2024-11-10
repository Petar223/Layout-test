import React from "react";
import styled from "styled-components";

const DetailWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DotIcon = styled.span`
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-right: 8px;
  font-size: 24px;
  line-height: 1;
  display: inline-block;
`;

const DetailLabel = styled.span`
  color: ${({ theme }) => theme.palette.text.s};
  margin-right: 4px;
  font-size: 0.875rem;
`;

const DetailValue = styled.span`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-weight: bold;
  font-size: 0.875rem;
`;

function DetailItem({ label, value }) {
  return (
    <DetailWrapper>
      <DotIcon>•</DotIcon>
      <DetailLabel>{label}</DetailLabel>
      <DetailValue>{value}</DetailValue>
    </DetailWrapper>
  );
}

export default DetailItem;
