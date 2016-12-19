import React from 'react';

import sampleCourses from '../data/POL';

import CourseSelector from './CourseSelector';

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

        <CourseSelector courses={sampleCourses}/>
      </div>
    )
  }
}

export default App;
