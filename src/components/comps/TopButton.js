import React, { Component } from 'react';
import Up from '../icons/Up';
import { colors } from '../../shared/styles';

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
        intervalId: 0,
        hovered: false
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
  }

  scrollTop() {
    const intervalId = setInterval(this.scrollStep.bind(this), 16.66);
    this.setState({ intervalId: intervalId });
  }

  onMouseOver() {
    this.setState({ hovered: true });
  }

  onMouseOut() {
    this.setState({ hovered: false });
  }

  render() {
    const { container } = styles;
    const sty = (this.state.hovered)
      ? Object.assign({}, container, { backgroundColor: colors.lightGray, color: colors.darkGray, opacity: '.6' })
      : container;
    return (
      <div style={sty} onClick={this.scrollTop}
        onMouseOver={this.onMouseOver.bind(this)}
        onMouseOut={this.onMouseOut.bind(this)}>
        <Up width={70} height={70}/>
      </div>
    );
  }
}
