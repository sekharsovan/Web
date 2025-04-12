import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-background: #FFFFFF;
    --color-text-primary: #1D1D1F;
    --color-text-secondary: #6E6E73;
    --color-accent: #0071E3;
    --color-accent-hover: #005BB5;
    --color-footer-bg: #F5F5F7;
    --color-border: rgba(0, 0, 0, 0.1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background-color: var(--color-background);
    color: var(--color-text-primary);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  a {
    color: var(--color-accent);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-accent-hover);
    }
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    max-width: 980px;
    margin: 0 auto;
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }
`;

export default GlobalStyles; 