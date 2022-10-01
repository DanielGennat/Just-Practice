import RenderTime from '../components/TimerComponents/RenderTime.js';

describe('RenderTime', () => {
  test('timer has expired', () => {
    const playNotificationSound = jest.fn();
    RenderTime(0, playNotificationSound);
    expect(playNotificationSound).toHaveBeenCalled();
  });

  test('timer has not expired yet', () => {
    const playNotificationSound = jest.fn();
    RenderTime(1, playNotificationSound);
    expect(playNotificationSound).not.toHaveBeenCalled();
  });
});
