import React from "react"
import styled from "styled-components"

const StyledBulletPoint = styled.div`
  position: relative;
  transform: rotate(90deg);
  width: 20.25px;
  height: 15px;
  border-left: 1px solid transparent;
  border-bottom: 1px solid var(--red-border);
  ::before {
    display: block;
    box-sizing: border-box;
    border-right: 1px solid transparent;
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    border-left: 1px solid var(--red-border);
    border-top: 1px solid var(--red-border);
    border-bottom: 1px solid transparent;
    transform: rotate(45deg) skew(-5deg, -5deg);
    left: 1.15px;
    bottom: -9px;
  }
`

const BulletPoint = () => {
  return <StyledBulletPoint />
}

export default BulletPoint
