import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Facebook extends Component {
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
      <div style={this.props.style} onClick={() => window.open("https://www.facebook.com/hansol.biggy", "_blank")}>
        <svg xmlns="http://www.w3.org/2000/svg" width={this.props.width} height={this.props.height} viewBox="0 0 24 24" fill={this.props.color}>
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
        </svg>
      </div>
    );
  }
}
