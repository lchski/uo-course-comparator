import React from 'react';

import CourseList from './CourseList';

class SelectedCourseViewer extends React.Component {
  render() {
    return (
      <div>
        <p className="measure-narrow lh-copy">Listed below are the courses you’ve marked as interesting.</p>

        <CourseList
          toggleInterestedCourse={this.props.toggleInterestedCourse}
          interestedCourses={this.props.interestedCourses}
          courses={this.props.courses}
        />
      </div>
    )
  }
}

export default SelectedCourseViewer;
