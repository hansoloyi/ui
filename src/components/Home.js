import React, { Component } from 'react';
import { colors } from '../shared/styles';
import Layer from './comps/Layer';
import Pin from './icons/Pin';

const styles = {
  layer1:{
    backgroundColor: colors.black,
  },
  layer2: {
    backgroundColor: colors.lightGray
  },
  item: {
    paddingTop: '80px',
    paddingBottom: '80px',
    width: '49%',
    display: 'inline-block',
    textAlign: 'center',
  },
  iconText: {
    color: colors.darkGray,
    marginTop: '20px',
  },
  layer2Text: {
    colors: colors.darkGray,
    lineHeight: '30px'
  }
}

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  renderLayer2() {
    const { layer2, item, iconText, layer2Text } = styles;
    return (
      <Layer style={layer2}>
        <div>
          <div style={item}>
            <Pin color={colors.darkGray} height={50} width={50} />
            <div style={iconText}> DENVER, CO </div>
          </div>
          <div style={item}>
            <div style={layer2Text}> BORN IN KOREA </div>
            <div style={layer2Text}> SAN DIEGO RAISED </div>
            <div style={layer2Text}> DENVER RESIDING </div>
          </div>
        </div>
      </Layer>
    );
  }

  render() {
    const layerTwo = this.renderLayer2();
    return (
      <div>
        {layerTwo}
      </div>
    )
  }
}
