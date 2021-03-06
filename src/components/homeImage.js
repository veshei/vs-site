import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageContainer = styled.div`
  grid-area: image;
  height: 100%;
  width: 100%;
`

const StyledImg = styled(Img)`
  height: 100%;
  width: 100%;
`

const HomeImage = () => {
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
    <ImageContainer>
      <StyledImg
        title="Main Website Image"
        alt="Fushimi Inari"
        fluid={data.file.childImageSharp.fluid}
      />
    </ImageContainer>
  )
}

export default HomeImage
