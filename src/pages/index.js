import React from "react"
import styled from "styled-components"

import Introduction from "~sections/introduction"
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

const ImageContainer = styled.div`
  grid-area: image;
`
const IndexPage = () => {
  return (
    <Layout>
      <MainContainer>
        <ImageContainer />
        <Introduction />
      </MainContainer>
    </Layout>
  )
}

export default IndexPage
