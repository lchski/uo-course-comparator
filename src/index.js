import React from 'react';
import { render } from 'react-dom';

const app = (
  <div className="pa4 sans-serif">
    <h1 className="bb bw2 pb2">UO Course Comparator</h1>

    <p>Welcome to the course comparator. To begin, select a department whose courses you’d like to view.</p>
  </div>
);

render( app, document.getElementById('root') );
