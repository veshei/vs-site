import React from "react"
import styled from "styled-components"

import { Layout } from "~components/"
import SunnysideRebrandIntroduction from "~sections/projects/sunnyside-rebrand/introduction"
import SunnysideRebrandResults from "~sections/projects/sunnyside-rebrand/results"
import SunnysideRebrandTechnical from "~sections/projects/sunnyside-rebrand/technical-specs"

const MainContainer = styled.div`
  grid-area: main;
  display: flex;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  flex-direction: column;
`

const SunnysideRebrandPage = () => {
  return (
    <Layout>
      <MainContainer>
        <SunnysideRebrandIntroduction />
        <SunnysideRebrandTechnical />
        <SunnysideRebrandResults />
      </MainContainer>
    </Layout>
  )
}

export default SunnysideRebrandPage
