import React, { FormEvent, useEffect, useRef } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  min-height: 100vh;
  background: #000;
  position: relative;
  overflow: hidden;
  padding: 8rem 2rem;
  color: #fff;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(0,0,0,0.9), rgba(0,0,0,0.7));
    z-index: 1;
  }
`;

const Section = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 4rem;
  text-align: center;
  background: linear-gradient(90deg, #fff, #00f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;
  line-height: 1.1;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s ease forwards;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactForm = styled.form`
  background: rgba(255, 255, 255, 0.05);
  padding: 3rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0;
  transform: translateX(-50px);
  animation: fadeInLeft 1s ease forwards;

  @keyframes fadeInLeft {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #00f2fe;
  font-size: 1.1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00f2fe;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 20px rgba(0, 242, 254, 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00f2fe;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 20px rgba(0, 242, 254, 0.2);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(90deg, #00f2fe, #4facfe);
  color: #000;
  padding: 1.2rem 3rem;
  border: none;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #4facfe, #00f2fe);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 242, 254, 0.3);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const ContactInfo = styled.div`
  opacity: 0;
  transform: translateX(50px);
  animation: fadeInRight 1s ease forwards;

  @keyframes fadeInRight {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const InfoItem = styled.div`
  margin-bottom: 3rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #00f2fe;
    box-shadow: 0 10px 20px rgba(0, 242, 254, 0.2);
  }
`;

const InfoTitle = styled.h3`
  color: #00f2fe;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

const InfoText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-size: 1.1rem;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  margin-top: 2rem;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s ease forwards 0.5s;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { top } = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (top < windowHeight * 0.8) {
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <ContactContainer id="contact" ref={containerRef}>
      <Section>
        <Title>Get in Touch</Title>
        <ContactGrid>
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea id="message" required />
            </FormGroup>
            <SubmitButton type="submit">Send Message</SubmitButton>
          </ContactForm>
          <ContactInfo>
            <InfoItem>
              <InfoTitle>Address</InfoTitle>
              <InfoText>123 Future Street, Tech City, TC 12345</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoTitle>Email</InfoTitle>
              <InfoText>contact@futuredev.com</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoTitle>Phone</InfoTitle>
              <InfoText>+1 (555) 123-4567</InfoText>
            </InfoItem>
            <MapContainer>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215682606424!2d-73.987844924164!3d40.757339271352585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1645555555555!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </MapContainer>
          </ContactInfo>
        </ContactGrid>
      </Section>
    </ContactContainer>
  );
};

export default Contact; 