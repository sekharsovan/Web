import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: var(--color-background);
  border-top: 1px solid var(--color-border);
  padding: 1.5rem;
  text-align: center;
  width: 100%;
`;

const Copyright = styled.p`
  color: var(--color-text-secondary);
  font-size: 14px;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Copyright>© 2025 WAAA. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer; 