import { renderTime } from '../pages/index.js';
import { setUpNextInterval } from '../pages/index.js';

describe('renderTime', () => {
  test('timer has expired', () => {
    const playNotificationSound = jest.fn();
    renderTime(0, playNotificationSound);
    expect(playNotificationSound).toHaveBeenCalled();
  });

  test('timer has not expired yet', () => {
    const playNotificationSound = jest.fn();
    renderTime(1, playNotificationSound);
    expect(playNotificationSound).not.toHaveBeenCalled();
  });
});

describe('timerPointer', () => {
  test('changed to next index of timerChain', () => {
    const timerChain = [30, 60];
    let timerPointer = 0;
    const setTimerPointer = jest.fn();
    setUpNextInterval(timerChain, timerPointer, setTimerPointer);
    expect(setTimerPointer).toHaveBeenLastCalledWith(1);
  });
});
