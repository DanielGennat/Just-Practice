import Home from './index.js';

function Home(callback, remainingTime) {
  if (remainingTime === 0) {
    callback(playNotificationSound(url));
  }
}

describe('Home', () => {
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
