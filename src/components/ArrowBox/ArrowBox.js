import React from 'react'
import PropTypes from 'prop-types'
import './ArrowBox.css'
// import ReactLogo from  './action-popup-frame.svg'
class Button extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="flexbox">
          <div class="arrow_box">test</div>
        </div>
      </React.Fragment>
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
