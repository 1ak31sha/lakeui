import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Bttn = styled.input`
  color: palevioletred;
  border-radius: 0.25em;
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  border: 2px solid palevioletred;
`

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
      color: button.color || 'palevioletred',
      borderWidth: '2px',
      borderStyle: 'solid',
      // background: transparent;
  borderRadius: '3px',
  border: '2px solid palevioletred',
  margin: '0 1em',
  padding: '0.5em 2em',

    })
    const { text, theme } = this.props
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

  theme: PropTypes.object
}

Button.defaultProps = {
  text: 'Click me',

  theme: {
    button: {
      backgroundColor: "white",
      borderColor: "red",
      color: "blue"
    },
  },
}

export default Button
