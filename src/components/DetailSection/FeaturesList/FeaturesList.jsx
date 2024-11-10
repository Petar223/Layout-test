import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

const ListContainer = styled.div`
  padding: 0;
`;

const FeatureWrapper = styled.div`
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

const BoldText = styled.strong``;

function FeaturesList({ items }) {
  return (
    <ListContainer>
      {Object.entries(items)?.map(([key, value], index) => (
        <FeatureWrapper key={index}>
          <DotIcon>•</DotIcon>
          <Typography variant="body2">
            {key}: <BoldText>{value}</BoldText>
          </Typography>
        </FeatureWrapper>
      ))}
    </ListContainer>
  );
}

export default FeaturesList;
