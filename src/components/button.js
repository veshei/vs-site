import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const ButtonContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 2.5rem;
  width: fit-content;
  padding: 0.5rem;
  border: 3px solid #8f1d14;
  cursor: pointer;
  font-weight: 700;
  color: var(--red);
  text-decoration: none;
`

const Button = ({ children, href }) => {
  return <ButtonContainer href={href}>{children}</ButtonContainer>
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.func.isRequired,
}

export default Button
