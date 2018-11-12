import React, { Component } from 'react';
import './static/App-1.css';


class InternalApp extends Component {
  render() {
    console.log('Internal App rendered!!!')
    return (
      <div className="App">
        <header className="App-header">
          <button className='btn btn-primary'>Button</button>
        </header>
      </div>
    );
  }
}

export default InternalApp;
