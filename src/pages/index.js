import React from "react"
import styled from "styled-components"

import Introduction from "~sections/introduction"
import { Layout } from "~components/"

const MainContainer = styled.div`
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "home";
  width: 100%;
  height: 100%;
`

const IndexPage = () => {
  return (
    <Layout>
      <MainContainer>
        <Introduction />
      </MainContainer>
    </Layout>
  )
}

export default IndexPage
