import { renderTime } from '../pages/index.js';

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
