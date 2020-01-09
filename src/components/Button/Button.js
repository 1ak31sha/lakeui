import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// color: palevioletred;
// border-radius: 0.25em;
// background: ${props => (props.primary ? 'palevioletred' : 'white')};
// border: 2px solid palevioletred;
const Bttn = styled.input``

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
      backgroundColor: button.backgroundColor,
      color: button.color,
      borderWidth: button.borderWidth,
      borderStyle: button.borderStyle,
      borderRadius: '3px',
      margin: '0 1em',
      padding: '0.5em 2em',
    })
    const defaultTheme = {
      borderColor: 'palevioletred',
      backgroundColor: '#fff',
      color: 'palevioletred',
      borderStyle: 'solid',
      borderRadius: '3px',
      margin: '0 1em',
      padding: '0.5em 2em',
    }
    const darkTheme = {
      borderColor: 'palevioletred',
      backgroundColor: '#121212',
      color: 'palevioletred',
      borderStyle: 'solid',
      borderRadius: '3px',
      margin: '0 1em',
      padding: '0.5em 2em',
    }
    const { text, theme, dark } = this.props
    const finalTheme = defaultTheme

    return (
      <Bttn
        style={createButtonStyleFromTheme(theme)}
        type="button"
        onClick={this.handleClick}
        value={text}></Bttn>
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
    button: {
      backgroundColor: 'white',
      borderColor: 'red',
      color: 'blue',
    },
  },
}

export default Button
