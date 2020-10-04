import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import WhiteLogo from "~components/icons/whiteLogo"

const StyledHeader = styled.header`
  grid-column: span 12;
  display: flex;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-gap: 20px;
  height: 72px;
  background-color: var(--black);
  align-items: center;
`
const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;

  .home-link--wrapper,
  .links--wrapper {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .home-link--wrapper {
    margin-left: 2.25rem;
  }

  .links--wrapper {
    margin-right: 2.25rem;
  }
`

const StyledLink = styled(Link)`
  color: var(--white);
  font-family: var(--font-sans);
  font-size: var(--fz-sm);
  font-weight: 700;
  letter-spacing: 0;
  line-height: 21px;
  text-decoration: none;
  padding: 0.5rem;
`

const Nav = () => {
  return (
    <StyledHeader>
      <LinksWrapper tabIndex="-1">
        <div className="home-link--wrapper">
          <Link to="/" aria-label="home">
            <WhiteLogo />
          </Link>
          <StyledLink to="/">Veronica Shei</StyledLink>
        </div>
        <div className="links--wrapper">
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/experience">Experience</StyledLink>
          <StyledLink to="/work">Work</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
        </div>
      </LinksWrapper>
    </StyledHeader>
  )
}

export default Nav
