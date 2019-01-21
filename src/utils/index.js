/* eslint import/no-unresolved: [2, { ignore: ['react-native'] }] */
import { Dimensions } from 'react-native';

function getColor(
  bars,
  bar,
  percentPlayed,
  percentPlayable,
  inverse,
  ACTIVE,
  ACTIVE_INVERSE,
  ACTIVE_PLAYABLE,
  ACTIVE_PLAYABLE_INVERSE,
  INACTIVE,
  INACTIVE_INVERSE,
) {
  if (bar / bars.length < percentPlayed) {
    return inverse ? ACTIVE_INVERSE : ACTIVE;
  } if (bar / bars.length < percentPlayable) {
    return inverse ? ACTIVE_PLAYABLE_INVERSE : ACTIVE_PLAYABLE;
  }
  return inverse ? INACTIVE_INVERSE : INACTIVE;
}

const dimensionsWidth = Dimensions.get('window').width;

export { getColor, dimensionsWidth };
