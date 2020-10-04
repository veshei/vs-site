import React from "react"

import GlobalStyle from "~styles/globalStyles"
import Nav from "./nav"

const Layout = () => {
  return (
    <div id="root">
      <GlobalStyle />
      <Nav />
    </div>
  )
}

export default Layout
