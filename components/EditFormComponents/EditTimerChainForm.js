import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import hook from '../../public/hook.svg';

// export function handleSubmit(
//   event,
//   newTimerChain,
//   setTimerChain,
//   setTimerPointer
// ) {
//   event.preventDefault();
//   setTimerChain(newTimerChain);
//   setTimerPointer(0);

//   console.log(event.target);
//   //hier nur noch restart-funktion
// }

// export function value(seconds) {
//   if (seconds > 59) {
//     return 59;
//     //   } else if (seconds.length > 2) {
//     //     const slicedSeconds = seconds.slice(1);
//     //     return slicedSeconds;
//   } else if (seconds < 10) {
//     return `0${seconds}`;
//   } else {
//     return seconds;
//   }
// }

export function changeTimerChain(event, id, newTimerChain, setNewTimerChain) {
  let value = event.target.value;
  console.log(event.target);
  console.log('id=', id);
  console.log('value=', value);
  //   if (value.length > 2) {
  //     value = value.slice(1);
  //     console.log(value);
  //     return value;
  //   } else {
  //   }
  if (event.target.name === 'seconds') {
    setNewTimerChain(
      newTimerChain.map((newTimer) => {
        if (newTimer.id === id) {
          return { ...newTimer, seconds: Number(value) };
        }
        return newTimer;
      })
    );
  } else {
    setNewTimerChain(
      newTimerChain.map((newTimer) => {
        if (newTimer.id === id) {
          return { ...newTimer, minutes: Number(value) };
        }
        return newTimer;
      })
    );
  }
}

export default function EditTimerChainForm({
  timerChain,
  setTimerChain,
  setTimerPointer,
  handleSubmit,
  countdownKey,
  setCountdownKey,
}) {
  const [newTimerChain, setNewTimerChain] = useState(timerChain);
  return (
    <form
      onSubmit={(event) =>
        handleSubmit(
          event,
          newTimerChain,
          timerChain,
          setTimerChain,
          setTimerPointer,
          countdownKey,
          setCountdownKey
        )
      }
    >
      <FormList>
        {newTimerChain.map((newTimer) => (
          <Li key={newTimer.id}>
            <InputAndLabelWrapper>
              <Input
                type="number"
                id={`minutes of ${newTimer.id}`}
                name="minutes"
                min="0"
                max="59"
                //defaultValue={newTimer.minutes < 1 ? '' : newTimer.minutes}
                value={newTimer.minutes}
                onChange={(event) =>
                  changeTimerChain(
                    event,
                    newTimer.id,
                    newTimerChain,
                    setNewTimerChain
                  )
                }
                //required
              />
              <label htmlFor={`minutes of ${newTimer.id}`}>min.</label>
            </InputAndLabelWrapper>
            <span>:</span>
            <InputAndLabelWrapper>
              <Input
                type="number"
                id={`seconds of ${newTimer.id}`}
                name="seconds"
                min="0"
                max="59"
                //defaultValue={timer.seconds}
                value={
                  //   value(newTimer.seconds)
                  newTimer.seconds < 10
                    ? `0${newTimer.seconds}`
                    : newTimer.seconds
                }
                onChange={(event) =>
                  changeTimerChain(
                    event,
                    newTimer.id,
                    newTimerChain,
                    setNewTimerChain
                  )
                }
                required
              />
              <label htmlFor={`seconds of ${newTimer.id}`}> sec.</label>
            </InputAndLabelWrapper>
          </Li>
        ))}
      </FormList>
      <Apply type="submit">
        <Image alt="hook" src={hook} width="42" height={41.71} />
        <div>Restart</div>
      </Apply>
    </form>
  );
}

const FormList = styled.ol`
  background-color: rgba(52, 108, 61, 0.7);
  margin: 5px 10vw;
  border-radius: 5px;
  padding: 5px;
  list-style-type: none;
  counter-reset: li;
`;

const Li = styled.li`
  display: flex;
  justify-content: center;

  &::before {
    counter-increment: li;
    content: counter(li, decimal-leading-zero);
    color: #caf6ff;
  }
`;

const InputAndLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  text-align: right;
  &::before {
    content: '0';
  }
`;

const Apply = styled.button`
  color: #caf6ff;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  background-color: rgba(52, 108, 61, 1);
  width: 167px;
  height: 64px;
  border: 1px solid #000000;
  border-radius: 5px;
  position: absolute;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
