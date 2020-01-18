import React from 'react'
import PropTypes from 'prop-types'
// import styled, {css} from 'styled-components'


class Lifecycle extends React.Component {
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

      fontSize: this.props.fontSize ||button.fontSize,
      fontFamily: button.fontFamily,
      borderWidth: button.borderWidth,
      borderStyle: button.borderStyle,
      borderRadius: button.borderRadius,
      borderWidth: button.borderWidth,
      width: button.width,
      padding: button.padding,
      margin:button.margin
    })
    const themes = {
      light: {
        borderColor: 'palevioletred',
        backgroundColor: '#fff',
        color: 'palevioletred',
        borderStyle: 'solid',
      },
      darkTheme: {
        borderColor: 'palevioletred',
        backgroundColor: '#121212',
        color: 'palevioletred',
      },
    }
    const { text, theme, dark, margin, fontSize } = this.props
    if (theme) {
      const finalTheme = themes.light
    } else {
      return (
        <div
          onClick={this.handleClick}
          >Lifecycle</div>
      )
    }
    return (
      <div
        style={createButtonStyleFromTheme(theme)}
        onClick={this.handleClick}
        >Lifecycle</div>
    )
  }
}

Lifecycle.propTypes = {
  /** the text to show on the button */
}

Lifecycle.defaultProps = {

  theme: {
    button: {
      backgroundColor: 'white',
      borderColor: 'palevioletred',
      color: 'palevioletred',
      fontSize: '16pt',
      fontFamily: 'Avenir Next',
      borderRadius: '3px',
      width: '8em',
      padding: '0.5rem 0',
      margin: '0.5rem 1rem',
      borderWidth: '0.051em'
    },
  },
}

export default Lifecycle
