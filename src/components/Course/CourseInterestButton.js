import React from 'react';

import classNames from 'classnames';

import BasicButton from '../Buttons/BasicButton';

const CourseInterestButton = (props) => {
  let buttonOuterClasses = classNames({
    'mt3 db pv2 w-100 bw1 grow relative': true,
    'bg-light-red': props.isAdded,
    'bg-light-green': !props.isAdded
  });

  let buttonIconClasses = classNames({
    'absolute left-0 pa2 bg-black-60 br b--black bw1 white top-0 b': true
  });

  let buttonIconContent = (props.isAdded)
    ? '−'
    : '+';

  let buttonTextContent = (props.isAdded)
    ? 'Not cool!'
    : 'I’m interested!';

  return (
    <BasicButton className={buttonOuterClasses}><span className={buttonIconClasses}>{buttonIconContent}</span> {buttonTextContent}</BasicButton>
  )
};

export default CourseInterestButton;
