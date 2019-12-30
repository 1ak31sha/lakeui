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
  render() {
    const createButtonStyleFromTheme = ({ button }) => ({
      borderColor: button.borderColor,
      backgroundColor: button.backgroundColor,
      color: button.color,
      borderWidth: '2px',
      borderStyle: 'solid',
    })
    const { text, theme } = this.props
    return (
      <Bttn
        style={createButtonStyleFromTheme(theme)}
        type="button"
        value={text}></Bttn>
    )
  }
}

Button.propTypes = {
  /** the text to show on the button */
  text: PropTypes.string,

  theme: PropTypes.Object
}

Button.defaultProps = {
  text: 'Click me',

  theme: {
    button: {
      // backgroundColor: "white",
      // borderColor: "red",
      // color: "blue"
    },
  },
}

export default Button
