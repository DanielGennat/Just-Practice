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

// describe('duration', () => {
//   test('changed to next item of timerChain', () => {
//     const timerChain = [30, 60];
//     const [timerPointer, setTimerPointer] = useState(0);
//     let duration = timerChain[timerPointer];
//     setUpNextInterval(timerChain, timerPointer, setTimerPointer);
//     expect(duration).toBe(60);
//   });
// });

describe('timperPointer', () => {
  test('changed to next item of timerChain', () => {
    let timerPointer = 0;
    setUpNextInterval(timerPointer);
    expect(timerPointer).toBe(1);
  });
});
