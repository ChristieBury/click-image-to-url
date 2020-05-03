import React, { Component } from 'react';
import ClickableImage from './click-me';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Click Image to url</h1>
        <ClickableImage/>
      </div>
    );
  }
}
