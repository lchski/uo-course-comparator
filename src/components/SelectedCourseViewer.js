import React from 'react';

import CourseList from './CourseList';

class SelectedCourseViewer extends React.Component {
  render() {
    let filteredCourses = this.props.courses.filter((course) => this.props.interestedCourses.includes(course.code));

    return (
      <div>
        <p className="measure-narrow lh-copy">Listed below are the courses you’ve marked as interesting.</p>

        <CourseList
          toggleInterestedCourse={this.props.toggleInterestedCourse}
          interestedCourses={this.props.interestedCourses}
          courses={filteredCourses}
        />
      </div>
    )
  }
}

export default SelectedCourseViewer;
