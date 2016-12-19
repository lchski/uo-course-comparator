import React from 'react';

import CourseFilters from './CourseFilters';
import Course from './Course';

class SelectedCourseViewer extends React.Component {
  render() {
    return (
      <div>
        <p className="measure-narrow lh-copy">Listed below are the courses you’ve marked as interesting.</p>

        <div>
          <button className="input-reset f6 pa2 sans-serif pointer bg-light-gray ba b--black">expand all</button>
          <button className="input-reset f6 pa2 sans-serif pointer bg-light-gray ba b--black ml2">close all</button>

          <CourseFilters/>

          <ol className="list pl0 mt4">
            {
              this.props.courses.map((course) => <Course course={course} isOpen={Math.random() >= 0.5} isAdded={Math.random() >= 0.5}/>)
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default SelectedCourseViewer;
