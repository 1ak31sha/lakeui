import React from 'react'
import PropTypes from 'prop-types'

class Button extends React.Component {
  handleClick = reactSyntheticEvent => {
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

      borderWidth: button.borderWidth || '2.1px',
      borderStyle: button.borderStyle,
      borderRadius: button.borderRadius || '1rem',

      width: button.width,
      padding: button.padding || '0.14em',
      paddingLeft: '1em',
      paddingRight: '1em',
      margin: button.margin || '0.22em',
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

  theme: {
    button: {},
  },
}

export default Button
