import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Red Rose', cursive;
  }
  body{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #636e72;
    padding: 10px;
  }

  h1, h2, h3, h4{
    color: #636e72;
  }
  
`;