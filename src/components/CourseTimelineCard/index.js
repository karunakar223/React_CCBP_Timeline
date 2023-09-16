// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import {
  CourseTitleContainer,
  CourseTitle,
  DurationContainer,
  Duration,
  CourseDescription,
  CourseTagList,
  CourseTagItem,
  CourseTag,
} from './styledComponents'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <>
      <CourseTitleContainer>
        <CourseTitle>{courseTitle}</CourseTitle>
        <DurationContainer>
          <AiFillClockCircle color="#171f46" />
          <Duration>{duration}</Duration>
        </DurationContainer>
      </CourseTitleContainer>
      <CourseDescription>{description}</CourseDescription>
      <CourseTagList>
        {tagsList.map(eachTag => (
          <CourseTagItem key={eachTag.id}>
            <CourseTag>{eachTag.name}</CourseTag>
          </CourseTagItem>
        ))}
      </CourseTagList>
    </>
  )
}
export default CourseTimelineCard
