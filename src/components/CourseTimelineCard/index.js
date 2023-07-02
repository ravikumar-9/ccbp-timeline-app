// Write your code here

import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  console.log(props)

  const {details} = props

  const {duration, description, courseTitle, tagsList} = details

  console.log(details)

  return (
    <>
      <div className="project-card">
        <div className="title-container">
          <h1 className="project-name">{courseTitle}</h1>
          <div className="time-container">
            <AiFillClockCircle />
            <p className="duration">{duration}</p>
          </div>
        </div>
        <p className="description">{description}</p>
        <div className="tags-container">
          {tagsList.map(eachTag => (
            <p key={eachTag.id} className="tag-name">
              {eachTag.name}
            </p>
          ))}
        </div>
      </div>
    </>
  )
}

export default CourseTimelineCard
