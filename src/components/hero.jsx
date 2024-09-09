// src/components/Hero.jsx
import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  height: 100vh;
  background: url('images/honda.jpg') no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #ff6f61;
  color: #fff;
  text-decoration: none;
  font-size: 1.25rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e65b50;
  }
`;

const Hero = () => (
  <HeroWrapper>
    <HeroContent>
      <HeroTitle>Welcome to Prix Motorsports</HeroTitle>
      <HeroButton href="#services">Our Services</HeroButton>
    </HeroContent>
  </HeroWrapper>
);

export default Hero;
