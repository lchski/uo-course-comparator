import React from 'react';

import CourseList from '../components/CourseList';

class SelectedCourseViewer extends React.Component {
  constructor() {
    super();

    this.alterDisplayedDepartments = this.alterDisplayedDepartments.bind(this);

    this.state = {
      filteredCourses: [],
      filteredDepartments: [],
      displayedDepartments: new Set()
    };
  }

  componentDidMount() {
    const filteredCourses = this.props.courses.filter((course) => this.props.interestedCourses.includes(course.code));

    /**
     * Extract the departments from the courses marked as interesting.
     *
     * Pretty cool how this is done... We map the filteredCourses array from above,
     * to get just the first three characters of each course code. (These map to the
     * departments.) Then, we cast that to a Set, which can contain only unique values,
     * and spread it into an Array so that we have it in a more useful datatype.
     */
    const extractedDepartments = [...new Set(filteredCourses.map((course) => course.code.substring(0,3)))];

    const filteredDepartments = this.props.departments.filter((department) => extractedDepartments.includes(department.code));

    const displayedDepartments = new Set(filteredDepartments.map((department) => department.code));

    this.setState({ filteredCourses, filteredDepartments, displayedDepartments });
  }

  alterDisplayedDepartments(departmentCode, displayedState) {
    let displayedDepartments = new Set([...this.state.displayedDepartments]);

    if (true === displayedState) {
      displayedDepartments.add(departmentCode);
    } else {
      displayedDepartments.delete(departmentCode);
    }

    this.setState({ displayedDepartments });
  }

  render() {


    return (
      <div>
        <p className="measure-narrow lh-copy">Listed below are the courses you’ve marked as interesting.</p>

        {
          this.state.filteredDepartments.map((department) => {
            return (
              <div key={department.code} className="inline-flex items-center mr2 mt2">
                <label htmlFor={`department--${department.code}`} className="mr1 lh-copy f6">{department.name}</label>
                <input
                  type="checkbox"
                  name="department"
                  id={`department--${department.code}`}
                  checked={this.state.displayedDepartments.has(department.code)}
                  onChange={(e) => this.alterDisplayedDepartments(department.code, e.target.checked)}
                />
              </div>
            )
          })
        }

        <CourseList
          className="mt4"
          toggleInterestedCourse={this.props.toggleInterestedCourse}
          interestedCourses={this.props.interestedCourses}
          courses={this.state.filteredCourses.filter((course) => this.state.displayedDepartments.has(course.code.substr(0, 3)))}
        />
      </div>
    )
  }
}

export default SelectedCourseViewer;
