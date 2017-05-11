import React, { Component } from 'react';
import { Link } from 'react-router';
import { colors } from '../../shared/styles';

const styles = {
  active: {
    color: colors.black,
    backgroundColor: colors.white
  }
};

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
      <Link to={this.props.link} onlyActiveOnIndex style={this.props.style} activeStyle={active}>
        {this.props.text}
      </Link>
    );
  }
}
