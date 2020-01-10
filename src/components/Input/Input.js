import React from 'react'
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
      label,
      value,
      render,
      placeholder,
      onChange,
      autofocus,
      debug,
    } = this.props
    if (debug) {
      console.log(onChange)
    }

    return (
      <React.Fragment>
        {render && (
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

export default Input
