import React from 'react';
import { Link, Match, Miss } from 'react-router';

import departments from '../data/departments';
import compiledCourses from '../data/courses.json';

import 'tachyons';

import CourseSelector from './CourseSelector';
import SelectedCourseViewer from './SelectedCourseViewer';

class App extends React.Component {
  constructor() {
    super();

    this.toggleInterestedCourse = this.toggleInterestedCourse.bind(this);

    this.state = {
      interestedCourses: []
    };
  }

  componentWillMount() {
    // Grab a reference to our stored interested courses
    const localStorageInterestedCourses = localStorage.getItem('interested-courses');

    // Check if we've actually stored our interested courses
    if (localStorageInterestedCourses) {
      // Set our component state to match the stored one
      this.setState({
        interestedCourses: JSON.parse(localStorageInterestedCourses)
      });
    }
  }

  componentDidUpdate() {
    // Update our stored interested courses
    localStorage.setItem('interested-courses', JSON.stringify(this.state.interestedCourses));
  }

  toggleInterestedCourse(courseCode) {
    // Grab a copy of the openCourses state
    let interestedCourses = [...this.state.interestedCourses];
    const courseIndex = interestedCourses.indexOf(courseCode);

    if (courseIndex === -1) {
      // If course isn't in the list (i.e. it isn't interesting), let's add it to the list
      interestedCourses.push(courseCode);
    } else {
      // If the course is in the list, let's remove it
      interestedCourses.splice(courseIndex, 1);
    }

    this.setState({ interestedCourses });
  }

  render() {
    return (
      <div className="pa4 sans-serif">
        <h1 className="bb bw2 pb2 lh-title">UO Course Comparator</h1>

        <nav>
          <Link className="dim dark-red mr2" to="/">Select courses</Link>
          <span className="mr2 gray">/</span>
          <Link className="dim dark-red" to="/interesting-courses">View selections</Link>
        </nav>

        <Match
          exactly
          pattern="/"
          render={
            (props) => <CourseSelector
              {...props}
              toggleInterestedCourse={this.toggleInterestedCourse}
              interestedCourses={this.state.interestedCourses}
              departments={departments}
            />
          }
        />

        <Match
          exactly
          pattern="/interesting-courses"
          render={
            (props) => <SelectedCourseViewer
              {...props}
              courses={compiledCourses}
              toggleInterestedCourse={this.toggleInterestedCourse}
              interestedCourses={this.state.interestedCourses}
            />
          }
        />

        <Miss
          render={
            (props) => (
              <div className="lh-copy mt3">You seem to have found a page that we haven’t worked on... Nothing to see here!</div>
            )
          }
        />
      </div>
    )
  }
}

export default App;
