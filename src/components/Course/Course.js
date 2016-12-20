import React from 'react';

import classNames from 'classnames';

import CourseInterestButton from './CourseInterestButton';

class Course extends React.Component {
  constructor() {
    super();

    this.renderCourseInfo = this.renderCourseInfo.bind(this);
  }

  renderCourseInfo() {
    return (
      <div className="pb4">
        <p className="lh-copy serif mb0">{this.props.course.description}</p>

        <ul className="list pl0 mt2">
          <li className="gray dib f6">{this.props.course.code}</li>
        </ul>

        {CourseInterestButton(this.props.isAdded)}
      </div>
    )
  }

  render() {
    let headerClasses = classNames({
      'bb bw1 pb1 lh-title mt0 hover-black-80 pointer link': true,
      'black-50 b--black-40': !this.props.isOpen
    });

    return (
      <li className="b--black-30 pv1 mt2 measure" key={this.props.course.code}>
        <h3 className={headerClasses} onClick={this.props.toggleOpenState}>{this.props.course.title}</h3>

        {this.props.isOpen ? this.renderCourseInfo() : null}
      </li>
    )
  }
}

export default Course;
