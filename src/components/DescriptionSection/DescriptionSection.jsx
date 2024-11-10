import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "@mui/material";

const DescriptionContainer = styled.div`
  max-width: 1016px;
`;

const DescriptionTitle = styled.h6`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: normal;
  text-transform: uppercase;
  margin: 0;
  font-size: 1rem;
`;

const DescriptionText = styled.p`
  color: ${({ theme }) => theme.palette.text.primary};
  line-height: 1.3;
  margin: 8px 0 16px 0;
`;

function DescriptionSection({ data }) {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <DescriptionContainer>
      <DescriptionTitle>Description</DescriptionTitle>
      <DescriptionText>
        {isSmallScreen
          ? data.article.description_short
          : data.article.description_long}
      </DescriptionText>
    </DescriptionContainer>
  );
}

export default DescriptionSection;
