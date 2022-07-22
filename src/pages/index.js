import React from "react"
import styled from "styled-components"

import Introduction from "~sections/introduction"
import About from "~sections/about"
import { Layout } from "~components/"

const MainContainer = styled.div`
  @media screen and (max-width: 900px) {
    grid-template-rows: 52rem 8rem 1fr;
  }
  @media screen and (min-width: 900px) {
    grid-template-rows: 1fr 8rem 1fr;
  }
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "home"
    "gutter1"
    "about";
  width: 100%;
  height: 100%;
`

const IndexPage = () => {
  return (
    <Layout>
      <MainContainer>
        <Introduction />
        <About />
      </MainContainer>
    </Layout>
  )
}

export default IndexPage
