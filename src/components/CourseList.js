import React from 'react';

import classNames from 'classnames';

import CourseFilters from './CourseFilters';
import BasicButton from './Buttons/BasicButton';

import Course from './Course/Course';

class CourseList extends React.Component {
  constructor() {
    super();

    this.toggleOpenState = this.toggleOpenState.bind(this);
    this.openAllCourses = this.openAllCourses.bind(this);
    this.closeAllCourses = this.closeAllCourses.bind(this);
    this.alterFilterState = this.alterFilterState.bind(this);

    this.state = {
      openCourses: [],
      filters: {
        search: '',
        language: ['english', 'french'],
        year: ['1', '2', '3', '4']
      }
    };
  }

  toggleOpenState(courseCode) {
    // Grab a copy of the openCourses state
    let openCourses = [...this.state.openCourses];
    const courseIndex = openCourses.indexOf(courseCode);

    if (courseIndex === -1) {
      // If course isn't in the list (i.e. it isn't open yet), let's add it to the list
      openCourses.push(courseCode);
    } else {
      // If the course is in the list, let's remove it
      openCourses.splice(courseIndex, 1);
    }

    this.setState({ openCourses });
  }

  openAllCourses() {
    let openCourses = this.props.courses.map((course) => course.code);

    this.setState({ openCourses });
  }

  closeAllCourses() {
    let openCourses = [];

    this.setState({ openCourses });
  }

  alterFilterState(action, payload) {
    let filters = {...this.state.filters};

    switch (action) {
      case 'UPDATE_SEARCH':
        filters.search = payload.value;
        break;
    }

    this.setState({ filters });
  }

  render() {
    let wrapperClasses = classNames({
      [this.props.className]: true
    });

    return (
      <div className={wrapperClasses}>
        <BasicButton onClick={this.openAllCourses}>expand all</BasicButton>
        <BasicButton onClick={this.closeAllCourses} className="ml2">close all</BasicButton>

        <CourseFilters activeFilters={this.state.filters} alterFilterState={this.alterFilterState}/>

        <ol className="list pl0 mt4">
          {
            this.props.courses.map((course) => {
              let isOpen = this.state.openCourses.includes(course.code);
              let boundToggleOpenState= this.toggleOpenState.bind(null, course.code);

              return <Course
                key={course.code}
                course={course}
                isOpen={isOpen}
                isAdded={Math.random() >= 0.5}
                toggleOpenState={boundToggleOpenState}
              />
            })
          }
        </ol>
      </div>
    )
  }
}

CourseList.defaultProps = {
  className: ''
};

export default CourseList;
