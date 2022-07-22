import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const SunnysideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.25rem 5rem;
  background: var(--red-bg);
`
const SectionContainer = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
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
  width: 100%;
  object-position: top left;
`
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 900px) {
    padding: 1rem 0rem 2.5rem 2.5rem;
  }
  @media screen and (min-width: 900px) {
    padding: 0rem 0rem 2.5rem 2.5rem;
  }
`
const Subtitle = styled.h2`
  font-weight: 700;
  color: var(--white);
  font-size: var(--fz-lg);
  display: flex;
  justify-content: flex-end;
`
const Description = styled.span`
  color: ${(props) => (props.highlight ? "var(--red-dark)" : "var(--white)")};
  font-weight: 500;
  font-size: var(--fz-xs);
  letter-spacing: 0;
  line-height: 29px;
  letter-spacing: 0;
  line-height: 29px;
  width: ${(props) => (props.fit ? "fit-content" : "initial")};
`
const SunnysideRebrandTechnical = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "sunnyside-desktop.png" }) {
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
      <Subtitle>Technical Specifications</Subtitle>
      <SectionContainer>
        <ImageBox>
          <StyledImg
            title="Sunnyside Project"
            alt="Sunnyside"
            fluid={data.file.childImageSharp.fluid}
          />
        </ImageBox>
        <ContentBox>
          <Description>
            We had a fast deadline to meet (mid-December launch) and I was the
            main engineer working on the project. We knew we wanted to add in
            developer customizability while maintaining marketing flexibility.
            With this in mind we settled on a&nbsp;
            <Description highlight>
              monolithic codebase in NextJS and NestJS
            </Description>
            &nbsp;with a &nbsp;
            <Description highlight>Prismic headless CMS</Description>. Our
            website designs and brand assets were developed in collaboration
            with an agency and made in Figma. Over the course of 2 months, the
            Head of Growth and I met every other day to go over the progress,
            iterate on designs, and ensure that by the end we would have a pixel
            perfect release.
          </Description>
        </ContentBox>
      </SectionContainer>
    </SunnysideContainer>
  )
}

export default SunnysideRebrandTechnical
