import React from 'react';

import CourseList from './CourseList';

class SelectedCourseViewer extends React.Component {
  constructor() {
    super();

    this.alterDisplayedDepartments = this.alterDisplayedDepartments.bind(this);

    this.state = {
      displayedDepartments: []
    };
  }

  alterDisplayedDepartments(selectedDepartments) {
    let extractedDepartmentCodes = [];

    for (let i = 0; i < selectedDepartments.length; i++) {
      extractedDepartmentCodes.push(selectedDepartments[i].value);
    }

    this.setState({
      displayedDepartments: extractedDepartmentCodes
    });
  }

  render() {
    let filteredCourses = this.props.courses.filter((course) => this.props.interestedCourses.includes(course.code));

    /**
     * Extract the departments from the courses marked as interesting.
     *
     * Pretty cool how this is done... We map the filteredCourses array from above,
     * to get just the first three characters of each course code. (These map to the
     * departments.) Then, we cast that to a Set, which can contain only unique values,
     * and spread it into an Array so that we have it in a more useful datatype.
     */
    let extractedDepartments = [...new Set(filteredCourses.map((course) => course.code.substring(0,3)))];

    let filteredDepartments = this.props.departments.filter((department) => extractedDepartments.includes(department.code));

    return (
      <div>
        <p className="measure-narrow lh-copy">Listed below are the courses you’ve marked as interesting.</p>

        <select
          id="department"
          className="w-100 mt1 mb4"
          onChange={(e) => this.alterDisplayedDepartments(e.target.selectedOptions)}
          multiple={true}
        >
          {
            filteredDepartments.map((department) => {
              return <option className="pa2" key={department.code} value={department.code}>{department.name}</option>
            })
          }
        </select>

        <CourseList
          toggleInterestedCourse={this.props.toggleInterestedCourse}
          interestedCourses={this.props.interestedCourses}
          courses={filteredCourses}
        />
      </div>
    )
  }
}

export default SelectedCourseViewer;
