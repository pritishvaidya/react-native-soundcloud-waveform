/* eslint import/no-unresolved: [2, { ignore: ['react', 'react-native'] }] */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Waveform from './components/Waveform';

import { dimensionsWidth } from './utils';

class SoundCloudWave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waveform: null,
    };
  }

  componentDidMount() {
    const { waveformUrl } = this.props;
    fetch(waveformUrl.replace('png', 'json'))
      .then(res => res.json())
      .then(json => {
        this.setState({
          waveform: json,
        });
      });
  }

  render() {
    const {
      height,
      width,
      percentPlayed,
      percentPlayable,
      setTime,
      active,
      activeInverse,
      activePlayable,
      activePlayableInverse,
      inactive,
      inactiveInverse,
    } = this.props;
    const { waveform } = this.state;
    if (!waveform) return null;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        <Waveform
          waveform={waveform}
          height={height}
          width={width}
          setTime={setTime}
          percentPlayed={percentPlayed}
          percentPlayable={percentPlayable}
          active={active}
          activeInverse={activeInverse}
          activePlayable={activePlayable}
          activePlayableInverse={activePlayableInverse}
          inactive={inactive}
          inactiveInverse={inactiveInverse}
          inverse
        />
        <View
          style={{
            width: width,
            height: 1,
            backgroundColor: 'black',
          }}
        />
        <Waveform
          waveform={waveform}
          height={height / 3}
          width={width}
          setTime={setTime}
          percentPlayed={percentPlayed}
          percentPlayable={percentPlayable}
          active={active}
          activeInverse={activeInverse}
          activePlayable={activePlayable}
          activePlayableInverse={activePlayableInverse}
          inactive={inactive}
          inactiveInverse={inactiveInverse}
          inverse={false}
        />
      </View>
    );
  }
}

SoundCloudWave.defaultProps = {
  percentPlayable: 0,
  height: 50,
  width: dimensionsWidth,
  active: '#FF1844',
  activeInverse: '#4F1224',
  activePlayable: '#1b1b26',
  activePlayableInverse: '#131116',
  inactive: '#424056',
  inactiveInverse: '#1C1A27',
};

SoundCloudWave.propTypes = {
  waveformUrl: PropTypes.string.isRequired,
  setTime: PropTypes.func.isRequired,
  percentPlayed: PropTypes.number.isRequired,
  percentPlayable: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
  active: PropTypes.string,
  activeInverse: PropTypes.string,
  activePlayable: PropTypes.string,
  activePlayableInverse: PropTypes.string,
  inactive: PropTypes.string,
  inactiveInverse: PropTypes.string,
};

export default SoundCloudWave;
