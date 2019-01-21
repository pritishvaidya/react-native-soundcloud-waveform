import { Dimensions } from 'react-native';
import { getColor, dimensionsWidth } from '../src/utils';

describe('Testing Utility functions', () => {
  describe('getColor utility method', () => {
    const bars = [1, 2, 3, 4, 5];
    const ACTIVE = '#FF1844';
    const ACTIVE_INVERSE = '#4F1224';
    const ACTIVE_PLAYABLE = '#1b1b26';
    const ACTIVE_PLAYABLE_INVERSE = '#131116';
    const INACTIVE = '#424056';
    const INACTIVE_INVERSE = '#1C1A27';

    describe('inverse is not true', () => {
      const inverse = false;

      it('should generate ACTIVE waveform if percentPlayed is greater than normalized bar', () => {
        const bar = 1;
        const percentagePlayed = 10;
        const percentagePlayable = 0;

        expect(
          getColor(
            bars,
            bar,
            percentagePlayed,
            percentagePlayable,
            inverse, ACTIVE,
            ACTIVE_INVERSE,
            ACTIVE_PLAYABLE,
            ACTIVE_PLAYABLE_INVERSE,
            INACTIVE,
            INACTIVE_INVERSE,
          ),
        ).toBe(ACTIVE);
      });

      it('should generate ACTIVE_PLAYABLE waveform if percentPlayable is greater than normalized bar', () => {
        const bar = 1;
        const percentagePlayed = 0;
        const percentagePlayable = 10;

        expect(
          getColor(
            bars,
            bar,
            percentagePlayed,
            percentagePlayable,
            inverse, ACTIVE,
            ACTIVE_INVERSE,
            ACTIVE_PLAYABLE,
            ACTIVE_PLAYABLE_INVERSE,
            INACTIVE,
            INACTIVE_INVERSE,
          ),
        ).toBe(ACTIVE_PLAYABLE);
      });

      it('should generate INACTIVE waveform otherwise', () => {
        const bar = 100;
        const percentagePlayed = 10;
        const percentagePlayable = 10;

        expect(
          getColor(
            bars,
            bar,
            percentagePlayed,
            percentagePlayable,
            inverse, ACTIVE,
            ACTIVE_INVERSE,
            ACTIVE_PLAYABLE,
            ACTIVE_PLAYABLE_INVERSE,
            INACTIVE,
            INACTIVE_INVERSE,
          ),
        ).toBe(INACTIVE);
      });
    });

    describe('inverse is true', () => {
      const inverse = true;

      it('should generate ACTIVE_INVERSE waveform if percentPlayed is greater than normalized bar', () => {
        const bar = 1;
        const percentagePlayed = 10;
        const percentagePlayable = 0;

        expect(
          getColor(
            bars,
            bar,
            percentagePlayed,
            percentagePlayable,
            inverse, ACTIVE,
            ACTIVE_INVERSE,
            ACTIVE_PLAYABLE,
            ACTIVE_PLAYABLE_INVERSE,
            INACTIVE,
            INACTIVE_INVERSE,
          ),
        ).toBe(ACTIVE_INVERSE);
      });


      it('should generate ACTIVE_PLAYABLE_INVERSE waveform if percentPlayed is greater than normalized bar', () => {
        const bar = 1;
        const percentagePlayed = 0;
        const percentagePlayable = 10;

        expect(
          getColor(
            bars,
            bar,
            percentagePlayed,
            percentagePlayable,
            inverse, ACTIVE,
            ACTIVE_INVERSE,
            ACTIVE_PLAYABLE,
            ACTIVE_PLAYABLE_INVERSE,
            INACTIVE,
            INACTIVE_INVERSE,
          ),
        ).toBe(ACTIVE_PLAYABLE_INVERSE);
      });

      it('should generate INACTIVE_INVERSE waveform otherwise', () => {
        const bar = 100;
        const percentagePlayed = 10;
        const percentagePlayable = 10;

        expect(
          getColor(
            bars,
            bar,
            percentagePlayed,
            percentagePlayable,
            inverse, ACTIVE,
            ACTIVE_INVERSE,
            ACTIVE_PLAYABLE,
            ACTIVE_PLAYABLE_INVERSE,
            INACTIVE,
            INACTIVE_INVERSE,
          ),
        ).toBe(INACTIVE_INVERSE);
      });
    });
  });

  describe('dimensionsWidth utility method', () => {
    const { width } = Dimensions.get('window');
    it('should generate dimensions width of the screen', () => {
      expect(dimensionsWidth).toBe(width);
    });
  });
});
