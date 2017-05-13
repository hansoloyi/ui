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
    },
    viewPort: 'desktop'
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { innerStyle } = styles;
    const sty = (this.props.viewPort != 'desktop') ? Object.assign({}, innerStyle, { width: '100%' }) : innerStyle;
    return (
      <div style={this.props.style}>
        <div style={sty}>
          {React.cloneElement(this.props.children)}
        </div>
      </div>
    );
  }
}
