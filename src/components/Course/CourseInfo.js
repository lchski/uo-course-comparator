import React from 'react';

import CourseInterestButton from './CourseInterestButton';

const CourseInfo = (props) => {
  return (
    <div className="pb4">
      <p className="lh-copy serif mb0">{props.course.description}</p>

      <ul className="list pl0 mt2">
        <li className="gray dib f6">{props.course.code}</li>
      </ul>

      <CourseInterestButton isAdded={props.isAdded} onClick={props.toggleInterestedCourse}/>
    </div>
  )
};

export default CourseInfo;
