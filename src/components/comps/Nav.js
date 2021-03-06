import React, { Component } from 'react';
import { colors } from '../../shared/styles';
import Button from './Button';
import Menu from '../icons/Menu';

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
  },
  smallButton: {
    border: `1px solid ${colors.lightGray}`,
    color: colors.white,
    textAlign: 'center',
    width: '100%',
    cursor: 'pointer',
    paddingTop: '10px',
    paddingBottom: '10px',
    letterSpacing: '2px',
    display: 'block',
    backgroundColor: 'black',
  },
  someOther: {
    zIndex: '10',
    display: 'none'
  }
};

const navItems = [
  {
    text: 'ABOUT',
    link: '/'
  },
  {
    text: 'RESUME',
    link: '/resume'
  },
  {
    text: 'BLOG',
    link: '/blog'
  },
  {
    text: 'CONTACT',
    link: '/contact'
  }
];

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuClicked: false
    };
  }

  bigNav() {
    const { container, navContainer, button } = styles;
    const respCont = (this.props.viewPort != 'desktop') ? Object.assign({}, navContainer, { width: '100%'}) : navContainer;
    return (
      <div style={respCont}>
        {navItems.map((nav, idx) => {
          return (<Button key={idx} style={button} text={nav.text} link={nav.link}/>)
        })}
      </div>
    );
  }

  smallNav() {
    const { smallButton, someOther } = styles;
    const respSmallButton = (this.props.viewPort == 'phone') ? Object.assign({}, smallButton, { paddingTop: '30px', paddingBottom: '30px', fontSize: '28px'}) : smallButton;

    const display = (this.state.menuClicked) ? Object.assign({}, someOther, { display: 'block' }) : someOther;
    const menuSize = (this.props.viewPort == 'phone') ? 60 : 35;
    return (
      <div style={{marginLeft: '15px', width: '50%', height: '30px', zIndex: '100'}}>
        <div onClick={() => this.setState({menuClicked: !this.state.menuClicked})}>
          <Menu color={colors.white} width={menuSize} height={menuSize} />
        </div>
        <div style={display}>
          {navItems.map((nav, idx) => {
            return (<Button key={idx} style={respSmallButton} text={nav.text} link={nav.link} onClick={()=>{this.setState({menuClicked:false})}}/>)
          })}
        </div>
      </div>
    );
  }

  render() {
    const { container, navContainer, button } = styles;
    const respStyle = (this.props.viewPort == 'phone') ? Object.assign({}, container, { justifyContent: 'flex-start', paddingTop: '30px', paddingBottom: '50px' }) : container;
    return(
      <div style={respStyle}>
        {(this.props.viewPort == 'phone') ? this.smallNav() : this.bigNav()}
      </div>
    );
  }
}
