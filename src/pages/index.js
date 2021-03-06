import React from "react"
import styled from "styled-components"

import Introduction from "~sections/introduction"
import HomeImage from "~sections/homeImage"
import { Layout } from "~components/"

const MainContainer = styled.div`
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "image content";
  width: 100%;
  height: 100%;
`

const IndexPage = () => {
  return (
    <Layout>
      <MainContainer>
        <HomeImage />
        <Introduction />
      </MainContainer>
    </Layout>
  )
}

export default IndexPage
