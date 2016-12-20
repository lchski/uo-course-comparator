import React from 'react';

import CourseList from './CourseList';

class SelectedCourseViewer extends React.Component {
  render() {
    return (
      <div>
        <p className="measure-narrow lh-copy">Listed below are the courses you’ve marked as interesting.</p>

        <CourseList courses={this.props.courses} className="mt4"/>
      </div>
    )
  }
}

export default SelectedCourseViewer;
