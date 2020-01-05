import React, { useState } from 'react'
import Button from '@1ak31sha/ui/Button'

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

function ButtonContainer() {
  const [count, setCount] = useState(0)

  const theme = {
    button: {
      backgroundColor: 'white',
      borderColor: 'red',
      color: 'blue',
    },
  }
  const theme2 = {
    button: {
      backgroundColor: 'white',
      borderColor: 'red',
      color: 'black',
    },
  }
  let curTheme = theme
  const toggleTheme = () => {
    curTheme = theme2
  }
  console.log(count)
  return (
    <div className="">
      <Button
        theme={curTheme}
        text="Calculate"
        onClick={() => setCount(count + 1)}
      />
    </div>
  )
}
export default function ButtonExample() {
  return <ButtonContainer />
}
