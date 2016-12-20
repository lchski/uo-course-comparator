import React from 'react';

import classNames from 'classnames';

import Course from './Course';

class CourseList extends React.Component {
  constructor() {
    super();

    this.state = {
      openCourses: []
    };
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

            return <Course
              key={course.code}
              course={course}
              isOpen={isOpen}
              isAdded={Math.random() >= 0.5}
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
