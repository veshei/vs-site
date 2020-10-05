import React from "react"
import styled from "styled-components"

import Layout from "~components/layout"
import Button from "~components/button"
import { email } from "../config"

const MainContainer = styled.div`
  grid-area: main;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`

const ImageContainer = styled.div`
  grid-area: image;
  width: 50%;
`
const HeadingContainer = styled.div`
  grid-area: content;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const IntroductionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
const Introduction1 = styled.h6`
  color: var(--grey);
  font-weight: 300;
`
const Introduction2 = styled.h1`
  color: var(--red);
  font-weight: 700;
`

const Introduction3 = styled.h5`
  color: var(--red);
  font-weight: 700;
  color: rgba(168, 0, 0, 0.5);
`
const Introduction4 = styled.h6`
  color: var(--grey);
  font-weight: 400;
  width: 50%;
`

const IndexPage = () => {
  return (
    <Layout>
      <MainContainer>
        <ImageContainer>placeholder</ImageContainer>
        <HeadingContainer>
          <IntroductionContainer>
            <Introduction1>Hello I&apos;m</Introduction1>
            <Introduction2>Veronica Shei</Introduction2>
            <Introduction3>
              I design and develop web applications.
            </Introduction3>
            <Introduction4>
              I&apos;m a full stack software developer in the financial
              technology space. I&apos;m passionate about crafting elegant and
              responsive applications and leveraging data science to drive
              better user experiences.
            </Introduction4>
            <Button href={`mailto:${email}`}>Contact Me</Button>
          </IntroductionContainer>
        </HeadingContainer>
      </MainContainer>
    </Layout>
  )
}

export default IndexPage
