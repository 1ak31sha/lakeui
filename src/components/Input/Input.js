import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledInput = styled.input`
  background-color: #464646;
  color: #a6e22d;
  border: 0;
  height: 38px;
  margin: 0.3em;
  border-radius: 0.2em;
`
class Input extends React.Component {
  render() {
    console.log('rendering')
    const {
      value,
      doesRender,
      placeholder,
      onChange,
      debug,
    } = this.props
    if (debug) {
      console.log(onChange)
    }
    console.log(this.props)
    return (
      <React.Fragment>
        {/*
        <>asdf</>
            */}
      {doesRender && (
          <StyledInput
            value={value}
            placeholder={placeholder}
            type="text"
            onChange={this.typing}
            size={16}
          />
        )}
      </React.Fragment>
    )
  }
  typing = evt => {
    const { type, onChange, debug } = this.props
    if (debug) {
      console.log(evt.target.value)
    }
    return onChange(evt.target.value, type)
  }
}


Input.propTypes = {
  doesRender: PropTypes.bool
}
// Input.defaultProps = {
  // doesRender: true,
// 
// }
 Input.defaultProps = {
 doesRender: true,
 }

export default Input
