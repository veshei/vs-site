import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const OppenheimerContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 2.5rem 5rem;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
  @media screen and (min-width: 900px) {
    flex-direction: row;
  }
`
const ImageBox = styled.div`
  display: flex;
  width: 100%;
`
const StyledImg = styled(Img)`
  height: 300px;
  width: 100%;
  object-position: top center;
`
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0rem 2.5rem 2.5rem 2.5rem;
  justify-content: center;
  align-items: flex-start;
`
const Title = styled.h2`
  font-weight: 700;
  color: var(--red-dark);
`
const Description = styled.span`
  color: ${(props) => (props.highlight ? "var(--red-light)" : "var(--grey)")};
  font-weight: 500;
  font-size: var(--fz-lg);
  letter-spacing: 0;
  line-height: 29px;
  letter-spacing: 0;
  line-height: 29px;
  width: ${(props) => (props.fit ? "fit-content" : "initial")};
`

const OppfolioProject = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "oppfolio.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <OppenheimerContainer>
      <ImageBox>
        <StyledImg
          title="OppFolio Project"
          alt="OppFolio"
          fluid={data.file.childImageSharp.fluid}
        />
      </ImageBox>
      <ContentBox>
        <Title>OppFolio Project</Title>
        <Description>
          Built internal file drive system used by&nbsp;
          <Description highlight>2000+ members</Description>&nbsp;of the
          investment, portfolio management, and research teams at
          OppenheimerFunds in a&nbsp;
          <Description highlight>React and Java Springboot</Description>
          &nbsp;setup.
        </Description>
      </ContentBox>
    </OppenheimerContainer>
  )
}

export default OppfolioProject
