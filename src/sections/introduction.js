import React from "react"
import styled from "styled-components"
import { Button } from "~components/"
import { email } from "../config"

const HeadingContainer = styled.div`
  grid-area: content;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
`

const IntroductionContainer = styled.div`
  grid-column: 2 / 3;
`
const Introduction1 = styled.h6`
  color: var(--grey);
  font-weight: 300;
`
const Introduction2 = styled.h1`
  color: var(--red);
  font-weight: 700;
`

const Introduction3 = styled.h3`
  color: var(--red);
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
  <HeadingContainer>
    <IntroductionContainer>
      <Introduction1>Hello I&apos;m</Introduction1>
      <Introduction2>Veronica Shei</Introduction2>
      <Introduction3>I design and develop web applications.</Introduction3>
      <Introduction4>
        I&apos;m a full stack software developer in the financial technology
        space. I&apos;m passionate about crafting elegant and responsive
        applications and leveraging data science to drive better user
        experiences.
      </Introduction4>
      <ContactButton className="contact-me--button" href={`mailto:${email}`}>
        Contact Me
      </ContactButton>
    </IntroductionContainer>
  </HeadingContainer>
)

export default Introduction