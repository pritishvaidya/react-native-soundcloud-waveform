/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import SoundCloudWaveform from 'react-native-soundcloud-waveform';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

type Props = {};
export default class App extends Component<Props> {
  setTime = () => {}

  render() {
    return (
      <View style={styles.container}>
        <SoundCloudWaveform waveformUrl="https://w1.sndcdn.com/PP3Eb34ToNki_m.png" setTime={this.setTime} percentPlayed={50} />
      </View>
    );
  }
}
