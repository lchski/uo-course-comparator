import React from 'react';

import classNames from 'classnames';

import Course from './Course/Course';

class CourseList extends React.Component {
  constructor() {
    super();

    this.toggleOpenState = this.toggleOpenState.bind(this);

    this.state = {
      openCourses: []
    };
  }

  toggleOpenState(courseCode) {
    // Grab a copy of the openCourses state
    let openCourses = [...this.state.openCourses];
    const courseIndex = openCourses.indexOf(courseCode);

    if (courseIndex === -1) {
      // If course isn't in the list (i.e. it isn't open yet), let's add it to the list
      openCourses.push(courseCode);
    } else {
      // If the course is in the list, let's remove it
      openCourses.splice(courseIndex, 1);
    }

    this.setState({ openCourses });
  }

  render() {
    let listClasses = classNames({
      'list pl0': true,
      [this.props.className]: true
    });

    return (
      <ol className={listClasses}>
        {
          this.props.courses.map((course) => {
            let isOpen = this.state.openCourses.includes(course.code);
            let boundToggleOpenState= this.toggleOpenState.bind(null, course.code);

            return <Course
              key={course.code}
              course={course}
              isOpen={isOpen}
              isAdded={Math.random() >= 0.5}
              toggleOpenState={boundToggleOpenState}
            />
          })
        }
      </ol>
    )
  }
}

CourseList.defaultProps = {
  className: ''
};

export default CourseList;
