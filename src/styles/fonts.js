/* eslint-disable no-restricted-syntax */
import { css } from "styled-components"

import RalewayLightWoff from "~fonts/Raleway/raleway-v18-latin-300.woff"
import RalewayLightWoff2 from "~fonts/Raleway/raleway-v18-latin-300.woff2"

import RalewayRegularWoff from "~fonts/Raleway/raleway-v18-latin-regular.woff"
import RalewayRegularWoff2 from "~fonts/Raleway/raleway-v18-latin-regular.woff2"

import RalewayMediumWoff from "~fonts/Raleway/raleway-v18-latin-500.woff"
import RalewayMediumWoff2 from "~fonts/Raleway/raleway-v18-latin-500.woff2"

import RalewaySemiboldWoff from "~fonts/Raleway/raleway-v18-latin-600.woff"
import RalewaySemiboldWoff2 from "~fonts/Raleway/raleway-v18-latin-600.woff2"

import RalewayBoldWoff from "~fonts/Raleway/raleway-v18-latin-700.woff"
import RalewayBoldWoff2 from "~fonts/Raleway/raleway-v18-latin-700.woff2"

import RalewayRegularItalicWoff from "~fonts/Raleway/raleway-v18-latin-italic.woff"
import RalewayRegularItalicWoff2 from "~fonts/Raleway/raleway-v18-latin-italic.woff2"
import RalewaySemiboldItalicWoff from "~fonts/Raleway/raleway-v18-latin-600italic.woff"
import RalewaySemiboldItalicWoff2 from "~fonts/Raleway/raleway-v18-latin-600italic.woff2"

const RalewayNormalWeights = {
  300: [RalewayLightWoff, RalewayLightWoff2],
  400: [RalewayRegularWoff, RalewayRegularWoff2],
  500: [RalewayMediumWoff, RalewayMediumWoff2],
  600: [RalewaySemiboldWoff, RalewaySemiboldWoff2],
  700: [RalewayBoldWoff, RalewayBoldWoff2],
}

const RalewayItalicWeights = {
  400: [RalewayRegularItalicWoff, RalewayRegularItalicWoff2],
  600: [RalewaySemiboldItalicWoff, RalewaySemiboldItalicWoff2],
}

const Raleway = {
  name: "Raleway",
  normal: RalewayNormalWeights,
  italic: RalewayItalicWeights,
}

const createFontFaces = (family, style = "normal") => {
  let styles = ""

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0]
    const woff2 = formats[1]

    styles += `
      ~font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
            url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `
  }

  return styles
}

const RalewayNormal = createFontFaces(Raleway)
const RalewayItalic = createFontFaces(Raleway, "italic")

const Fonts = css`
  ${RalewayNormal + RalewayItalic}
`

export default Fonts
