import React, { Component } from 'react';

import Navigation from './Navigation';
import DetailViewContainer from './DetailViewContainer';

// The MainContainer contains a Navigation component and
// a DetailViewController component
export default class MainContainer extends Component {
  render () {
    return (
      <div className='main-container'>
        <Navigation/>
        <DetailViewContainer />
      </div>
    );
  }
}
