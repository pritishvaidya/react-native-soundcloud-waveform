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
    return inverse ? ACTIVE : ACTIVE_INVERSE;
  } if (bar / bars.length < percentPlayable) {
    return inverse ? ACTIVE_PLAYABLE : ACTIVE_PLAYABLE_INVERSE;
  }
  return inverse ? INACTIVE : INACTIVE_INVERSE;
}

const dimensionsWidth = Dimensions.get('window').width;

export { getColor, dimensionsWidth };
