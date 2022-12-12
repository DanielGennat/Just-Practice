import { handleAdd } from '../components/EditFormComponents/AddButton.js';

describe('newTimerChain', () => {
  test('has new timer with 5 minutes', () => {
    let newTimerChain = [
      { id: 1, minutes: 1, seconds: 10, exerciseName: 'Exercise 1' },
    ];
    const setNewTimerChain = jest.fn();
    const newTimerChainAfterHandleAdd = [
      { id: 1, minutes: 1, seconds: 10, exerciseName: 'Exercise 1' },
      { id: 2, minutes: 5, seconds: 0, exerciseName: '' },
    ];
    handleAdd(newTimerChain, setNewTimerChain);
    expect(setNewTimerChain).toHaveBeenLastCalledWith(
      newTimerChainAfterHandleAdd
    );
  });
});
