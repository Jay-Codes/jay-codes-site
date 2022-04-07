import React, { useContext } from 'react'
import { Intro ,About,Portfolio,Contacts,Toggle } from './components'
import { ThemeContext, ThemeProvider } from './Context'
const App = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div style={{
      backgroundColor: darkMode ? '#222' : 'white',
      color: darkMode ? 'white' : 'black'
    }}>
      <Toggle/>
      <Intro/>
      <About/>
      <Portfolio/>
      <Contacts/>
    </div>
  )
}

export default App