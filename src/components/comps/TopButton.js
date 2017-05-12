import React, { Component } from 'react';
import Up from '../icons/Up';

const styles = {
  container: {
    height: '50px',
    textAlign: 'center',
    bottom:'0',
    width: '100%',
    position:'fixed',
  }
}

export default class TopButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { container } = styles;
    return (
      <div style={container}>
        <Up width={70} height={70}/>
      </div>
    );
  }
}
