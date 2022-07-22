import React from "react"
import styled from "styled-components"

import ProfileImage from "~components/profileImage"
import BulletPoint from "~components/bulletPoint"

const AboutContainer = styled.div`
  display: grid;
  grid-area: about;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-rows: 1fr 8fr;
  grid-template-areas:
    "padding1 title padding2"
    "padding1 description padding2";
`
const TitleContainer = styled.div`
  grid-area: title;
  display: grid;
  grid-template-columns: 1.25fr 6.75fr;
  grid-template-rows: 1fr;
  grid-template-areas: "text divider";
  align-items: center;
`
const AboutTitle = styled.h2`
  grid-area: text;
  font-weight: 700;
  color: var(--red-dark);
`

const AboutDivider = styled.div`
  grid-area: divider;
  height: 2px;
  width: 100%;
  background-color: var(--grey);
`

const DescriptionGrid = styled.div`
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 700px 1fr;
    grid-template-areas:
      "image"
      "text";
  }
  @media screen and (min-width: 900px) {
    grid-template-columns: 5fr 0.5fr 5fr;
    grid-template-rows: 1fr;
    grid-template-areas: "text gap image";
  }
  grid-area: description;
  display: grid;
`
const DescriptionContainer = styled.div`
  grid-area: text;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 900px) {
    padding-top: 1rem;
  }
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

const BulletPointRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "bullet1 bullet2";
  width: 568px;
  margin-bottom: 1rem;
`

const BulletPointContainer = styled.div`
  grid-area: ${(props) => (props.first ? "bullet1" : "bullet2")};
  display: flex;
  align-items: center;
`

const BulletText = styled.h6`
  color: var(--grey);
  font-weight: 400;
`

const About = () => {
  return (
    <AboutContainer>
      <TitleContainer>
        <AboutTitle>ABOUT ME</AboutTitle>
        <AboutDivider />
      </TitleContainer>
      <DescriptionGrid>
        <DescriptionContainer>
          <Description>
            Hello! I&apos;m Veronica. I grew up in beautiful Honolulu and
            received my computer science and marketing degree from&nbsp;
            <Description highlight>Northeastern University</Description>
            &nbsp;in 2019. I&apos;m currently based in NYC and working for&nbsp;
            <Description highlight>Sunnyside</Description>
            &nbsp;as a growth software engineer. Sunnyside is an early stage
            mission driven startup that is helping to build the future of the
            mindful drinking movement.
            <br />
            <br />
            As an engineer, I always strive to follow the best coding practices,
            design accessible applications, and achieve pixel perfect,
            performant experiences.
            <br />
            <br />
            My passion for computer science comes from the belief that
            technology has tremendous potential to enact social good. This is
            why I&apos;m interested in the&nbsp;
            <Description highlight>
              intersection between design and engineering
            </Description>
            . I believe good design and good engineering lead to better products
            that can better people&apos;s lives.
            <br />
            <br />
            In my downtime I love to try new recipes (my current obsession is
            pasta making), go surfing, travel and experience different cultures
            (all the photos on my website are taken by me), and spend time with
            my loved ones.
            <br />
            <br />
          </Description>
          <Description fit id="bullet--header">
            Here&apos;s what I&apos;ve been working in lately:
            <br />
            <br />
          </Description>
          <BulletPointRow>
            <BulletPointContainer first>
              <BulletPoint />
              <BulletText>Javascript (ES6+)</BulletText>
            </BulletPointContainer>
            <BulletPointContainer>
              <BulletPoint />
              <BulletText>NextJS (typescript)</BulletText>
            </BulletPointContainer>
          </BulletPointRow>
          <BulletPointRow>
            <BulletPointContainer first>
              <BulletPoint />
              <BulletText>React</BulletText>
            </BulletPointContainer>
            <BulletPointContainer>
              <BulletPoint />
              <BulletText>NestJS</BulletText>
            </BulletPointContainer>
          </BulletPointRow>
          <BulletPointRow>
            <BulletPointContainer first>
              <BulletPoint />
              <BulletText>Angular 8+</BulletText>
            </BulletPointContainer>
            <BulletPointContainer>
              <BulletPoint />
              <BulletText>Sketch & InVision</BulletText>
            </BulletPointContainer>
          </BulletPointRow>
        </DescriptionContainer>
        <ProfileImage />
      </DescriptionGrid>
    </AboutContainer>
  )
}

export default About
