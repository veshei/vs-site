import React from "react"
import styled from "styled-components"
import { Button } from "~components/"
import HomeImage from "~components/homeImage"

import { email } from "../config"

const HomeContainer = styled.div`
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 500px 500px;
    grid-template-areas:
      "image"
      "content";
  }
  @media screen and (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "image content";
  }
  grid-area: home;
  display: grid;
  width: 100%;
  height: 100%;
`

const HeadingContainer = styled.div`
  grid-area: content;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas: "padding1 text padding2";
  align-items: center;
`

const IntroductionContainer = styled.div`
  grid-area: text;
`
const Introduction1 = styled.h6`
  color: var(--grey);
  font-weight: 300;
`
const Introduction2 = styled.h1`
  color: var(--red);
  font-weight: 700;
`

const Introduction3 = styled.h4`
  font-weight: 700;
  color: rgba(168, 0, 0, 0.5);
`
const Introduction4 = styled.h6`
  color: var(--grey);
  font-weight: 400;
`

const ContactButton = styled(Button)`
  margin-top: 1rem;
`

const Introduction = () => (
  <HomeContainer>
    <HomeImage />
    <HeadingContainer>
      <IntroductionContainer>
        <Introduction1>Hello I&apos;m</Introduction1>
        <Introduction2>Veronica Shei</Introduction2>
        <Introduction3>I design and develop web applications.</Introduction3>
        <Introduction4>
          I&apos;m a front end software developer working at an early stage
          startup in the consumer healthcare space. I&apos;m passionate about
          crafting elegant and responsive applications and leveraging data
          science to drive better user experiences.
        </Introduction4>
        <ContactButton className="contact-me--button" href={`mailto:${email}`}>
          Contact Me
        </ContactButton>
      </IntroductionContainer>
    </HeadingContainer>
  </HomeContainer>
)

export default Introduction
