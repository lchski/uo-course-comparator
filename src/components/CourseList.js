import React from 'react';

import classNames from 'classnames';

import Course from './Course';

class CourseList extends React.Component {
  render() {
    let listClasses = classNames({
      'list pl0': true,
      [this.props.className]: true
    });

    return (
      <ol className={listClasses}>
        {
          this.props.courses.map((course) => <Course key={course.code} course={course} isOpen={Math.random() >= 0.5} isAdded={Math.random() >= 0.5}/>)
        }
      </ol>
    )
  }
}

CourseList.defaultProps = {
  className: ''
};

export default CourseList;
