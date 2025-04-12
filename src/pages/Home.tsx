import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroContent = styled.div`
  text-align: center;
  padding: 0 22px;
  max-width: 980px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  color: #FFFFFF;
`;

const Title = styled.h1`
  font-size: 64px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #FFFFFF;
  animation: ${fadeDown} 1s ease-out forwards;
  opacity: 0;

  @media (max-width: 768px) {
    font-size: 48px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
  animation: ${fadeUp} 1s ease-out 0.3s forwards;
  opacity: 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${fadeUp} 1s ease-out 0.5s forwards;
  opacity: 0;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
  }

  &:active {
    transform: scale(0.98);
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: rotate(45deg);
    animation: shine 3s infinite;
  }

  @keyframes shine {
    0% {
      transform: translateX(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) rotate(45deg);
    }
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  animation: bounce 2s infinite;
  z-index: 2;

  &::after {
    content: '';
    width: 2px;
    height: 30px;
    background: rgba(255, 255, 255, 0.5);
    margin-top: 0.5rem;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

const Home: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay prevented:', error);
      });
    }
  }, []);

  return (
    <HeroSection id="home">
      <BackgroundVideo
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=3840&q=80"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-network-of-lines-41610-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>
      <HeroContent>
        <Title>We build to thrive 25 years in the future</Title>
        <Subtitle>You dream it. We build it. Let's make the future happen — together at WAAA.</Subtitle>
        <CTAButton onClick={() => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}>
          Get Started
        </CTAButton>
      </HeroContent>
      <ScrollIndicator>Scroll to explore</ScrollIndicator>
    </HeroSection>
  );
};

export default Home; 