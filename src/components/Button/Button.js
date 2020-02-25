import React from 'react'
import PropTypes from 'prop-types'
// import styled, { css } from 'styled-components'

/** Password input with integrated label, quality tips, and show password toggle. */
class Button extends React.Component {
  handleClick = reactSyntheticEvent => {
    // eslint-disable-next-line no-use-before-define
    const { onClick } = this.props
    if (onClick) {
      onClick()
    }
  }

  render() {
    const createButtonStyleFromTheme = ({ button }) => ({
      borderColor: button.borderColor,
      backgroundColor: this.props.color || button.backgroundColor,
      color: button.color,

      fontSize: this.props.fontSize || button.fontSize,
      fontFamily: button.fontFamily,
      borderWidth: button.borderWidth,
      borderStyle: button.borderStyle,
      borderRadius: button.borderRadius,
      width: button.width || "9rem",
      padding: button.padding,
      margin: button.margin,
    })
    const { text, theme } = this.props // dark
    if (theme) {
      return (
        <input
          style={createButtonStyleFromTheme(theme)}
          type="button"
          onClick={this.handleClick}
          value={text}></input>
      )
    } else {
      return (
        <input
          type="button"
          onClick={this.handleClick}
          value={text}></input>
      )
    }
  }
}

Button.propTypes = {
  /** the text to show on the button */
  text: PropTypes.string,

  theme: PropTypes.object,
}

Button.defaultProps = {
  text: 'Click me',

  theme: {
    button: {
      backgroundColor: 'black',
      borderColor: 'palevioletred',
      color: 'palevioletred',
      fontSize: '18pt',
      fontFamily: 'Avenir Next',
      borderRadius: '3px',
      padding: '0.5rem 0',
      margin: '0.5rem 1rem',
      borderWidth: '0.240rem',
    },
  },
}

export default Button
