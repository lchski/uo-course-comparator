import React from 'react';

import classNames from 'classnames';

class BasicButton extends React.Component {
  render() {
    let buttonClasses = classNames({
      'input-reset f6 pa2 sans-serif pointer bg-light-gray hover-bg-moon-gray ba b--black': true,
      [this.props.className]: true
    });

    return <button onClick={this.props.onClick} className={buttonClasses}>{this.props.children}</button>
  }
}

BasicButton.defaultProps = {
  className: ''
};

export default BasicButton;
