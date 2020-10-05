import React from "react"
import PropTypes from "prop-types"

import GlobalStyle from "~styles/globalStyles"
import Nav from "./nav"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div id="root">
      <GlobalStyle />
      <Nav />
      <main> {children} </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
