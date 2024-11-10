import React from "react";
import Header from "~components/Header/Header";
import { ContextProvider } from "../../context/DataContext";
import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  margin-top: 60px;
`;

function Layout({ children }) {
  return (
    <ContextProvider>
      <Header />
      <ContentContainer>{children}</ContentContainer>
    </ContextProvider>
  );
}
export default Layout;
