import React, { useState } from 'react'


function Func() {
  const [index, setIndex] = useState(0)
  console.log(`function component`)
  // const [theme, setTheme] = useState()
  //const themes = {
  //  light: {
  //    button: {
  //      backgroundColor: '#121212',
  //      borderColor: 'palevioletred',
  //      color: 'palevioletred',
  //      fontSize: '21pt',
  //    },
  //  },
  //  dark: {
  //    button: {
  //      backgroundColor: '#202020',
  //      borderColor: '#131313',
  //      color: 'palevioletred',
  //      fontSize: '16pt',
  //      fontFamily: 'Avenir Next',
  //      borderRadius: '3px',
  //      width: '8em',
  //      padding: '0.5rem 0',
  //      margin: '0.5rem 1rem',
  //      borderWidth: '0.051em',
  //    },
  //  },
  //}

  // const toggleTheme = () => {
    // // // // // // // // console.log('new drip', index % 3)
    // setIndex(index => index + 1)
    // setTheme()
  //}

  return (
    <div className="">
      <br />
      <br />
      fontSize:{index}
    </div>
  )
}


/** SVG Eye Icon */
class EyeIcon2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
    console.log('constructor, props', props, `testing`)
  }
  static getDerivedStateFromProps(props, state){
    console.log('getderivedStateFromProps',props,state)
  }
  render() {
    console.log('render')
    return <h1>Hello,<Func/> </h1>
  }
}
// Attribution: Fabián Alexis at https://commons.wikimedia.org/wiki/File:Antu_view-preview.svg
// Mounting
// These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

export default EyeIcon2
