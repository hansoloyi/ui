import React, { Component } from 'react';
import Up from '../icons/Up';

const styles = {
  container: {
    height: '50px',
    textAlign: 'center',
    bottom:'0',
    width: '100%',
    position:'fixed',
    cursor: 'pointer'
  }
}

export default class TopButton extends Component {
  constructor(props) {
    super(props);
    this.scrollTop = this.scrollTop.bind(this);
    this.state = {
        intervalId: 0
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
  }
  scrollTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), 16.66);
    this.setState({ intervalId: intervalId });
  }

  render() {
    const { container } = styles;
    return (
      <div style={container} onClick={this.scrollTop}>
        <Up width={70} height={70}/>
      </div>
    );
  }
}
