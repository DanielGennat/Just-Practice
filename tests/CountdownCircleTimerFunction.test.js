import { setUpNextInterval } from '../components/TimerComponents/CountdownCircleTimerFunction.js';

describe('timerPointer', () => {
  test('changed to next index of timerChain', () => {
    const timerChain = [30, 60];
    let timerPointer = 0;
    const setTimerPointer = jest.fn();
    setUpNextInterval(timerChain, timerPointer, setTimerPointer);
    expect(setTimerPointer).toHaveBeenLastCalledWith(1);
  });
});
