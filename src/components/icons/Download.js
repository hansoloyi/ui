import React, { Component } from 'react';

const styles = {
  container: {
    cursor: 'pointer'
  }
}

export default class Download extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { container } = styles;
    return (
      <div style={container}>
        <svg xmlns="http://www.w3.org/2000/svg"
        fill={this.props.color} height={this.props.height} viewBox="0 0 24 24" width={this.props.width}>
          <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div>
    );
  }
}
