import React from "react";
import { CardContent } from "@mui/material";
import styled from "styled-components";

const Card = styled.div`
  width: 500px;
  background-color: ${({ theme }) => theme.palette.common.white};
`;

const Title = styled.h6`
  color: ${({ theme }) => theme.palette.primary.main};
  text-transform: uppercase;
  font-weight: normal;
  margin: 0;
  font-size: 1rem;
  padding: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.palette.divider};
  margin: 0 16px;
`;

const Content = styled.div`
  height: 215px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

function CardSection({ title, children }) {
  return (
    <Card>
      <Title>{title}</Title>
      <Divider />
      <CardContent>
        <Content>{children}</Content>
      </CardContent>
    </Card>
  );
}

export default CardSection;
