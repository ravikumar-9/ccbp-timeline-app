// Write your code here

import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'

import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const renderTimelineCard = eachItem => {
    if (eachItem.categoryId === 'COURSE') {
      return <CourseTimelineCard details={eachItem} key={eachItem.id} />
    }
    return <ProjectTimelineCard projectDetails={eachItem} key={eachItem.id} />
  }

  const {timelineItemsList} = props
  return (
    <div className="bg-container">
      <h1 className="my-journey-heading">
        MY JOURNEY OF
        <br />
        CCBP 4.0
      </h1>

      <Chrono
        items={timelineItemsList}
        mode="VERTICAL_ALTERNATING"
        theme={{
          secondary: 'white',
        }}
      >
        {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
      </Chrono>
    </div>
  )
}

export default TimelineView
