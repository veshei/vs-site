import React from "react"
import PropTypes from "prop-types"

import GlobalStyle from "~styles/globalStyles"
import { Nav, Footer, Social } from "~components/"

const Layout = ({ children }) => {
  return (
    <div id="root">
      <GlobalStyle />
      <Nav />
      <main> {children} </main>
      <Social />
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
