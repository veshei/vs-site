import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const SunnysideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.25rem 5rem;
`
const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
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
  padding: 0rem 2.5rem 2.5rem 0rem;
  justify-content: center;
  align-items: flex-start;
`
const Title = styled.h1`
  font-weight: 700;
  color: var(--red-dark);
`
const Subtitle = styled.h2`
  font-weight: 700;
  color: var(--red-light);
  font-size: var(--fz-lg);
`
const Description = styled.span`
  color: ${(props) => (props.highlight ? "var(--red-light)" : "var(--grey)")};
  font-weight: 500;
  font-size: var(--fz-xs);
  letter-spacing: 0;
  line-height: 29px;
  letter-spacing: 0;
  line-height: 29px;
  width: ${(props) => (props.fit ? "fit-content" : "initial")};
`
const SunnysideRebrandIntroduction = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "cutbackcoach-to-sunnyside.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <SunnysideContainer>
      <Title>Sunnyside Rebrand Project</Title>
      <Subtitle>Introduction</Subtitle>
      <SectionContainer>
        <ContentBox>
          <Description>
            In October 2021, I joined the effort to rebrand from Cutback Coach
            to&nbsp;
            <Description highlight>Sunnyside</Description>&nbsp;as a technical
            lead. This would be a &nbsp;
            <Description highlight>complete brand redesign</Description>&nbsp;
            with new custom assets, brand colors, brand fonts and an all new
            brochureware website. The Sunnyside brand crystalized the company as
            the positive, healthier approach to drinking. Instead of being
            solely focused on cutting back, the rebrand was helping us emphasize
            all the &nbsp;
            <Description highlight>
              benefits of a mindful drinking lifestyle
            </Description>
            : happier mornings, healthier diets, money saved, and so much more.
          </Description>
        </ContentBox>
        <ImageBox>
          <StyledImg
            title="Sunnyside Project"
            alt="Sunnyside"
            fluid={data.file.childImageSharp.fluid}
          />
        </ImageBox>
      </SectionContainer>
    </SunnysideContainer>
  )
}

export default SunnysideRebrandIntroduction
