import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes';
import { Design, Develope } from './AllSvgs';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem;
  overflow-y: auto;

  /* Tablet */
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    padding: 1.5rem;
    height: auto;
    min-height: 100vh;
  }

  /* Mobile */
  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1.5rem;
  }

  /* Mobile pequeno */
  @media (max-width: 480px) {
    padding: 0.5rem;
    gap: 1rem;
  }
`

const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  gap: 2rem;

  /* Tablet - 2 colunas em linha */
  @media (max-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5rem;
        width:65%;
        margin-top:30%;
        
  }

  /* Mobile grande - 2 colunas */
  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top:30%;
        width:65%;
        height:30%
  }

  /* Mobile pequeno - 1 coluna */
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
    margin-top:30%;
        width:65%;
          height:30%
  }
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }

  /* Tablet */
  @media (max-width: 1024px) {
    width: 45%;
    height: 55vh;
    padding: 1.5rem;
  }

  /* Mobile grande */
  @media (max-width: 768px) {
    width: 48%;
    height: 50vh;
    padding: 1.2rem;
  }

  /* Mobile pequeno */
  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    min-height: 45vh;
    padding: 1rem;
  }

  /* Mobile muito pequeno */
  @media (max-width: 320px) {
    padding: 0.8rem;
    min-height: 40vh;
  }
`

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    &>* {
      fill: ${props => props.theme.body};
    }
  }

  &>*:first-child {
    margin-right: 1rem;
  }

  @media (max-width: 768px) {
    font-size: calc(0.9em + 0.8vw);
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${props => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
    display: block;
  }

  ul, p {
    margin-left: 1rem;
  }

  @media (max-width: 768px) {
    font-size: calc(0.5em + 0.8vw);
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    
    ul, p {
      margin-left: 0.5rem;
    }
  }
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
                <LogoComponent theme='light' />
                <SocialIcons theme='light' />
                <PowerButton />
                <ParticleComponent theme='light' />
                
                <SkillsContainer>
                    <Main>
                        <Title>
                            <Design width={40} height={40} /> Frontend Developer
                        </Title>
                        <Description>
                            Craft sleek, efficient UI flows with clean code and performance-driven design.
                        </Description>
                        <Description>
                            <strong>Skills</strong>
                            <p>
                                Html, Css, Js, React, Bootstrap, Tailwind, Firebase...
                            </p>
                        </Description>
                        <Description>
                            <strong>Tools</strong>
                            <p>VSCode, GitHub, Git, Adobe Color</p>
                        </Description>
                    </Main>

                    <Main>
                        <Title>
                            <Develope width={40} height={40} /> Social media manager
                        </Title>
                        <Description>
                            Analyze trends and create data-driven campaigns to grow engagement and brand impact online.
                        </Description>
                        <Description>
                            <strong>Skills</strong>
                            <p>
                                Planning, Copywriting, Strategy, Content...
                            </p>
                        </Description>
                        <Description>
                            <strong>Tools</strong>
                            <p>
                                Meta Business Suite, Canva, ManyChat
                            </p>
                        </Description>
                    </Main>
                </SkillsContainer>

                <BigTitle text="SKILLS" top="80%" right="30%" />
            </Box>
        </ThemeProvider>
    )
}

export default MySkillsPage