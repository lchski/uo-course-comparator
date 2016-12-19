import React from 'react';
import { render } from 'react-dom';
import classNames from 'classnames';

import sampleCourses from './data/POL';

const CourseInfo = (course) => {
  return (
    <div className="pb4">
      <p className="lh-copy serif mb0">{course.description}</p>

      <ul className="list pl0 mt2">
        <li className="gray dib f6">{course.code}</li>
      </ul>

      <button className="input-reset sans-serif pointer mt3 db pv2 w-100 f6 bg-light-green ba bw1 b--black grow"><span>+</span> I’m interested!</button>
    </div>
  )
};

const Course = (course, isOpen = true) => {
  let headerClasses = classNames({
    'bb bw1 pb1 lh-title mt0': true,
    'black-50 b--black-40': !isOpen
  });

  return (
    <li className="b--black-30 pv1 mt2 relative" key={course.code}>
      <h3 className={headerClasses}>{course.title}</h3>

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

      <div className="ph2 pv3 bg-light-gray mt4">
        <h3 className="mt0">Filters</h3>

        <div className="measure black-80 mt3">
          <label className="f6 b db" htmlFor="search" >Search</label>
          <input className="input-reset ba b--black-20 ph2 pv1 mt2 db w-100 f6 sans-serif" type="text" id="search"/>
        </div>

        <div className="measure black-80 mt3">
          <p className="f6 b db ma0">Language</p>

          <div className="inline-flex items-center mr2 mt2">
            <label htmlFor="language--english" className="mr1 lh-copy f6">English</label>
            <input type="checkbox" name="language" id="language--english" checked/>
          </div>

          <div className="inline-flex items-center mr2 mt2">
            <label htmlFor="language--french" className="mr1 lh-copy f6">French</label>
            <input type="checkbox" name="language" id="language--french" checked/>
          </div>
        </div>

        <div className="measure black-80 mt3">
          <p className="f6 b db ma0">Year</p>

          <div className="inline-flex items-center mr2 mt2">
            <label htmlFor="year-1" className="mr1 lh-copy f6">1</label>
            <input type="checkbox" name="year" id="year-1" checked/>
          </div>

          <div className="inline-flex items-center mr2 mt2">
            <label htmlFor="year-2" className="mr1 lh-copy f6">2</label>
            <input type="checkbox" name="year" id="year-2" checked/>
          </div>

          <div className="inline-flex items-center mr2 mt2">
            <label htmlFor="year-3" className="mr1 lh-copy f6">3</label>
            <input type="checkbox" name="year" id="year-3" checked/>
          </div>

          <div className="inline-flex items-center mr2 mt2">
            <label htmlFor="year-4" className="mr1 lh-copy f6">4</label>
            <input type="checkbox" name="year" id="year-4" checked/>
          </div>
        </div>
      </div>

      <ol className="list pl0 mt4">
        {
          sampleCourses.map((course) => Course(course, Math.random() >= 0.5))
        }
      </ol>
    </div>
  </div>
);


render( app, document.getElementById('root') );
