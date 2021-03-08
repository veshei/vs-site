import React from "react"
import styled from "styled-components"

const WorkContainer = styled.div`
  display: grid;
  grid-area: work;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-rows: 1fr 8fr;
  grid-template-areas:
    "padding1 title padding2"
    "padding1 work padding2";
`
const TitleContainer = styled.div`
  grid-area: title;
  display: grid;
  grid-template-columns: 1fr 2.85fr;
  grid-template-rows: 1fr;
  grid-template-areas: "text divider";
  align-items: center;
`
const WorkTitle = styled.h2`
  grid-area: text;
  font-weight: 700;
  color: var(--red-dark);
  white-space: nowrap;
`

const WorkDivider = styled.div`
  grid-area: divider;
  height: 2px;
  width: 100%;
  background-color: var(--grey);
`

const Work = () => {
  return (
    <WorkContainer>
      <TitleContainer>
        <WorkTitle>MY WORK EXPERIENCE</WorkTitle>
        <WorkDivider />
      </TitleContainer>
    </WorkContainer>
  )
}

export default Work
