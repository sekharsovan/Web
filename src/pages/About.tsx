import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
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

const ContentSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Paragraph = styled.p`
  font-size: 17px;
  line-height: 1.47059;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
`;

const Highlight = styled.span`
  color: var(--color-accent);
  font-weight: 600;
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

const ServicesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
`;

const ServiceItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: var(--color-text-secondary);
  font-size: 17px;
  line-height: 1.47059;

  &::before {
    content: '→';
    color: var(--color-accent);
    margin-right: 0.5rem;
    font-weight: bold;
  }
`;

const StorySection = styled.div`
  background: #F5F5F7;
  border-radius: 12px;
  padding: 2rem;
  margin: 4rem 0;
`;

const StoryTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--color-text-primary);
`;

const PromiseSection = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding: 2rem;
  background: var(--color-background);
  border-radius: 12px;
  border: 1px solid var(--color-border);
`;

const PromiseTitle = styled.h3`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--color-text-primary);
`;

const About: React.FC = () => {
  return (
    <AboutContainer id="about">
      <Title>About WAAA</Title>
      <ContentSection>
        <TextContent>
          <Paragraph>
            At <Highlight>WAAA</Highlight>, we're not just building software — we're building the future.
          </Paragraph>
          <Paragraph>
            We specialize in delivering world-class digital services that include:
          </Paragraph>
          <ServicesList>
            <ServiceItem>Website Development (custom websites, landing pages, e-commerce platforms)</ServiceItem>
            <ServiceItem>API Development & Integration (streamlined connections for better performance)</ServiceItem>
            <ServiceItem>Automation Systems (save time, cut costs, and eliminate human error)</ServiceItem>
            <ServiceItem>Website Optimization (lightning-fast speed, SEO-friendly, performance-tuned experiences)</ServiceItem>
          </ServicesList>
          <Paragraph>
            Our belief? Think 25 years ahead. Build to last 25 years ahead.
          </Paragraph>
          <Paragraph>
            Every product we create is engineered with the future in mind — robust, scalable, and designed to stand the test of time. Whether you're a creator, entrepreneur, startup, or established brand, WAAA is your launchpad for long-term success in the digital age.
          </Paragraph>
        </TextContent>
        <ImageContainer>
          <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=3840&q=80" alt="WAAA Team" />
        </ImageContainer>
      </ContentSection>

      <ContentSection>
        <ImageContainer>
          <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=3840&q=80" alt="WAAA Office" />
        </ImageContainer>
        <TextContent>
          <Paragraph>
            <Highlight>Why Choose WAAA?</Highlight>
            Because we care. Not in the corporate tagline way — but in the late-night-code-fix, pixel-perfect-design, stay-on-call-till-it's-done kind of way.
          </Paragraph>
          <Paragraph>
            Our team listens deeply to your needs and builds software tailored to your vision, your goals, and your growth. We don't just deliver projects — we deliver experiences. The kind that leave you saying, "This is exactly what I needed."
          </Paragraph>
        </TextContent>
      </ContentSection>

      <StorySection>
        <StoryTitle>Here's a story to show you how we roll:</StoryTitle>
        <Paragraph>
          One of our earliest clients, a small business owner struggling to manage a growing workload, approached us to build a website and automate their daily reports. Within 2 weeks, we built a dynamic platform that not only handled their sales tracking but also saved them 5+ hours a day through smart automation. Today, they've scaled their business 3x — and we're still just one message away for anything they need.
        </Paragraph>
        <Paragraph>
          That's WAAA.
          Always there. Always evolving. Always delivering.
        </Paragraph>
      </StorySection>

      <PromiseSection>
        <PromiseTitle>Our Promise</PromiseTitle>
        <Paragraph>
          At WAAA, customer satisfaction isn't a goal — it's the system we run on. Every line of code, every design element, every solution we build is crafted to make your digital journey effortless and exceptional.
        </Paragraph>
        <Paragraph>
          You dream it. We build it.
          Let's make the future happen — together.
        </Paragraph>
      </PromiseSection>
    </AboutContainer>
  );
};

export default About; 