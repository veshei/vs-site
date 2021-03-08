import React from "react"
import styled from "styled-components"

import Introduction from "~sections/introduction"
import About from "~sections/about"
import Work from "~sections/work"
import { Layout } from "~components/"

const MainContainer = styled.div`
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 8rem 1fr 1fr;
  grid-template-areas:
    "home"
    "gutter1"
    "about"
    "work";
  width: 100%;
  height: 100%;
`

const IndexPage = () => {
  return (
    <Layout>
      <MainContainer>
        <Introduction />
        <About />
        <Work />
      </MainContainer>
    </Layout>
  )
}

export default IndexPage
