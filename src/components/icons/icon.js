import React from "react"
import PropTypes from "prop-types"
import {
  BlackLogo,
  FacebookIcon,
  GitHubIcon,
  GmailIcon,
  InstagramIcon,
  LinkedinIcon,
  WhiteLogo,
} from "~components/icons"

const Icon = ({ name }) => {
  switch (name) {
    case "BlackLogo":
      return <BlackLogo />
    case "Facebook":
      return <FacebookIcon />
    case "GitHub":
      return <GitHubIcon />
    case "Gmail":
      return <GmailIcon />
    case "Instagram":
      return <InstagramIcon />
    case "Linkedin":
      return <LinkedinIcon />
    case "WhiteLogo":
    default:
      return <WhiteLogo />
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
