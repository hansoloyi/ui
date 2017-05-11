import React, { Component } from 'react';
import { colors } from '../../shared/styles';
import Button from './Button';

const styles = {
  container: {
    paddingTop: '20px',
    paddingBottom: '20px',
    backgroundColor:colors.black,
    display: 'flex',
    justifyContent: 'center'
  },
  navContainer: {
    width: '1024px',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto'
  },
  button: {
    border: `1px solid ${colors.white}`,
    color: colors.white,
    display: 'inline-block',
    width: '15%',
    cursor: 'pointer',
    textAlign: 'center',
    paddingTop: '5px',
    paddingBottom: '5px',
    letterSpacing: '2px'
  }
};

const navItems = [
  {
    text: 'HOME',
    link: '/'
  },
  {
    text: 'ABOUT',
    link: '/about'
  },
  {
    text: 'RESUME',
    link: '/resume'
  },
  {
    text: 'CONTACT',
    link: '/contact'
  }
];

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { container, navContainer, button } = styles;
    return(
      <div style={container}>
        <div style={navContainer}>
          {navItems.map((nav, idx) => {
            return (<Button key={idx} style={button} text={nav.text} link={nav.link}/>)
          })}
        </div>
      </div>
    );
  }
}
