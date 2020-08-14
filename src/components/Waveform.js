/* eslint import/no-unresolved: [2, { ignore: ['react', 'react-native'] }] */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';

import { scaleLinear } from 'd3-scale';
import { mean, max, min } from 'd3-array';
import _ from 'lodash';

import { getColor } from '../utils';

function Waveform({
  waveform,
  height,
  width,
  setTime,
  percentPlayed,
  percentPlayable,
  inverse,
  active,
  activeInverse,
  activePlayable,
  activePlayableInverse,
  inactive,
  inactiveInverse,
}) {
  const scaleLinearHeight = scaleLinear()
    .domain([0, waveform.height])
    .range([0, height]);
  const chunks = _.chunk(waveform.samples, waveform.width / 100);
  let waveformSamples = [];
  if (chunks.length > 100) {
    for (i = 0; i < 100; i++) {
      waveformSamples.push(chunks[i]);
    }
  } else {
    for (i = 0; i < 100 - chunks.length; i++) {
      waveformSamples.push(chunks[chunks.length - (i + 1)]);
    }
  }
  return (
    <View
      style={[
        {
          height,
          width,
          justifyContent: 'flex-start',
          flexDirection: 'row',
        },
        inverse && {
          transform: [{ rotateX: '180deg' }, { rotateY: '0deg' }],
        },
      ]}
    >
      {waveformSamples.map((chunk, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => {
            setTime(i);
          }}
        >
          <View
            style={{
              backgroundColor: getColor(
                waveformSamples,
                i,
                percentPlayed,
                percentPlayable,
                inverse,
                active,
                activeInverse,
                activePlayable,
                activePlayableInverse,
                inactive,
                inactiveInverse
              ),
              width: width / 100 - 1,
              marginRight: 1,
              height: scaleLinearHeight(i % 3 == 0 ? min(chunk) : i % 3 == 1 ? mean(chunk) :  max(chunk)),
            }}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

Waveform.propTypes = {
  waveform: PropTypes.object.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  setTime: PropTypes.func.isRequired,
  percentPlayed: PropTypes.number.isRequired,
  percentPlayable: PropTypes.number.isRequired,
  inverse: PropTypes.bool.isRequired,
  active: PropTypes.string.isRequired,
  activeInverse: PropTypes.string.isRequired,
  activePlayable: PropTypes.string.isRequired,
  activePlayableInverse: PropTypes.string.isRequired,
  inactive: PropTypes.string.isRequired,
  inactiveInverse: PropTypes.string.isRequired,
};

export default Waveform;
