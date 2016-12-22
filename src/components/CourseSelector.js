import React from 'react';

import request from 'superagent';

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

  componentWillMount() {
    // Grab a reference to the stored department
    const localStorageDepartment = localStorage.getItem('selected-department');

    // Check if we've actually stored a department
    if (localStorageDepartment) {
      // Set our component state to match the stored one
      this.switchDepartment(JSON.parse(localStorageDepartment));
    }
  }

  componentDidUpdate() {
    // Update our stored department
    localStorage.setItem('selected-department', JSON.stringify(this.state.currentDepartment));
  }

  switchDepartment(newDepartmentCode) {
    if (typeof this.props.departments.find((department) => department.code === newDepartmentCode) != 'undefined') {
      request.get(`${process.env.PUBLIC_URL}/data/${newDepartmentCode}.json`)
        .then((success) => {
          this.setState({
            courses: success.body
          });
        }, (failure) => {
          console.log('Bah!', failure);
        });
    }

    this.setState({ currentDepartment: newDepartmentCode });
  }

  renderDepartmentSection(currentDepartment) {
    return (
      <div className="pv3 measure">
        <h2 className="lh-title">{currentDepartment.name}</h2>

        <CourseList
          toggleInterestedCourse={this.props.toggleInterestedCourse}
          interestedCourses={this.props.interestedCourses}
          courses={this.state.courses}
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
        <select
          id="department"
          className="w-100 mt2"
          onChange={(e) => this.switchDepartment(e.target.value)}
          value={this.state.currentDepartment}
        >
          <option value={0}>---No department---</option>
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
