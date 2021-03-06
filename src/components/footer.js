import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  grid-area: footer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.5rem;
  width: 100%;
  background-color: var(--white);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
`

const FooterLabel = styled.h6`
  font-weight: 300;
  color: var(--grey);
`

const Footer = () => {
  return (
    <StyledFooter>
      <FooterLabel>Designed and Developed by Veronica Shei</FooterLabel>
    </StyledFooter>
  )
}

export default Footer
