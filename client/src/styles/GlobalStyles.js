import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.baseFontSize};
    background-color: ${({ theme }) => theme.colors.background.default};
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: 1.5;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  html {
    font-size: 100%;
  }
  
  @media (max-width: 768px) {
    html {
      font-size: 90%;
    }
  }
  
  @media (max-width: 480px) {
    html {
      font-size: 85%;
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.main};
    transition: color 0.3s ease;
  }
  
  a:hover {
    color: ${({ theme }) => theme.colors.primary.dark};
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyles;
