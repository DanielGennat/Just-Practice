import EditTimerChainForm from '../pages/edit.js';

describe('all newTimerChain.seconds', () => {
  test('are greater than or equal 0', () => {
    const newTimerChain = [
      { id: 1, minutes: 0, seconds: 30 },
      { id: 2, minutes: 1, seconds: 10 },
      { id: 3, minutes: 1, seconds: 2 },
      { id: 4, minutes: 1, seconds: 40 },
    ];
    newTimerChain.map((timer) =>
      expect(timer.seconds).toBeGreaterThanOrEqual(0)
    );
  });
  test('are lesser than or equal 59', () => {
    const newTimerChain = [
      { id: 1, minutes: 0, seconds: 30 },
      { id: 2, minutes: 1, seconds: 10 },
      { id: 3, minutes: 1, seconds: 2 },
      { id: 4, minutes: 1, seconds: 40 },
    ];
    newTimerChain.map((timer) => expect(timer.seconds).toBeLessThanOrEqual(59));
  });
});

describe('all newTimerChain.minutes', () => {
  test('are greater than or equal 0', () => {
    const newTimerChain = [
      { id: 1, minutes: 0, seconds: 30 },
      { id: 2, minutes: 1, seconds: 10 },
      { id: 3, minutes: 1, seconds: 2 },
      { id: 4, minutes: 1, seconds: 40 },
    ];
    newTimerChain.map((timer) =>
      expect(timer.minutes).toBeGreaterThanOrEqual(0)
    );
  });
  test('are lesser than or equal 59', () => {
    const newTimerChain = [
      { id: 1, minutes: 0, seconds: 30 },
      { id: 2, minutes: 1, seconds: 10 },
      { id: 3, minutes: 1, seconds: 2 },
      { id: 4, minutes: 1, seconds: 40 },
    ];
    newTimerChain.map((timer) => expect(timer.minutes).toBeLessThanOrEqual(59));
  });
});
