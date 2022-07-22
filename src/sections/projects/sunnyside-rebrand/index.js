import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

const SunnysideContainer = styled.div`
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
  width: 100%;
  object-position: top left;
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
const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-color: var(--red-light);
  }
`

const SunnysideRebrandProject = () => {
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
      <ImageBox>
        <StyledImg
          title="Sunnyside Project"
          alt="Sunnyside"
          fluid={data.file.childImageSharp.fluid}
        />
      </ImageBox>
      <ContentBox>
        <StyledLink to="/sunnyside">
          <Title>Sunnyside Rebrand Project</Title>
        </StyledLink>
        <Description>
          Served as the &nbsp;
          <Description highlight>technical lead</Description>&nbsp;for the
          Sunnyside rebrand project. Migrated brochureware website from
          Squarespace to&nbsp;
          <Description highlight>
            NextJS and NestJS with a Prismic headless CMS
          </Description>
          &nbsp;.
        </Description>
      </ContentBox>
    </SunnysideContainer>
  )
}

export default SunnysideRebrandProject
