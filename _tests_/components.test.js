/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import checkPropTypes from 'check-prop-types';
import TestRenderer from 'react-test-renderer';
import Waveform from '../src/components/Waveform';

describe('Waveform Component Tests', () => {
  const waveform = {};
  const height = 50;
  const width = 100;
  const setTime = () => {};
  const percentPlayed = 50;
  const percentPlayable = 100;
  const inverse = true;
  const active = '#FF1844';
  const activeInverse = '#4F1224';
  const activePlayable = '#1b1b26';
  const activePlayableInverse = '#131116';
  const inactive = '#424056';
  const inactiveInverse = '#1C1A27';

  describe('check prop types', () => {
    it('should throw an error if waveform image is not specified', () => {
      expect(
        checkPropTypes(
          Waveform.propTypes,
          {
            waveform: null,
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
          },
          'prop',
          Waveform.waveform,
        ),
      ).toBe('Failed prop type: The prop `waveform` is marked as required in `<<anonymous>>`, but its value is `null`.');
    });

    it('should throw an error if waveform height is not specified', () => {
      expect(
        checkPropTypes(
          Waveform.propTypes,
          {
            waveform,
            height: null,
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
          },
          'prop',
          Waveform.height,
        ),
      ).toBe('Failed prop type: The prop `height` is marked as required in `<<anonymous>>`, but its value is `null`.');
    });

    it('should throw an error if waveform width is not specified', () => {
      expect(
        checkPropTypes(
          Waveform.propTypes,
          {
            waveform,
            height,
            width: null,
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
          },
          'prop',
          Waveform.width,
        ),
      ).toBe('Failed prop type: The prop `width` is marked as required in `<<anonymous>>`, but its value is `null`.');
    });

    it('should throw an error if waveform setTime is not specified', () => {
      expect(
        checkPropTypes(
          Waveform.propTypes,
          {
            waveform,
            height,
            width,
            setTime: null,
            percentPlayed,
            percentPlayable,
            inverse,
            active,
            activeInverse,
            activePlayable,
            activePlayableInverse,
            inactive,
            inactiveInverse,
          },
          'prop',
          Waveform.setTime,
        ),
      ).toBe('Failed prop type: The prop `setTime` is marked as required in `<<anonymous>>`, but its value is `null`.');
    });

    it('should throw an error if waveform percentPlayed is not specified', () => {
      expect(
        checkPropTypes(
          Waveform.propTypes,
          {
            waveform,
            height,
            width,
            setTime,
            percentPlayed: null,
            percentPlayable,
            inverse,
            active,
            activeInverse,
            activePlayable,
            activePlayableInverse,
            inactive,
            inactiveInverse,
          },
          'prop',
          Waveform.percentPlayed,
        ),
      ).toBe('Failed prop type: The prop `percentPlayed` is marked as required in `<<anonymous>>`, but its value is `null`.');
    });

    it('should throw an error if waveform percentPlayable is not specified', () => {
      expect(
        checkPropTypes(
          Waveform.propTypes,
          {
            waveform,
            height,
            width,
            setTime,
            percentPlayed,
            percentPlayable: null,
            inverse,
            active,
            activeInverse,
            activePlayable,
            activePlayableInverse,
            inactive,
            inactiveInverse,
          },
          'prop',
          Waveform.percentPlayable,
        ),
      ).toBe('Failed prop type: The prop `percentPlayable` is marked as required in `<<anonymous>>`, but its value is `null`.');
    });

    it('should throw an error if waveform inverse is not specified', () => {
      expect(
        checkPropTypes(
          Waveform.propTypes,
          {
            waveform,
            height,
            width,
            setTime,
            percentPlayed,
            percentPlayable,
            inverse: null,
            active,
            activeInverse,
            activePlayable,
            activePlayableInverse,
            inactive,
            inactiveInverse,
          },
          'prop',
          Waveform.inverse,
        ),
      ).toBe('Failed prop type: The prop `inverse` is marked as required in `<<anonymous>>`, but its value is `null`.');
    });

    it('should throw an error if waveform active is not specified', () => {
      expect(
        checkPropTypes(
          Waveform.propTypes,
          {
            waveform,
            height,
            width,
            setTime,
            percentPlayed,
            percentPlayable,
            inverse,
            active: null,
            activeInverse,
            activePlayable,
            activePlayableInverse,
            inactive,
            inactiveInverse,
          },
          'prop',
          Waveform.active,
        ),
      ).toBe('Failed prop type: The prop `active` is marked as required in `<<anonymous>>`, but its value is `null`.');
    });

    it('should throw an error if waveform activeInverse is not specified', () => {
      expect(
        checkPropTypes(
          Waveform.propTypes,
          {
            waveform,
            height,
            width,
            setTime,
            percentPlayed,
            percentPlayable,
            inverse,
            active,
            activeInverse: null,
            activePlayable,
            activePlayableInverse,
            inactive,
            inactiveInverse,
          },
          'prop',
          Waveform.activeInverse,
        ),
      ).toBe('Failed prop type: The prop `activeInverse` is marked as required in `<<anonymous>>`, but its value is `null`.');
    });

    it('should throw an error if waveform activePlayable is not specified', () => {
      expect(
        checkPropTypes(
          Waveform.propTypes,
          {
            waveform,
            height,
            width,
            setTime,
            percentPlayed,
            percentPlayable,
            inverse,
            active,
            activeInverse,
            activePlayable: null,
            activePlayableInverse,
            inactive,
            inactiveInverse,
          },
          'prop',
          Waveform.activePlayable,
        ),
      ).toBe('Failed prop type: The prop `activePlayable` is marked as required in `<<anonymous>>`, but its value is `null`.');
    });

    it('should throw an error if waveform activePlayableInverse is not specified', () => {
      expect(
        checkPropTypes(
          Waveform.propTypes,
          {
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
            activePlayableInverse: null,
            inactive,
            inactiveInverse,
          },
          'prop',
          Waveform.activePlayableInverse,
        ),
      ).toBe('Failed prop type: The prop `activePlayableInverse` is marked as required in `<<anonymous>>`, but its value is `null`.');
    });

    it('should throw an error if waveform inactive is not specified', () => {
      expect(
        checkPropTypes(
          Waveform.propTypes,
          {
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
            inactive: null,
            inactiveInverse,
          },
          'prop',
          Waveform.height,
        ),
      ).toBe('Failed prop type: The prop `inactive` is marked as required in `<<anonymous>>`, but its value is `null`.');
    });

    it('should throw an error if waveform inactiveInverse is not specified', () => {
      expect(
        checkPropTypes(
          Waveform.propTypes,
          {
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
            inactiveInverse: null,
          },
          'prop',
          Waveform.waveform,
        ),
      ).toBe('Failed prop type: The prop `inactiveInverse` is marked as required in `<<anonymous>>`, but its value is `null`.');
    });
  });

  describe('component details', () => {
    const componentTestRenderer = TestRenderer.create(<Waveform
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
      inverse={inverse}
    />);

    it('should render the component correctly', () => {
      expect(componentTestRenderer).toMatchSnapshot();
    });

    it('should contain a view ', () => {
      const wrapper = componentTestRenderer.toJSON();
      expect(wrapper.type).toBe('View');
    });
  });
});
