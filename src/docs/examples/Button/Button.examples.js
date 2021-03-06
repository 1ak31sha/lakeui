import React, { useState } from 'react'
import Button from '@1ak31sha/ui/Button'

function ButtonContainer() {
  const [index, setIndex] = useState(0)
  const [theme, setTheme] = useState()
  // {
  // button: {
  // backgroundColor: 'white',
  // borderColor: 'palevioletred',
  // color: 'orange',
  // },
  // })
  const themes = {
    light: {
      button: {
        backgroundColor: '#121212',
        borderColor: 'palevioletred',
        color: 'palevioletred',
        fontSize: '21pt',
      },
    },
    dark: {
      button: {
        backgroundColor: '#202020',
        borderColor: '#131313',
        color: 'palevioletred',
        fontSize: '16pt',
        fontFamily: 'Avenir Next',
        borderRadius: '3px',
        width: '8em',
        padding: '0.5rem 0',
        margin: '0.5rem 1rem',
        borderWidth: '0.051em',
      },
    },
  }

  const toggleTheme = () => {
    console.log('new drip', index % 3)
    setIndex(index => index + 1)
    setTheme()
  }

  return (
    <div className="">
      <Button text="dark Theme" onClick={() => setTheme(themes.dark)} />
      <br />
      <Button
        color={'green'}
        fontSize={32}
        margin={index % 3}
        text="Calculate"
        theme={theme}
        onClick={() => toggleTheme()}
      />
      <Button
        color={index % 3}
        margin={index % 3}
        text="Calculate"
        onClick={() => toggleTheme()}
      />
      <br />
      fontSize:{index}
    </div>
  )
}
export default function ButtonExample() {
  return <ButtonContainer />
}
