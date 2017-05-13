import React, { Component } from 'react';
import Layer from './comps/Layer';
import { colors } from '../shared/styles';
import { blog } from '../shared/blog1';
const styles = {
  container: {
    backgroundColor: colors.lightGray
  },
  layer: {
    backgroundColor: colors.white
  },
  item: {
    paddingTop: '15px',
    paddingBottom: '15px',
    textAlign: 'center',
    letterSpacing: '2px'
  },
  blogTitle: {
    letterSpacing: '2px',
    color: colors.black,
    fontSize: '21px',
  },
  blogSection: {
    marginLeft: '15px',
    paddingTop: '40px',
    paddingBottom: '20px',
    borderBottom: `1px solid ${colors.lightGray}`
  },
  blogSubText: {
    letterSpacing: '1px',
    borderRight: `1px solid ${colors.darkGray}`,
    color: colors.darkGray,
    display: 'inline-block',
    paddingRight: '20px'
  },
  blogSubText2: {
    letterSpacing: '1px',
    color: colors.darkGray,
    display: 'inline-block',
    paddingLeft: '20px'
  },
  wholeBlog: {
    marginTop: '20px',
    letterSpacing: '1px',
    color: colors.darkGray,
    marginLeft: '15px'
  }
};

export default class Blog extends Component {
  constructor(props) {
    super(props);
  }

  blog1() {
    const { blogTitle, blogSection, blogSubText, blogSubText2, wholeBlog } = styles;
    return (
      <div>
        <div style={blogSection}>
          <div style={blogTitle}> MY FIRST POST </div>
          <div>
            <div style={blogSubText}> MAY 2017 </div>
            <div style={blogSubText2}> HELLO WORLD </div>
          </div>
        </div>
        <div style={wholeBlog}> {blog} </div>
      </div>
    );
  }

  render() {
    const first = this.blog1();
    const { container, item, layer } = styles;
    return (
      <div>
        <Layer style={container} viewPort={this.props.viewPort}>
          <div style={item}>
            MY THOUGHTS
          </div>
        </Layer>
        <Layer style={layer} viewPort={this.props.viewPort}>
          {first}
        </Layer>
      </div>
    );
  }
}
