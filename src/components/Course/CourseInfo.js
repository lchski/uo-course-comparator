import React from 'react';

import CourseInterestButton from './CourseInterestButton';

const CourseInfo = (props) => {
  return (
    <div className="pb4">
      <p className="lh-copy serif mb0">{props.course.description}</p>

      <div className="pt2 mt3 bt bw1 b--light-gray">
        {props.course.extraDetails.map((detail, index) => <p key={props.course.code + index} className="mt2 mb0 lh-copy sans-serif gray f6">{detail}</p>)}

        <ul className="list pl0 mt2">
          <li className="gray dib f6 mr3">{props.course.code}</li>
          <li className="gray dib f6">Year {props.course.year}</li>
        </ul>
      </div>

      <CourseInterestButton isAdded={props.isAdded} onClick={props.toggleInterestedCourse}/>
    </div>
  )
};

export default CourseInfo;
