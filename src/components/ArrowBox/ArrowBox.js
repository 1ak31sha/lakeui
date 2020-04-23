import React from "react"
import PropTypes from "prop-types"
import { css, cx } from "emotion"
import "./ArrowBox.css"
const arrowSize = 10
const borderSize = 1
const ArrowBox = ({
  children,
  position,
  size,
  color,
  borderWidth,
  borderColor,
}) => {
  let left,
    bottom,
    topp,
    right,
    borderBottomBeforeColor,
    borderBottomAfterColor,
    borderTopBeforeColor,
    borderTopAfterColor,
    borderLeftBeforeColor,
    borderLeftAfterColor,
    borderRightBeforeColor,
    borderRightAfterColor,
    marginTop,
    marginLeft = undefined

  switch (position) {
    case "TOP":
      left = "50%"
      bottom = "100%"
      borderBottomBeforeColor = borderColor
      borderBottomAfterColor = color
      marginLeft = arrowSize
      break
    case "RIGHT":
      left = "100%"
      topp = "50%"
      borderLeftBeforeColor = borderColor
      borderLeftAfterColor = color
      marginTop = arrowSize
      break
    case "BOTTOM":
      topp = "100%"
      left = "50%"
      borderTopBeforeColor = borderColor
      borderTopAfterColor = color
      marginLeft = arrowSize
      break
    case "LEFT":
      right = "100%"
      topp = "50%"
      borderRightBeforeColor = borderColor
      borderRightAfterColor = color
      marginTop = arrowSize
      break
    default:
      break
  }

  return (
    <div
      className={css`
        position: relative;
        background: ${color};
        border: ${borderSize}px solid ${borderColor};
        height: 100px;
        width: 200px;
        &:after,
        &:before {
          left: ${left};
          bottom: ${bottom};
          right: ${right};
          top: ${topp};
          border: solid transparent;
          content: " ";
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
        }
        &:before {
          border-bottom-color: ${borderBottomBeforeColor};
          border-left-color: ${borderLeftBeforeColor};
          border-top-color: ${borderTopBeforeColor};
          border-right-color: ${borderRightBeforeColor};
          border-width: ${arrowSize + borderSize}px;
          margin-left: -${marginLeft + borderSize}px;
          margin-top: -${marginTop + borderSize}px;
        }
        &:after {
          border-bottom-color: ${borderBottomAfterColor};
          border-left-color: ${borderLeftAfterColor};
          border-top-color: ${borderTopAfterColor};
          border-right-color: ${borderRightAfterColor};
          border-width: ${arrowSize}px;
          margin-left: -${marginLeft}px;
          margin-top: -${marginTop}px;
        }
      `}
    >
      {children}
    </div>
  )
}

ArrowBox.propTypes = {
  /** the text to show on the button */
  text: PropTypes.string,

  theme: PropTypes.object,
}

ArrowBox.defaultProps = {
  text: "Click me",

  theme: {
    button: {},
  },
}

export default ArrowBox
