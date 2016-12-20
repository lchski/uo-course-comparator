import React from 'react';

import classNames from 'classnames';

import BasicButton from '../Buttons/BasicButton';

class Course extends React.Component {
  constructor() {
    super();

    this.renderCourseButton = this.renderCourseButton.bind(this);
    this.renderCourseInfo = this.renderCourseInfo.bind(this);
  }

  renderCourseButton() {
    let buttonOuterClasses = classNames({
      'mt3 db pv2 w-100 bw1 grow relative': true,
      'bg-light-red': this.props.isAdded,
      'bg-light-green': !this.props.isAdded
    });

    let buttonIconClasses = classNames({
      'absolute left-0 pa2 bg-black-60 br b--black bw1 white top-0 b': true
    });

    let buttonIconContent = (this.props.isAdded)
      ? '−'
      : '+';

    let buttonTextContent = (this.props.isAdded)
      ? 'Not cool!'
      : 'I’m interested!';

    return (
      <BasicButton className={buttonOuterClasses}><span className={buttonIconClasses}>{buttonIconContent}</span> {buttonTextContent}</BasicButton>
    )
  }

  renderCourseInfo() {
    return (
      <div className="pb4">
        <p className="lh-copy serif mb0">{this.props.course.description}</p>

        <ul className="list pl0 mt2">
          <li className="gray dib f6">{this.props.course.code}</li>
        </ul>

        {this.renderCourseButton(this.props.isAdded)}
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
