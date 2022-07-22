import React from "react"
import styled from "styled-components"

import { Layout } from "~components/"
import OppenheimerSection from "~sections/projects/oppfolio"
import SunnysideSection from "~sections/projects/sunnyside-rebrand"
import SEO from "../components/seo"

const MainContainer = styled.div`
  grid-area: main;
  display: flex;
  width: 100%;
  padding: 0rem 2.5rem;
  max-width: 1400px;
  margin: 0 auto;
  flex-direction: column;
`
const SectionDivider = styled.div`
  height: 2px;
  width: 100%;
  background-color: var(--grey);
`

const ProjectsPage = () => {
  return (
    <Layout>
      <MainContainer>
        <SunnysideSection />
        <SectionDivider />
        <OppenheimerSection />
      </MainContainer>
    </Layout>
  )
}

export default ProjectsPage

export const Head = () => <SEO title="Veronica Shei | Projects" />
