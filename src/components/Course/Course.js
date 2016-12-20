import React from 'react';

import classNames from 'classnames';

import CourseInfo from './CourseInfo';

class Course extends React.Component {
  render() {
    let headerClasses = classNames({
      'bb bw1 pb1 lh-title mt0 hover-black-80 pointer link': true,
      'black-50 b--black-40': !this.props.isOpen
    });

    return (
      <li className="b--black-30 pv1 mt2 measure" key={this.props.course.code}>
        <h3 className={headerClasses} onClick={this.props.toggleOpenState}>{this.props.course.title}</h3>

        {this.props.isOpen ? <CourseInfo {...this.props}/> : null}
      </li>
    )
  }
}

export default Course;
