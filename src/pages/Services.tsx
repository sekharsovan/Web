import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.section`
  padding: 80px 22px;
  max-width: 980px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  scroll-snap-align: start;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 60px;
  color: var(--color-text-primary);
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    filter: brightness(1.05);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.03);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:active::after {
    opacity: 1;
  }
`;

const ServiceImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ServiceContent = styled.div`
  padding: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-text-primary);
`;

const ServiceDescription = styled.p`
  font-size: 17px;
  line-height: 1.47059;
  color: var(--color-text-secondary);
`;

const services = [
  {
    title: 'Web Development',
    description: 'Custom, responsive websites built with modern technologies and best practices.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=3840&q=80'
  },
  {
    title: 'API Development',
    description: 'Robust and scalable API solutions for seamless integration and data exchange.',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=3840&q=80'
  },
  {
    title: 'Website Optimization',
    description: 'Performance optimization and speed enhancement for better user experience.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=3840&q=80'
  },
  {
    title: 'Website Automation',
    description: 'Automated workflows and processes to streamline your online operations.',
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112c1f5c3a?auto=format&fit=crop&w=3840&q=80'
  },
  {
    title: 'AI Solutions',
    description: 'Cutting-edge AI integration and machine learning solutions for your business.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=3840&q=80'
  }
];

const Services: React.FC = () => {
  return (
    <ServicesContainer id="services">
      <Title>Our Services</Title>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceImage imageUrl={service.imageUrl} />
            <ServiceContent>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceContent>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default Services; 