import React, { Component } from 'react';
import Layer from './comps/Layer';
import { colors } from '../shared/styles';
import Facebook from './icons/Facebook';
import Linkedin from './icons/Linkedin';
import Email from './icons/Email';
import Phone from './icons/Phone';

const styles = {
  contact: {
    backgroundColor: colors.lightGray
  },
  item: {
    paddingTop: '15px',
    paddingBottom: '15px',
    textAlign: 'center',
    letterSpacing: '2px'
  },
  medias: {
    backgroundColor: colors.white,
    paddingTop: '40px',
    paddingBottom: '40px'
  },
  mediaItem: {
    marginTop: '50px',
    marginLeft: '5%',
    textAlign: 'left',
    letterSpacing: '2px'
  },
  mediaText: {
    marginTop: '10px',
  },
  mediaSub: {
    display: 'inline-block',
    marginRight: '5%'
  },
  button: {
    cursor: 'pointer'
  }
};

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state={
      emailHovered: false,
      fbHovered: false,
      liHovered: false,
      phoneHovered: false
    }
  }

  render() {
    const { contact, item, medias, mediaItem, mediaText, mediaSub, button } = styles;
    const hover = Object.assign({}, mediaSub, { display: 'none' })
    const emailHovered = (this.state.emailHovered || this.props.viewPort == 'phone') ? mediaSub : hover;
    const fbHovered = (this.state.fbHovered || this.props.viewPort == 'phone') ? mediaSub : hover;
    const liHovered = (this.state.liHovered || this.props.viewPort == 'phone') ? mediaSub : hover;
    const phoneHovered = (this.state.phoneHovered || this.props.viewPort == 'phone') ? mediaSub : hover;

    const textResp = (this.props.viewPort=='phone') ? Object.assign({}, item, { fontSize: '30px', paddingTop: '30px', paddingBottom: '30px'}) : item;
    return (
      <div>
        <Layer style={contact} viewPort={this.props.viewPort}>
          <div style={textResp}>
            CALL ME, BEEP ME IF YOU WANT TO REACH ME
          </div>
        </Layer>
        <Layer style={medias} viewPort={this.props.viewPort}>
          <div>
            <div style={mediaItem}
              onMouseOver={() => this.setState({ emailHovered: true })}
              onMouseOut={() => this.setState({ emailHovered: false })}>
              <div style={mediaSub}>
                <Email width={60} height={60} color={'#000'} style={button}/>
              </div>
              <div style={emailHovered}>
                HANSOLO.YI@GMAIL.COM
              </div>
            </div>
            <div style={mediaItem}
              onMouseOver={() => this.setState({ fbHovered: true })}
              onMouseOut={() => this.setState({ fbHovered: false })}>
              <div style={mediaSub}>
                <Facebook width={50} height={50} color={'#000'} style={button}/>
              </div>
              <div style={fbHovered}>
                SOCIAL INQUIRIES
              </div>
            </div>
            <div style={mediaItem}
              onMouseOver={() => this.setState({ liHovered: true })}
              onMouseOut={() => this.setState({ liHovered: false })}>
              <div style={mediaSub}>
                <Linkedin width={50} height={50} color={'#000'} style={button}/>
              </div>
              <div style={liHovered}>
                PROFESSIONAL INQUIRIES
              </div>
            </div>
            <div style={mediaItem}
              onMouseOver={() => this.setState({ phoneHovered: true })}
              onMouseOut={() => this.setState({ phoneHovered: false })}>
              <div style={mediaSub}>
                <Phone width={60} height={60} color={'#000'} style={button}/>
              </div>
              <div style={phoneHovered}>
                JK DON&#39;T CALL ME
              </div>
            </div>
          </div>
        </Layer>
      </div>
    );
  }
}
