import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router';

import App from './components/App';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <App/>
      </div>
    </BrowserRouter>
  )
};

render( <Root/>, document.getElementById('root') );
