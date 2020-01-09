import React, { useState } from 'react'
import Button from '@1ak31sha/ui/Button'

function ButtonContainer() {
  const [theme, setTheme] = useState({
    button: {
      backgroundColor: 'white',
      borderColor: 'palevioletred',
      color: 'palevioletred',
    },
  })

  const toggleTheme = () => {
    setTheme({
      button: {
        backgroundColor: 'black',
        borderColor: 'palevioletred',
        color: 'palevioletred',
      },
    })
  }
  return (
    <div className="">
      <Button
        theme={theme}
        text="Calculate"
        onClick={()=>toggleTheme()}
      />
    </div>
  )
}
export default function ButtonExample() {
  return <ButtonContainer />
}
