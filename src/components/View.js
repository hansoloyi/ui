import React, { Component } from 'react';
import Header from './comps/Header';
import Nav from './comps/Nav';
import TopButton from './comps/TopButton';

export default class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      y: 0,
      windowWidth: window.innerWidth,
      screenWidth: screen.width
    };
    this.handleScroll=this.handleScroll.bind(this);
    this.handleResize=this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.setState({
      y: window.scrollY
    });
  }

  handleResize() {
    this.setState({ windowWidth: window.innerWidth, screenWidth: screen.width });
  }


  render() {
    const viewPort = (this.state.windowWidth < 960 || this.state.screenWidth < 465)
      ? 'phone'
      : ( this.state.windowWidth >= 960 && this.state.windowWidth < 1024)
        ? 'tablet'
        : 'desktop';

    return (
      <div>
        <Header viewPort={viewPort}/>
        <Nav viewPort={viewPort} />
        {React.cloneElement(this.props.children, { ...this.props, viewPort: viewPort })}
        {(this.state.y > 50) ? <TopButton  viewPort={viewPort}/> : null}
      </div>
    );
  }
}
