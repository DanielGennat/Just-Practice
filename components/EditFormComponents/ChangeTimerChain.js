export default function changeTimerChain(
  event,
  id,
  newTimerChain,
  setNewTimerChain
) {
  if (event.target.id === 'exerciseName') {
    setNewTimerChain(
      newTimerChain.map((newTimer) => {
        if (newTimer.id === id) {
          return {
            ...newTimer,
            exerciseName: event.target.value,
          };
        }
        return newTimer;
      })
    );
  } else if (event.target.id === 'seconds') {
    setNewTimerChain(
      newTimerChain.map((newTimer) => {
        if (newTimer.id === id) {
          return { ...newTimer, seconds: Number(event.target.value) };
        }
        return newTimer;
      })
    );
  } else {
    setNewTimerChain(
      newTimerChain.map((newTimer) => {
        if (newTimer.id === id) {
          return { ...newTimer, minutes: Number(event.target.value) };
        }
        return newTimer;
      })
    );
  }
}
