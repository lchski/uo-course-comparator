import React from 'react';
import { Match, Miss } from 'react-router';

import sampleCourses from '../data/POL';

import CourseSelector from './CourseSelector';
import SelectedCourseViewer from './SelectedCourseViewer';

class App extends React.Component {
  render() {
    return (
      <div className="pa4 sans-serif">
        <h1 className="bb bw2 pb2 lh-title">UO Course Comparator</h1>

        <nav>
          <a className="dim dark-red mr2" href="#">Select courses</a>
          <span className="mr2 gray">/</span>
          <a className="dim dark-red" href="#">View selections</a>
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
