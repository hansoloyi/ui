import React, { Component } from 'react';

export default class Code extends Component {
  static defaultProps = {
    color: "#000",
    height: 24,
    width: 24,
    style: {}
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={this.props.style}>
        <svg xmlns="http://www.w3.org/2000/svg"
        fill={this.props.color} height={this.props.height} viewBox="0 0 24 24" width={this.props.width}>
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      </div>
    );
  }
}
