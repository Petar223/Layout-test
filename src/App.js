import React from "react";
import ErrorBoundary from "~components/ErrorBoundary/ErrorBoundary";
import { GlobalStyle } from "../src/utils/GlobalStyle";
import Root from "~components/Root/Root";
import ThemeProvider from "~components/ThemeProvider/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <GlobalStyle />
        <Root />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
