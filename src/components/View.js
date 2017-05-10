import React, { Component } from 'react';
import Header from './Header';

export default class View extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        {React.cloneElement(this.props.children)}
      </div>
    );
  }
}
