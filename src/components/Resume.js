import React, { Component } from 'react';
import { colors } from '../shared/styles';
import Layer from './comps/Layer';
import Download from './icons/Download';

const styles = {
  layer1Text:{
    display: 'inline-block'
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

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  renderLayer1() {
    const { layer2, item, iconText, layer1Text } = styles;
    return (
      <Layer style={layer2}>
        <div>
          <div style={layer1Text}>
            DOWNLOAD
          </div>
          <div>
            <Download height={40} width={40} color={colors.darkGray}/>
          </div>
        </div>
      </Layer>
    );
  }

  render() {
    const layerOne = this.renderLayer1();
    return (
      <div>
        {layerOne}
      </div>
    )
  }
}
