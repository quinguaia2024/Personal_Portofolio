import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Me from '../assets/Images/profile.png'

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 55vh;
  display: flex;
  background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${props => props.theme.body};
  border-right: 2px solid ${props => props.theme.text};
  z-index: 1;

  @media (max-width: 768px) {
    width: 75vw;
    height: 70vh;
  }

  @media (max-width: 480px) {
    width: 70vw;
    height: 70vh;
    background-size: 100% 1px;
  }
`

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  &.text-container {
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  &.image-container {
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
`

const ImageWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  .pic {
    width: 85%;
    height: auto;
    max-height: 90%;
    object-fit: contain;
    position: relative;
    
    @media (max-width: 768px) {
      width: 95%;
      max-height: 85%;
    }

    @media (max-width: 480px) {
      width: 100%;
      max-height: 80%;
    }
  }
`

const Text = styled.div`
  color: ${props => props.theme.body};
  padding: 1rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;

  h1 {
    font-size: calc(1.5rem + 2vw);
    margin-bottom: 0.5rem;
    font-weight: 600;
    
    @media (max-width: 768px) {
      font-size: calc(1.3rem + 1.5vw);
    }
    
    @media (max-width: 480px) {
      font-size: calc(1.2rem + 1.2vw);
      margin-bottom: 0.3rem;
    }
  }

  h3 {
    font-size: calc(1.2rem + 1.5vw);
    margin-bottom: 1rem;
    font-weight: 500;
    
    @media (max-width: 768px) {
      font-size: calc(1rem + 1.2vw);
    }
    
    @media (max-width: 480px) {
      font-size: calc(0.9rem + 1vw);
      margin-bottom: 0.5rem;
    }
  }

  h6 {
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.7rem + 0.8vw);
    font-weight: 300;
    line-height: 1.4;
    
    @media (max-width: 768px) {
      font-size: calc(0.6rem + 0.7vw);
      line-height: 1.3;
    }
    
    @media (max-width: 480px) {
      font-size: calc(0.5rem + 0.6vw);
      line-height: 1.2;
    }
  }
`

const Intro = () => {
    return (
        <Box
            initial={{ height: 0 }}
            animate={{ height: '55vh' }}
            transition={{ type: 'spring', duration: 2, delay: 1 }}
        >
            <SubBox className="text-container">
                <Text>
                    <h1>Hi,</h1>
                    <h3>I'm Ludovina.</h3>
                    <h6>Frontend dev with electronics background, usability focus, and innovation.</h6>
                </Text>
            </SubBox>
            <SubBox className="image-container">
                <ImageWrapper
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    <img className="pic" src={Me} alt="Profile Pic" />
                </ImageWrapper>
            </SubBox>
        </Box>
    )
}

export default Intro