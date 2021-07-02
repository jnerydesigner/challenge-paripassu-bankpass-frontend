import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Red Rose', cursive;
  }
  h1{
    font-size: 20px;
  }
  body{
    width: 100%;
    height: 100%;
    justify-content: center;
    background-color: #000;
  }
`;