import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'

// border-radius: 0.25em;
// border: 2px solid palevioletred;
// background: ${props => (props.primary ? 'palevioletred' : 'white')};

const fontSizes = {}
// case 0: return 'palevioletred'
// case 1: return '#121212'
// case 2: return 'black'
// color: $props => {
// props.color === 2 ? 'black' : '#121212'
// }};
// background: ${props => (props.dark ? 'orange' : 'white')};
const Bttn = styled.input`
  font-size: ${props => {
    switch (props.fontSize) {
      case 0:
        return css`font-size: 12pt`
      case 1:
        return '24pt'
      case 2:
        return '48pt'
    }
  }};
`
// margin: ${props => {
// switch(props.margin){
// case 0: return '1px'
// case 1: return '3px'
// case 2: return '50px'
// }
// }};

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

      fontSize: this.props.fontSize ||button.fontSize,
      fontFamily: button.fontFamily,
      borderWidth: button.borderWidth,
      borderStyle: button.borderStyle,
      borderRadius: button.borderRadius,
      borderWidth: button.borderWidth,
      width: button.width,
      padding: button.padding,
      margin:button.margin
      // margin: '0 1em',
      // padding: '0.5em 2em',
    })
    const themes = {
      light: {
        borderColor: 'palevioletred',
        backgroundColor: '#fff',
        color: 'palevioletred',
        borderStyle: 'solid',
      },
      // borderRadius: '3px',
      // margin: '0 1em',
      // padding: '0.5em 2em',
      darkTheme: {
        borderColor: 'palevioletred',
        backgroundColor: '#121212',
        color: 'palevioletred',
      },
      // borderStyle: 'solid',
      // borderRadius: '3px',
      // margin: '0 1em',
      // padding: '0.5em 2em',
    }
    const { text, theme, dark, margin, fontSize } = this.props
    if (theme) {
      const finalTheme = themes.light
    } else {
      return (
        <Bttn
          type="button"
          onClick={this.handleClick}
          fontSize={fontSize}
          margin={margin}
          value={text}></Bttn>
      )
    }
    return (
      <Bttn
        style={createButtonStyleFromTheme(theme)}
        type="button"
        onClick={this.handleClick}
        fontSize={fontSize}
        margin={margin}
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

export default Button
