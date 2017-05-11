import React, { Component } from 'react';
import Header from './comps/Header';
import Nav from './comps/Nav';

export default class View extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Nav />
        {React.cloneElement(this.props.children)}
      </div>
    );
  }
}
