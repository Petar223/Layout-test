import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   body, #root {
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #333;
    width: 100%;
  }
 
  * {
    font-family: Arial, sans-serif;
  }
  
`;

export { GlobalStyle };
