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
  grid-template-columns: 1fr 7fr;
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
  grid-area: description;
  display: grid;
  grid-template-columns: 5fr 1fr 4fr;
  grid-template-rows: 1fr;
  grid-template-areas: "text gap image";
`
const DescriptionContainer = styled.div`
  grid-area: text;
  display: flex;
  flex-direction: column;
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
            &nbsp;in 2019. I&apos;m currently working for&nbsp;
            <Description highlight>Visa</Description>
            &nbsp;as a software engineer on their cardholder application
            development team.
            <br />
            <br />
            As an engineer, I always strive to follow the best coding practices,
            design accessible applications, and achieve pixel perfect,
            performant experiences.
            <br />
            <br />
            My passion for computer science comes from the belief that
            technology has tremendous potential to enact social good. I&apos;m
            specifically interested in combating bias in machine learning
            algorithms. This interest is why I am pursuing a&nbsp;
            <Description highlight>
              Master of Science in Data Analytics
            </Description>
            &nbsp;at&nbsp;
            <Description highlight>Georgia Tech</Description>
            &nbsp;(starting spring 2021!).
            <br />
            <br />
            In my downtime I love to try new recipes (my current obsession is
            pasta making), travel and experience different cultures (all the
            photos on my website are taken by me), and spend time with my loved
            ones.
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
              <BulletText>Javascript(ES6+)</BulletText>
            </BulletPointContainer>
            <BulletPointContainer>
              <BulletPoint />
              <BulletText>Java</BulletText>
            </BulletPointContainer>
          </BulletPointRow>
          <BulletPointRow>
            <BulletPointContainer first>
              <BulletPoint />
              <BulletText>React</BulletText>
            </BulletPointContainer>
            <BulletPointContainer>
              <BulletPoint />
              <BulletText>.NET Core</BulletText>
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
