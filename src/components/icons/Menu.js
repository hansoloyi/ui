import React, { Component } from 'react';

export default class Menu extends Component {
  static defaultProps = {
    color: "#000",
    height: 24,
    width: 24,
    style: {
      cursor: 'pointer'
    }
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={this.props.style}>
        <svg xmlns="http://www.w3.org/2000/svg" fill={this.props.color} height={this.props.height} viewBox="0 0 24 24" width={this.props.width}>
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
      </div>
    );
  }
}
