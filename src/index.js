import React from 'react';
import { render } from 'react-dom';

import sampleCourses from './data/POL';

const CourseInfo = (course) => {
  return (
    <div className="pb4">
      <p className="lh-copy serif mb0">{course.description}</p>

      <ul className="list pl0 mt2">
        <li className="gray dib f6">{course.code}</li>
      </ul>

      <button className="input-reset sans-serif pointer mt3 db pv2 w-100 f6 bg-white ba bw1 b--black"><span>+</span> I’m interested!</button>
    </div>
  )
};

// !IMPORTANT! Remove the Math.random() when set up in proper components

const Course = (course, isOpen = true) => {
  return (
    <li className="b--black-30 pv1 mt2" key={course.code + Math.random()}>
      <h3 className="bb bw1 pb1 lh-title mt0">{course.title}</h3>

      {isOpen ? CourseInfo(course) : null}
    </li>
  )
};

const app = (
  <div className="pa4 sans-serif">
    <h1 className="bb bw2 pb2 lh-title">UO Course Comparator</h1>

    <p className="measure-narrow lh-copy">Welcome to the course comparator. To begin, select a department whose courses you’d like to view.</p>

    <label htmlFor="department" className="db i">Department</label>
    <select id="department" className="w-100 mt2">
      <option value="POL">Political Science</option>
    </select>

    <div className="pv3">
      <h2 className="lh-title">Political Science</h2>

      <button className="input-reset f6 pa2 sans-serif pointer bg-light-gray ba b--black">expand all</button>
      <button className="input-reset f6 pa2 sans-serif pointer bg-light-gray ba b--black ml2">close all</button>

      <ol className="list pl0 mt4">
        {
          sampleCourses.map((course) => Course(course, Math.random() >= 0.5))
        }
      </ol>
    </div>
  </div>
);


render( app, document.getElementById('root') );
