import React from "react"
import styled from "styled-components"
import { socialMedia } from "../config"
import { Icon } from "~components/icons"

const SocialBar = styled.ul`
  grid-area: social;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  li {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`

const Social = () => (
  <SocialBar>
    {socialMedia &&
      socialMedia.map(({ url, name }) => (
        <li key={name}>
          <a href={url} aria-label={name}>
            <Icon name={name} />
          </a>
        </li>
      ))}
  </SocialBar>
)
export default Social
