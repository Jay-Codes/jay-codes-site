import React from 'react'
import './style.css'
const Project = ({project}) => {
  return (
    <div className='p'>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href="google.com" target='_blank'>
          <img src={project.image} alt="" className="p-img" />
      </a>
    </div>
  )
}

export default Project