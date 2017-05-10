import React, { Component } from 'react';
import { colors } from '../shared/styles';

const styles = {
  imgBackground: {
    backgroundColor: colors.lightGray
  }
}

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div style={styles.imgBackground}>
          <img src="/images/location.jpg" />
        </div>
      </div>
    )
  }
}
