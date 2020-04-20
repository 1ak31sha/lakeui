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
    borderBottomColor,
    borderTopColor,
    borderLeftColor,
    borderRightColor,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft = undefined

  switch (position) {
    case "TOP":
      left = "50%"
      bottom = "100%"
      borderBottomColor = borderColor
      marginLeft = arrowSize
      break
    case "RIGHT":
      left = "100%"
      topp = "50%"
      borderLeftColor = borderColor
      marginTop = arrowSize
      break
    case "BOTTOM":
      break
    case "LEFT":
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
        &:after {
          border-bottom-color: ${color};
          border-left-color: ${borderLeftColor};
          border-width: ${arrowSize}px;
          margin-left: -${marginLeft}px;
          margin-top: -${marginTop}px;
        }
        &:before {
          border-bottom-color: ${borderColor};
          border-left-color: ${borderLeftColor};
          border-width: ${arrowSize + borderSize}px;
          margin-left: -${marginLeft + borderSize}px;
          margin-top: -${marginTop + borderSize}px;
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
