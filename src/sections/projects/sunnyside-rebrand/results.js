import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import BulletPoint from "~components/bulletPoint"

const SunnysideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.25rem 5rem;
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
  justify-content: center;
`
const StyledImg = styled(Img)`
  width: 250px;
  height: auto;
  object-fit: contain;
  object-position: top left;
`
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 900px) {
    padding: 1rem 2.5rem 2.5rem 0rem;
  }
  @media screen and (min-width: 900px) {
    padding: 0rem 2.5rem 2.5rem 0rem;
  }
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
  padding-bottom: 1rem;
`
const BulletPointRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "bullet1";
  width: 568px;
  margin-bottom: 1rem;
  margin-left: 1rem;
`

const BulletPointContainer = styled.div`
  grid-area: "bullet1";
  display: flex;
  align-items: center;
`

const BulletText = styled.h6`
  color: var(--grey);
  font-weight: 400;
  font-size: var(--fz-xs);
`
const SunnysideRebrandResults = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "sunnyside-mobile.png" }) {
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
      <Subtitle>Results</Subtitle>
      <SectionContainer>
        <ContentBox>
          <Description>
            The rebrand project ended up being a success. We met our release and
            resourcing requirements and got pretty darn close to pixel perfect
            in both mobile and desktop views. Some result highlights are:
          </Description>
          <BulletPointRow>
            <BulletPointContainer first>
              <BulletPoint />
              <BulletText>
                Unlocked experimentation in website (i.e. A/B testing of
                different designs)
              </BulletText>
            </BulletPointContainer>
          </BulletPointRow>
          <BulletPointRow>
            <BulletPointContainer first>
              <BulletPoint />
              <BulletText>
                Better visibility into website (complete control over Amplitude,
                Google Analytics, Facebook setup)
              </BulletText>
            </BulletPointContainer>
          </BulletPointRow>
          <BulletPointRow>
            <BulletPointContainer first>
              <BulletPoint />
              <BulletText>
                Search engine optimizations like robots, sitemaps, backlinks,
                and high intent landing pages
              </BulletText>
            </BulletPointContainer>
          </BulletPointRow>
          <BulletPointRow>
            <BulletPointContainer first>
              <BulletPoint />
              <BulletText>Unified brand image</BulletText>
            </BulletPointContainer>
          </BulletPointRow>
          <BulletPointRow>
            <BulletPointContainer first>
              <BulletPoint />
              <BulletText>
                Reusable and flexible designs and sections for easy design
                updates{" "}
              </BulletText>
            </BulletPointContainer>
          </BulletPointRow>
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

export default SunnysideRebrandResults
