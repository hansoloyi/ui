import React, { Component } from 'react';
import Header from './comps/Header';
import Nav from './comps/Nav';
import TopButton from './comps/TopButton';

export default class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      y: 0
    };
    this.handleScroll=this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.setState({
      y: window.scrollY
    });
  }

  render() {
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
