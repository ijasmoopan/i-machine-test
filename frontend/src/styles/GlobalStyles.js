import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #ffffff;
    color: #333333
  }

  ul {
    list-style: none;
    display: flex;
    gap: 10px;
  }

  a {
    text-decoration: none;
    color: #007bff;
  }
`;

export default GlobalStyles;