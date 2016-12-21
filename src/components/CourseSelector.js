import React from 'react';

import { request as xhr } from 'superagent';

import CourseList from './CourseList';

class CourseSelector extends React.Component {
  constructor() {
    super();

    this.switchDepartment = this.switchDepartment.bind(this);
    this.renderDepartmentSection = this.renderDepartmentSection.bind(this);

    this.state = {
      currentDepartment: null,
      courses: []
    };
  }

  switchDepartment(department) {
    this.setState({ currentDepartment: department });
  }

  renderDepartmentSection(currentDepartment) {
    return (
      <div className="pv3 measure">
        <h2 className="lh-title">{currentDepartment.name}</h2>

        <CourseList
          toggleInterestedCourse={this.props.toggleInterestedCourse}
          interestedCourses={this.props.interestedCourses}
          courses={this.props.courses}
        />
      </div>
    )
  }

  render() {
    let currentDepartment = this.props.departments.find((department) => department.code === this.state.currentDepartment);

    return (
      <div>
        <p className="measure-narrow lh-copy">Welcome to the course comparator. To begin, select a department whose courses you’d like to view.</p>

        <label htmlFor="department" className="db i">Department</label>
        <select id="department" className="w-100 mt2" onChange={(e) => this.switchDepartment(e.target.value)}>
          <option value={null}>---No department---</option>
          {
            this.props.departments.map((department) => {
              return <option key={department.code} value={department.code}>{department.name}</option>
            })
          }
        </select>

        {
          (typeof currentDepartment != 'undefined')
            ? this.renderDepartmentSection(currentDepartment)
            : null
        }
      </div>
    )
  }
}

export default CourseSelector;
