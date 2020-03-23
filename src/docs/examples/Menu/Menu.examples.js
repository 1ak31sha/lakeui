import React, { useState } from 'react'
import Button from '@1ak31sha/ui/Menu'
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
    </div>
  )
}
export default function ButtonExample() {
  return <ButtonContainer />
}
