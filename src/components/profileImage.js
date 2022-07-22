import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageContainer = styled.div`
  grid-area: image;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`

const StyledImg = styled(Img)`
  width: 100%;
  object-position: top top;
  @media screen and (max-width: 900px) {
    height: auto;
  }
  @media screen and (min-width: 900px) {
    height: 75%;
  }
`

const ProfileImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile.jpg" }) {
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

export default ProfileImage
