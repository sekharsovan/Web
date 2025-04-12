import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-background: #FFFFFF;
    --color-background-alt: #F5F5F7;
    --color-text-primary: #1D1D1F;
    --color-text-secondary: #6E6E73;
    --color-accent: #0071E3;
    --color-border: rgba(0, 0, 0, 0.1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Arial, sans-serif;
    background: var(--color-background);
    color: var(--color-text-primary);
    line-height: 1.47059;
    font-weight: 400;
    letter-spacing: -0.022em;
    -webkit-font-smoothing: antialiased;
  }

  h1 {
    font-size: 56px;
    font-weight: 600;
    line-height: 1.07143;
    letter-spacing: -0.005em;
  }

  h2 {
    font-size: 40px;
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: 0;
  }

  h3 {
    font-size: 28px;
    font-weight: 600;
    line-height: 1.14286;
    letter-spacing: 0.007em;
  }

  p {
    font-size: 17px;
    line-height: 1.47059;
    font-weight: 400;
    letter-spacing: -0.022em;
  }

  a {
    color: var(--color-accent);
    text-decoration: none;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }

  button {
    font-family: inherit;
    border: none;
    background: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  section {
    padding: 80px 0;
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 40px;
    }

    h2 {
      font-size: 32px;
    }

    h3 {
      font-size: 24px;
    }

    section {
      padding: 60px 20px;
    }
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--color-background);
`;

const MainContent = styled.main`
  flex: 1;
  background: var(--color-background);
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <Navigation />
      <MainContent>
        <Home />
        <About />
        <Services />
      </MainContent>
      <Footer />
    </AppContainer>
  );
};

export default App; 