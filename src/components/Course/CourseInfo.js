import React from 'react';

import CourseInterestButton from './CourseInterestButton';

const CourseInfo = (props) => {
  return (
    <div className="pb4">
      <p className="lh-copy serif mb0">{props.course.description}</p>

      <p className="lh-copy sans-serif gray f6 bt pt2 bw1 b--light-gray">{props.course.restriction}</p>

      <ul className="list pl0 mt2">
        <li className="gray dib f6 mr3">{props.course.code}</li>
        <li className="gray dib f6">Year {props.course.year}</li>
      </ul>

      <CourseInterestButton isAdded={props.isAdded} onClick={props.toggleInterestedCourse}/>
    </div>
  )
};

export default CourseInfo;
