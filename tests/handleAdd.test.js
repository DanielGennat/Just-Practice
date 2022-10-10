import handleAdd from '../components/EditFormComponents/EditTimerChainForm';

describe('newTimerChain', () => {
  test('has new timer with 5 minutes', () => {
    let newTimerChain = [{ id: 1, minutes: 1, seconds: 10 }];
    const setNewTimerChain = jest.fn();
    const addId = newTimerChain.length + 1;
    handleAdd(newTimerChain, setNewTimerChain);
    const newTimerChainAfterHandleAdd = [
      { id: 1, minutes: 1, seconds: 10 },
      { id: addId, minutes: 5, seconds: 0 },
    ];
    expect(newTimerChain).toMatchObject(newTimerChainAfterHandleAdd);
  });
});

describe('newTimerChain', () => {
  test('has new timer with 5 minutes', () => {
    let newTimerChain = [{ id: 1, minutes: 1, seconds: 10 }];
    const setNewTimerChain = jest.fn();
    const addId = newTimerChain.length + 1;
    const newTimerChainAfterHandleAdd = [
      { id: 1, minutes: 1, seconds: 10 },
      { id: addId, minutes: 5, seconds: 0 },
    ];
    handleAdd(newTimerChain, setNewTimerChain);
    expect(setNewTimerChain).toHaveBeenLastCalledWith(
      newTimerChainAfterHandleAdd
    );
  });
});
