import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import WhiteLogo from "~components/icons/whiteLogo"
import Button from "~components/button"
import { navLinks } from "../config"

const StyledHeader = styled.header`
  grid-area: header;
  display: flex;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-gap: 2.25rem;
  height: 4.5rem;
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
    display: flex;
    justify-content: space-evenly;
    margin-right: 2.25rem;
    @media screen and (min-width: 1200px) {
      width: 15%;
    }
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
          {navLinks.map(({ url, name }) => (
            <StyledLink to={url}>{name}</StyledLink>
          ))}
          <Button href="resume.pdf">Resume</Button>
        </div>
      </LinksWrapper>
    </StyledHeader>
  )
}

export default Nav
