import React from 'react';
import { Link, Match, Miss } from 'react-router';

import sampleCourses from '../data/HIS';

import CourseSelector from './CourseSelector';
import SelectedCourseViewer from './SelectedCourseViewer';

class App extends React.Component {
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
            (props) => <CourseSelector {...props} courses={sampleCourses}/>
          }
        />
        <Match
          exactly
          pattern="/interesting-courses"
          render={
            (props) => <SelectedCourseViewer {...props} courses={sampleCourses}/>
          }
        />
      </div>
    )
  }
}

export default App;
