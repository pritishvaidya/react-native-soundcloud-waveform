/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import checkPropTypes from 'check-prop-types';
import TestRenderer from 'react-test-renderer';
import SoundCloudWaveform from '../src';

describe('Main Component Tests', () => {
  const waveformUrl = 'https://w1.sndcdn.com/PP3Eb34ToNki_m.png';
  const setTime = () => {};
  const percentPlayed = 50;

  describe('check prop types', () => {
    it('should throw an error if waveform url is not specified', () => {
      expect(
        checkPropTypes(
          SoundCloudWaveform.propTypes,
          {
            waveformUrl: null,
            setTime,
            percentPlayed,
          },
          'prop',
          SoundCloudWaveform.waveformUrl,
        ),
      ).toBe('Failed prop type: The prop `waveformUrl` is marked as required in `<<anonymous>>`, but its value is `null`.');
    });

    it('should throw an error if waveform setTime is not specified', () => {
      expect(
        checkPropTypes(
          SoundCloudWaveform.propTypes,
          {
            waveformUrl,
            setTime: null,
            percentPlayed,
          },
          'prop',
          SoundCloudWaveform.setTime,
        ),
      ).toBe('Failed prop type: The prop `setTime` is marked as required in `<<anonymous>>`, but its value is `null`.');
    });

    it('should throw an error if percentPlayed percentPlayed is not specified', () => {
      expect(
        checkPropTypes(
          SoundCloudWaveform.propTypes,
          {
            waveformUrl,
            setTime,
            percentPlayed: null,
          },
          'prop',
          SoundCloudWaveform.percentPlayed,
        ),
      ).toBe('Failed prop type: The prop `percentPlayed` is marked as required in `<<anonymous>>`, but its value is `null`.');
    });
  });

  describe('main component details', () => {
    const componentTestRenderer = TestRenderer.create(<SoundCloudWaveform
      waveformUrl={waveformUrl}
      setTime={setTime}
      percentPlayed={percentPlayed}
    />);

    it('should render the component correctly', () => {
      expect(componentTestRenderer).toMatchSnapshot();
    });
  });
});
