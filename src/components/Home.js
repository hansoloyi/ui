import React, { Component } from 'react';
import { colors } from '../shared/styles';
import Layer from './comps/Layer';
import Pin from './icons/Pin';
import Code from './icons/Code';

const styles = {
  item: {
    paddingTop: '80px',
    paddingBottom: '80px',
    width: '49%',
    display: 'inline-block',
    textAlign: 'center'
  },
  meItem: {
    paddingTop: '40px',
    paddingBottom: '40px',
    width: '49%',
    display: 'inline-block',
    textAlign: 'center'
  },
  me: {
    backgroundColor: colors.lightGray
  },
  meText: {
    colors: colors.darkGray,
    lineHeight: '30px',
    letterSpacing: '1px'
  },
  meImg: {
    width: '50%',
    display: 'block',
    margin: '0 auto'
  },
  summary: {
    backgroundColor: colors.darkGray
  },
  summaryText: {
    color: colors.lightGray,
    lineHeight: '30px',
    letterSpacing: '1px'
  },
  summaryIconText: {
    color: colors.lightGray,
    marginTop: '20px',
    letterSpacing: '1px'
  },
  location: {
    backgroundColor: colors.white
  },
  locationText: {
    color: colors.black,
    lineHeight: '30px',
    letterSpacing: '1px'
  },
  locationIconText: {
    color: colors.black,
    marginTop: '20px',
    letterSpacing: '1px'
  },
  hobbies: {
    backgroundColor: colors.white
  },
  hobbiesItem: {
    paddingTop: '40px',
    paddingBottom: '40px',
    width: '32%',
    display: 'inline-block',
    textAlign: 'center'
  },
  hobbiesImg: {
    border: `3px solid ${colors.black}`,
    display: 'block',
    margin: '0 auto',
    width: '70%'
  },
  hobbiesTitle: {
    marginTop: '40px',
    textAlign: 'center',
    fontSize: '20px',
    letterSpacing: '2px'
  },
  hobbiesText: {
    marginTop: '10px',
    letterSpacing: '1px'
  }
};

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  renderMe() {
    const { me, meImg, item, meText, meItem } = styles;
    const respStyle = (this.props.viewPort == 'phone')
      ? Object.assign({}, meItem, { display: 'block', width: '100%' })
      : meItem;
    return (
      <Layer style={me} viewPort={this.props.viewPort}>
        <div>
          <div style={respStyle}>
            <div style={meImg}>
              <img src="/images/hansol.png" width="100%" id="me"/>
            </div>
          </div>
          <div style={respStyle}>
            <div style={meText}> HELLO WORLD, </div>
            <div style={meText}> I&#39;M HANSOL </div>
          </div>
        </div>
      </Layer>
    );
  }

  renderSummary() {
    const { summary, item, summaryIconText, summaryText } = styles;
    const respStyle = (this.props.viewPort == 'phone')
      ? Object.assign({}, item, { display: 'block', width: '100%' })
      : item
    return (
      <Layer style={summary} viewPort={this.props.viewPort}>
        <div>
          <div style={respStyle}>
            <Code color={colors.lightGray} height={50} width={50} />
            <div style={summaryIconText}> FULL STACK ENGINEER </div>
          </div>
          <div style={respStyle}>
            <div style={summaryText}> FROM MAKING A UI LOOK PRETTY </div>
            <div style={summaryText}> TO STREAM PROCESSING </div>
            <div style={summaryText}> I JUST LIKE BUILDING COOL THINGS </div>
            <div style={summaryText}> LOOKING FOR THE NEXT BIG IDEA </div>
          </div>
        </div>
      </Layer>
    );
  }

  renderHobbies() {
    const { hobbies, hobbiesItem, hobbiesImg, hobbiesTitle, hobbiesText } = styles;
    const respStyle = (this.props.viewPort == 'phone')
      ? Object.assign({}, hobbiesItem, { display: 'block', width: '100%' })
      : hobbiesItem;
    return (
      <Layer style={hobbies} viewPort={this.props.viewPort}>
        <div>
          <div style={hobbiesTitle}> SOME THINGS I LIKE TO DO </div>
          <div style={respStyle}>
            <div style={hobbiesImg}>
              <img src="/images/snow.png" width="100%" height="300px" />
            </div>
            <div style={hobbiesText}> SNOWBOARDING </div>
          </div>
          <div style={respStyle}>
            <div style={hobbiesImg}>
              <img src="/images/beer.png" width="100%" height="300px" />
            </div>
            <div style={hobbiesText}> A NICE COLD ONE </div>
          </div>
          <div style={respStyle}>
            <div style={hobbiesImg}>
              <img src="/images/sports.png" width="100%" height="300px" />
            </div>
            <div style={hobbiesText}> TEAM ACTIVITIES </div>
          </div>
        </div>
      </Layer>
    );
  }

  renderLocation() {
    const { location, item, locationIconText, locationText } = styles;
    const respStyle = (this.props.viewPort == 'phone')
      ? Object.assign({}, item, { display: 'block', width: '100%' })
      : item;
    return (
      <Layer style={location} viewPort={this.props.viewPort}>
        <div>
          <div style={respStyle}>
            <div style={locationText}> BORN IN KOREA </div>
            <div style={locationText}> SAN DIEGO RAISED </div>
            <div style={locationText}> DENVER RESIDING </div>
          </div>
          <div style={respStyle}>
            <Pin color={colors.black} height={50} width={50} />
            <div style={locationIconText}> DENVER, CO </div>
          </div>
        </div>
      </Layer>
    );
  }

  render() {
    const me = this.renderMe();
    const summary = this.renderSummary();
    const location = this.renderLocation();
    const hobbies = this.renderHobbies();
    return (
      <div>
        {me}
        {location}
        {summary}
        {hobbies}
      </div>
    )
  }
}
