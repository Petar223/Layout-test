import React from "react";
import styled from "styled-components";
import { Chip } from "@mui/material";

const KeywordContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const chipStyle = {
  backgroundColor: (theme) => theme.palette.grey[400],
  color: (theme) => theme.palette.common.white,
  fontWeight: "bold",
  fontSize: "0.75rem",
  height: "25px",
};

function KeywordsList({ items }) {
  return (
    <KeywordContainer>
      {items?.map((keyword, index) => (
        <Chip
          key={index}
          label={keyword}
          variant="filled"
          color="default"
          sx={chipStyle}
        />
      ))}
    </KeywordContainer>
  );
}

export default KeywordsList;
