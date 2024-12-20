import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pretendard";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2111@1.0/Pretendard-Regular.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Pretendard", sans-serif;
  }

  body {
    background-color: ${(props) => props.theme.colors.primaryBackground};
    color: ${(props) => props.theme.colors.primaryBlack};
  }
`;

export default GlobalStyle;
