// Write your code here

import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  console.log(props)
  const {projectDetails} = props

  const {
    duration,
    description,
    projectTitle,
    imageUrl,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-card">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="title-container">
        <h1 className="project-name">{projectTitle}</h1>
        <div className="time-container">
          <AiFillCalendar />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
