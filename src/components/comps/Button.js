import React, { Component } from 'react';
import { Link } from 'react-router';
import { colors } from '../../shared/styles';

const styles = {
  active: {
    color: colors.black,
    backgroundColor: colors.white
  }
}

export default class Button extends Component {
  static defaultProps = {
    style: {
      color: '#000'
    }
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { active } = styles;

    return (
      <div style={this.props.style}>
        <Link to="/" activeStyle={{color: 'white'}}> {this.props.text} </Link>
      </div>
    );
  }
}
