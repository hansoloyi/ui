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
    const emailHovered = (this.state.emailHovered) ? mediaSub : hover;
    const fbHovered = (this.state.fbHovered) ? mediaSub : hover;
    const liHovered = (this.state.liHovered) ? mediaSub : hover;
    const phoneHovered = (this.state.phoneHovered) ? mediaSub : hover;
    return (
      <div>
        <Layer style={contact}>
          <div style={item}>
            CALL ME, BEEP ME IF YOU WANT TO REACH ME
          </div>
        </Layer>
        <Layer style={medias}>
          <div>
            <div style={mediaItem}
              onMouseOver={() => this.setState({ emailHovered: true })}
              onMouseOut={() => this.setState({ emailHovered: false })}>
              <div style={mediaSub}>
                <Email width={60} height={60} color={'#000'} style={button}/>
              </div>
              <div style={emailHovered}>
                HANSOLO.YI@GMAIL.COM (COPY AND PASTE)
              </div>
            </div>
            <div style={mediaItem}
              onMouseOver={() => this.setState({ fbHovered: true })}
              onMouseOut={() => this.setState({ fbHovered: false })}>
              <div style={mediaSub}>
                <Facebook width={50} height={50} color={'#000'} style={button}/>
              </div>
              <div style={fbHovered}>
                NON PROFESSIONAL INQUIRIES
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
                JUST KIDDING DON&#39;T CALL ME
              </div>
            </div>
          </div>
        </Layer>
      </div>
    );
  }
}
