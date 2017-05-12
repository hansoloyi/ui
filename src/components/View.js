import React, { Component } from 'react';
import Header from './comps/Header';
import Nav from './comps/Nav';
import TopButton from './comps/TopButton';

export default class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      y: 0
    }
    this.setState=this.setState.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    this.setState({
      y: window.scrollY
    }).bind(this);
    console.log(window.scrollY)
  }

  render() {
    console.log(window.scrollY)
    return (
      <div>
        <Header />
        <Nav />
        {React.cloneElement(this.props.children)}
        {(this.state.y > 50) ? <TopButton /> : null}
      </div>
    );
  }
}
