import React from 'react';

import CourseFilters from './CourseFilters';
import CourseList from './CourseList';

class SelectedCourseViewer extends React.Component {
  render() {
    return (
      <div>
        <p className="measure-narrow lh-copy">Listed below are the courses you’ve marked as interesting.</p>

        <div>
          <button className="input-reset f6 pa2 sans-serif pointer bg-light-gray ba b--black">expand all</button>
          <button className="input-reset f6 pa2 sans-serif pointer bg-light-gray ba b--black ml2">close all</button>

          <CourseFilters/>

          <CourseList courses={this.props.courses} className="mt4"/>
        </div>
      </div>
    )
  }
}

export default SelectedCourseViewer;
