import React from 'react'
import './style.css'
import Project from './project/Project'
import {Projects as projects} from '../../data'

const Portfolio = () => {
  return (
      <div className="pl">
          <div className="pl-text">
              <h1 className="pl-title">Here Are My Sample Projects</h1>
              <p className="pl-desc"> These Are The projects that I have officially completed in the past 2 years</p>
          </div>
          <div className="pl-list">
            {projects.map((project)=>(<Project key={project.id} project={project}/>))}
          </div>
      </div>
  )
}

export default Portfolio