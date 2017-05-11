import React, { Component } from 'react';

const styles={
  innerStyle: {
    width:   '1024px',
    display: 'block',
    margin:  '0 auto'
  }
};

export default class Layer extends Component {
  static defaultProps = {
    style: {
      backgroundColor: '#000'
    }
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { innerStyle } = styles;
    return (
      <div style={this.props.style}>
        <div style={innerStyle}>
          {React.cloneElement(this.props.children)}
        </div>
      </div>
    );
  }
}
