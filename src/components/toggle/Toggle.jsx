import React, { useContext } from 'react'
import './style.css'
import sun from '../../img/sun.png'
import moon from '../../img/moon.png'
import { ThemeContext } from '../../Context'
const Toggle = () => {  
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    const handleClick = ()=> {
        theme.dispatch({type:"TOGGLE"})
    }
  return (
    <div className="t">
        <img src={sun} alt="" className="t-icon" />
        <img src={moon} alt="" className="t-icon" />
        <div className="t-button" onClick={handleClick} style={{
            left: darkMode ? '0px': '25px'
        }}></div>
    </div>
  )
}

export default Toggle