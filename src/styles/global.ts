import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --background: #202024
    --black: #121214
    --red: #8B1E31
    --green: #015F43

    --green-light: #00875F

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #29292e
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // 16px - tamanho padrão
  html {
    @media(max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media(max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer
  }
`;

export default GlobalStyle;
