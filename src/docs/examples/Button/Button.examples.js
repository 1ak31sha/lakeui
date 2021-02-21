import React, { useState } from 'react'
import Button from '@1ak31sha/ui/Button'

function ButtonContainer() {
  const [theme, setTheme] = useState(false)

  const toggleTheme = theme => {
    setTheme(!theme)
  }

  return (
    <div>
      <Button
        light={theme}
        text="Toggle Default Themes"
        onClick={() => {
          toggleTheme(theme)
        }}
      />
      <br />
      <Button
        text="Custom Theme"
        theme={{
          button: {
            backgroundColor: 'yellow',
            borderColor: 'black',
            color: 'blue',
            borderRadius: '0.07em'
          },
        }}
      />
    </div>
  )
}
export default function ButtonExample() {
  return <ButtonContainer />
}
