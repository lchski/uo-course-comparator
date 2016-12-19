import React from 'react';
import { render } from 'react-dom';

const sampleCourses = [
  {
    "code": "POL1101",
    "description": "Comparative study of the ideas, concepts and issues leading to an understanding of political phenomena and of their impact on the lives of individuals and societies. Reflection on power, citizenship and political participation. Introduction to research tasks (e.g. bibliographic research, writing a research or reading report).",
    "language": "English",
    "restriction": "",
    "title": "Introduction to Political Science",
    "year": "1"
  },
  {
    "code": "POL1102",
    "description": "Understanding globalization in its political, economic, social and cultural dimensions. Relationship between globalization and politics: new roles for the nation-state, international organizations, social movements, local communities. Introduction to research tasks (e.g. bibliographic research, writing a research or reading report).",
    "language": "English",
    "restriction": "",
    "title": "Politics and Globalization",
    "year": "1"
  }
];

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

      <ol className="list pl0 mt4">
        {Course(sampleCourses[0], false)}
        {Course(sampleCourses[1], false)}
        {Course(sampleCourses[0])}
        {Course(sampleCourses[1])}
        {Course(sampleCourses[0])}
        {Course(sampleCourses[0], false)}
        {Course(sampleCourses[1], false)}
        {Course(sampleCourses[0], false)}
        {Course(sampleCourses[1])}
        {Course(sampleCourses[0], false)}
      </ol>
    </div>
  </div>
);


render( app, document.getElementById('root') );
