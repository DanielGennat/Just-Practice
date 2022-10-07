import { setUpNextInterval } from '../components/TimerComponents/CountdownCircleTimerFunction.js';

describe('timerPointer', () => {
  test('changed to next index of timerChain', () => {
    const timerChain = [30, 60];
    let timerPointer = 0;
    const setTimerPointer = jest.fn();
    const setCountdownKey = jest.fn();
    setUpNextInterval(
      timerChain,
      timerPointer,
      setTimerPointer,
      setCountdownKey
    );
    expect(setTimerPointer).toHaveBeenLastCalledWith(1);
  });
});
