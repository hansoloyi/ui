import React, { Component } from 'react';
import { colors } from '../../shared/styles';

const styles = {
  container: {
    backgroundColor: colors.white,
    height:          '50px'
  },
  text: {
    lineHeight: '50px',
    color:      colors.black,
    display:    'block',
    margin:     '0 auto',
    width:      '1024px'
  },
  name: {
    borderRight:   `1px solid ${colors.lightGray}`,
    paddingRight:  '4%',
    letterSpacing: '4px',
    fontSize:      '24px',
    display:       'inline-block',
    font:          'ProximaNovaExtraCondensedBold, sans-serif'
  },
  desc: {
    letterSpacing: '2px',
    marginLeft:    '4%',
    display:       'inline-block'
  }
};

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { container, text, name, desc } = styles;
    return (
      <div style={container}>
        <div style={text}>
          <div style={name}> HANSOL YI </div>
          <div style={desc}>
            A LITTLE ABOUT ME...
          </div>
        </div>
      </div>
    );
  }
}
