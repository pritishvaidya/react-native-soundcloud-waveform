/* eslint-disable no-undef */
import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Waveform from './components/Waveform';

import { dimensionsWidth } from './utils';

class SoundCloudWave extends Component {
  state = {
    waveform: null,
  }

  componentDidMount() {
    const { waveformUrl } = this.props;
    fetch(waveformUrl.replace('png', 'json'))
      .then(res => res.json())
      .then((json) => {
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
      <View style={{ flex: 1, justifyContent: 'center' }}>
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
          inverse={false}
        />
      </View>
    );
  }
}

SoundCloudWave.defaultProps = {
  height: 50,
  width: dimensionsWidth,
  active: PropTypes.string,
  activeInverse: PropTypes.string,
  activePlayable: PropTypes.string,
  activePlayableInverse: PropTypes.string,
  inactive: PropTypes.string,
  inactiveInverse: PropTypes.string,
};

SoundCloudWave.propTypes = {
  waveformUrl: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  setTime: PropTypes.func.isRequired,
  percentPlayed: PropTypes.number.isRequired,
  percentPlayable: PropTypes.number.isRequired,
  active: PropTypes.string,
  activeInverse: PropTypes.string,
  activePlayable: PropTypes.string,
  activePlayableInverse: PropTypes.string,
  inactive: PropTypes.string,
  inactiveInverse: PropTypes.string,
};

export default SoundCloudWave;
