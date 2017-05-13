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
    marginLeft: '1%',
    borderRight:   `1px solid ${colors.lightGray}`,
    paddingRight:  '3%',
    letterSpacing: '4px',
    fontSize:      '24px',
    display:       'inline-block',
    font:          'ProximaNovaExtraCondensedBold, sans-serif'
  },
  desc: {
    letterSpacing: '2px',
    paddingLeft:    '3%',
    display:       'inline-block'
  }
};

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { container, text, name, desc } = styles;
    const respName = (this.props.viewPort == 'phone') ? Object.assign({}, name, {paddingRight: '2px'}) : name;
    const respDesc = (this.props.viewPort == 'phone') ? Object.assign({}, desc, {paddingLeft: '2px'}) : desc;
    const respText = (this.props.viewPort == 'phone') ? Object.assign({}, desc, {width: '100%'}) : text;
    return (
      <div style={container}>
        <div style={respText}>
          <div style={respName}> HANSOL YI </div>
          <div style={respDesc}>
            A LITTLE ABOUT ME
          </div>
        </div>
      </div>
    );
  }
}
