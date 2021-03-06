import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
  height: 100%;
  width: 100%;
`

const StyledImg = styled(Img)`
  height: 100%;
  width: 100%;
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "fushimiInari.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <MainContainer>
        <ImageContainer>
          <StyledImg
            title="Main Website Image"
            alt="Fushimi Inari"
            fluid={data.file.childImageSharp.fluid}
          />
        </ImageContainer>
        <Introduction />
      </MainContainer>
    </Layout>
  )
}

export default IndexPage
