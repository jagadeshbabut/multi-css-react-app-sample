import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './static/App-1.css';


class InternalApp extends Component {
  render() {
    console.log('Internal App rendered!!!')
    return (
      <div className="App">
        <header className="App-header">
          <Link to='/internal'>Internal</Link>
          <Link to='/external'>External</Link>
        </header>
      </div>
    );
  }
}

export default InternalApp;
