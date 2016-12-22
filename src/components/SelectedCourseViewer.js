import React from 'react';

import CourseList from './CourseList';

class SelectedCourseViewer extends React.Component {
  render() {
    let filteredCourses = this.props.courses.filter((course) => this.props.interestedCourses.includes(course.code));

    /**
     * Extract the departments from the courses marked as interesting.
     *
     * Pretty cool how this is done... We map the filteredCourses array from above,
     * to get just the first three characters of each course code. (These map to the
     * departments.) Then, we cast that to a Set, which can contain only unique values,
     * and spread it into an Array so that we have it in a more useful datatype.
     */
    let departments = [...new Set(filteredCourses.map((course) => course.code.substring(0,3)))];

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
