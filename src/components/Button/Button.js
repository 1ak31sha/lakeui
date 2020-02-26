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
    const lightTheme = {
      button: {
        backgroundColor: 'white',
        color: 'palevioletred',
      },
    }
    const createButtonStyleFromTheme = ({ button }) => ({
      backgroundColor: button.backgroundColor || 'black',
      borderColor: button.borderColor || 'palevioletred',
      color: button.color || 'palevioletred',

      fontSize: button.fontSize || '18pt',
      fontFamily: button.fontFamily || 'verdana',

      borderWidth: button.borderWidth,
      borderStyle: button.borderStyle,
      borderRadius: button.borderRadius,

      width: button.width || '9rem',
      padding: button.padding,
      margin: button.margin,
    })
    const { text, theme, light } = this.props // dark
    console.log(createButtonStyleFromTheme(theme))
    console.log(light)
    return (
      <input
        style={
          light
            ? createButtonStyleFromTheme(lightTheme)
            : createButtonStyleFromTheme(theme)
        }
        type="button"
        onClick={this.handleClick}
        value={text}></input>
    )
  }
}

Button.propTypes = {
  /** the text to show on the button */
  text: PropTypes.string,

  theme: PropTypes.object,
}

Button.defaultProps = {
  text: 'Click me',

  // TODO remove this most likely
  theme: {
    button: {
      // backgroundColor: 'black',
      // borderColor: 'palevioletred',
      // color: 'palevioletred',
      // fontSize: '18pt',
      // fontFamily: 'Avenir Next',
      // borderRadius: '3px',
      // padding: '0.5rem 0',
      // margin: '0.5rem 1rem',
      // borderWidth: '0.240rem',
    },
  },
}

export default Button
