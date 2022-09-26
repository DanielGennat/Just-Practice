import { renderTime } from './index.js';

function renderTime(callback, remainingTime) {
  if (remainingTime === 0) {
    callback(playNotificationSound());
  }
}

describe('renderTime', () => {
  test('timer has expired', () => {
    const playNotificationSound = jest.fn();
    Home(playNotificationSound, 0);
    expect(playNotificationSound).toHaveBeenCalled();
  });

  test('timer has not expired yet', () => {
    const playNotificationSound = jest.fn();
    Home(playNotificationSound, 1);
    expect(playNotificationSound).not.toHaveBeenCalled();
  });
});
