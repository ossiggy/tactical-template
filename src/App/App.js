import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter} from 'react-router-dom';
import logo from './logo.svg';

export class App extends Component {

  render() {
    return (
     <div className="app">
      
     </div>
    );
  }
}

export default withRouter(connect()(App));
