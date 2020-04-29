// http://www.cssarrowplease.com/
import React from "react"
import PropTypes from "prop-types"
import { css, cx } from "emotion"
import "./ArrowBox.css"
const arrowSize = 10
const ArrowBox = ({
  children,
  position,
  backgroundColor,
  borderWidth,
  borderColor,
  textColor,
  arrowSize
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
      borderBottomAfterColor = backgroundColor
      marginLeft = arrowSize
      break
    case "RIGHT":
      left = "100%"
      topp = "50%"
      borderLeftBeforeColor = borderColor
      borderLeftAfterColor = backgroundColor
      marginTop = arrowSize
      break
    case "BOTTOM":
      topp = "100%"
      left = "50%"
      borderTopBeforeColor = borderColor
      borderTopAfterColor = backgroundColor
      marginLeft = arrowSize
      break
    case "LEFT":
      right = "100%"
      topp = "50%"
      borderRightBeforeColor = borderColor
      borderRightAfterColor = backgroundColor
      marginTop = arrowSize
      break
    default:
      break
  }

  return (
    <div
      className={css`
        position: relative;
        background: ${backgroundColor};
        color: ${textColor};
        border: ${borderWidth}px solid ${borderColor};
        width: 200px;
        padding: 0.6rem;
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
          border-width: ${arrowSize + borderWidth}px;
          margin-left: -${marginLeft + borderWidth}px;
          margin-top: -${marginTop + borderWidth}px;
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

  /** the width of the arrow itself */
  arrowSize: PropTypes.number,

  /** The position of the Box's Arrow */
  position: PropTypes.string,

  /** The background color... */
  backgroundColor: PropTypes.string,

  /** The border width */
  borderWidth: PropTypes.number,

  /** the border color */
  borderColor: PropTypes.string,

  /** the text color */
  textColor: PropTypes.string,
}


ArrowBox.defaultProps = {
  arrowSize: 10,
  backgroundColor: "#FFF",
  borderColor: "palevioletred",
  borderWidth: 1,
  position: "BOTTOM",
  textColor: "#000",
}

export default ArrowBox
