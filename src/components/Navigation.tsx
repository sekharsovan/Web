import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--color-background);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-border);
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 0 22px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  font-size: 24px;
  font-weight: 600;
  color: var(--color-text-primary);
  text-decoration: none;
  animation: fadeIn 1s ease forwards;
  opacity: 0;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 34px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: var(--color-text-primary);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--color-accent);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Navigation: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Nav>
      <NavContainer>
        <Logo href="#" onClick={(e) => {
          e.preventDefault();
          scrollToSection('home');
        }}>
          WAAA
        </Logo>
        <NavLinks>
          <NavLink href="#" onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}>
            Home
          </NavLink>
          <NavLink href="#" onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}>
            About
          </NavLink>
          <NavLink href="#" onClick={(e) => {
            e.preventDefault();
            scrollToSection('services');
          }}>
            Services
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navigation; 