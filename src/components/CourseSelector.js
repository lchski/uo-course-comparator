import React from 'react';

import CourseList from './CourseList';

class CourseSelector extends React.Component {
  render() {
    return (
      <div>
        <p className="measure-narrow lh-copy">Welcome to the course comparator. To begin, select a department whose courses you’d like to view.</p>

        <label htmlFor="department" className="db i">Department</label>
        <select id="department" className="w-100 mt2">
          {
            this.props.departments.map((department) => {
              return <option key={department.code} value={department.code}>{department.name}</option>
            })
          }
        </select>

        <div className="pv3 measure">
          <h2 className="lh-title">Political Science</h2>

          <CourseList
            toggleInterestedCourse={this.props.toggleInterestedCourse}
            interestedCourses={this.props.interestedCourses}
            courses={this.props.courses}
          />
        </div>
      </div>
    )
  }
}

export default CourseSelector;
