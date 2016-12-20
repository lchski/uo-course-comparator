import React from 'react';

import CourseFilters from './CourseFilters';
import CourseList from './CourseList';
import BasicButton from './Buttons/BasicButton';

class CourseSelector extends React.Component {
  render() {
    return (
      <div>
        <p className="measure-narrow lh-copy">Welcome to the course comparator. To begin, select a department whose courses you’d like to view.</p>

        <label htmlFor="department" className="db i">Department</label>
        <select id="department" className="w-100 mt2">
          <option value="POL">Political Science</option>
        </select>

        <div className="pv3 measure">
          <h2 className="lh-title">Political Science</h2>

          <BasicButton>expand all</BasicButton>
          <BasicButton className="ml2">close all</BasicButton>

          <CourseFilters/>

          <CourseList courses={this.props.courses} className="mt4"/>
        </div>
      </div>
    )
  }
}

export default CourseSelector;
