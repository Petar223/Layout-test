import React, { useState, useContext } from "react";
import styled from "styled-components";
import { TextField, Button } from "@mui/material";
import { Add } from "~components/Icons";
import DataContext from "../../context/DataContext";
import { useMediaQuery } from "@mui/material";

const AddIcon = styled(Add)`
  width: 25px;
  height: 25px;
`;

const QuantityEditorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const UnitText = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.palette.text.main};
  white-space: nowrap;
`;

const StyledButton = styled(Button)`
  &.MuiButton-root {
    text-transform: none;
    border-radius: 0;
    box-shadow: none;
    margin-left: 16px;
    display: flex;
    align-items: center;
  }
`;

const StyledTextField = styled(TextField)`
  & .MuiInputBase-root {
    max-width: 80px;
    text-align: center;
  }

  & .MuiInputBase-input {
    text-align: center;
    padding: 8px;
  }

  & .MuiOutlinedInput-notchedOutline {
    border-radius: 0;
    border-color: ${({ theme }) => theme.palette.grey[500]};
  }
`;

function QuantityEditor({ article }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(DataContext);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  const handleQuantityChange = (event) => {
    const value = Number(event.target.value);
    setQuantity(value >= 1 ? value : 1);
  };

  const handleAddToCartClick = () => {
    addToCart({ price: article.price, quantity });
  };

  return (
    <QuantityEditorContainer>
      <StyledTextField
        variant="outlined"
        size="small"
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        color="grey"
      />
      <UnitText>{article.unit}</UnitText>
      <StyledButton
        color="primary"
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleAddToCartClick}
      >
        {isSmallScreen ? "Add" : "Add to cart"}
      </StyledButton>
    </QuantityEditorContainer>
  );
}

export default QuantityEditor;
