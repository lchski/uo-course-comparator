import React from 'react';
import { Link, Match, Miss } from 'react-router';

// import sampleCourses from '../data/HIS';

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
  },
  {
    "code": "POL1501",
    "description": "Étude comparative des idées, concepts et enjeux permettant une compréhension des phénomènes politiques et de leur importance dans la vie des individus et des collectivités. Questionnement sur le pouvoir, la citoyenneté et la participation politique. Introduction au travail de recherche (ex. : recherche bibliographique, rédaction d'un rapport de recherche ou de lecture).",
    "language": "French",
    "restriction": "",
    "title": "Introduction à la science politique",
    "year": "1"
  }
];

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
