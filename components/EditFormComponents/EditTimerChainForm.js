import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import hook from '../../public/hook.svg';
import add from '../../public/add-button.svg';
import remove from '../../public/delete-button.svg';

export function changeTimerChain(event, id, newTimerChain, setNewTimerChain) {
  if (event.target.id === 'name') {
    setNewTimerChain(
      newTimerChain.map((newTimer) => {
        if (newTimer.id === id) {
          return { ...newTimer, name: event.target.value };
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

export function handleAdd(newTimerChain, setNewTimerChain) {
  const addId = newTimerChain.length + 1;
  setNewTimerChain([...newTimerChain, { id: addId, minutes: 5, seconds: 0 }]);
}

export function handleRemove(newTimerChain, setNewTimerChain) {
  const lastId = newTimerChain.length;
  const newChain = newTimerChain.filter((timer) => timer.id !== lastId);
  setNewTimerChain(newChain);
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

  useEffect(() => {
    setNewTimerChain(timerChain);
  }, [timerChain]);

  const timeOptions = [];
  for (let i = 0; i <= 59; i++) {
    timeOptions.push(i);
  }

  return (
    <form
      onSubmit={(event) =>
        handleSubmit(
          event,
          newTimerChain,
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
              <ExerciseName
                id="name"
                type="text"
                value={newTimer.name}
                placeholder={`Exercise ${newTimer.id}`}
                onChange={(event) =>
                  changeTimerChain(
                    event,
                    newTimer.id,
                    newTimerChain,
                    setNewTimerChain
                  )
                }
              />
              <Label htmlFor="name"> Exercise</Label>
            </InputAndLabelWrapper>
            <InputAndLabelWrapper>
              <Select
                id="minutes"
                value={newTimer.minutes}
                onChange={(event) =>
                  changeTimerChain(
                    event,
                    newTimer.id,
                    newTimerChain,
                    setNewTimerChain
                  )
                }
              >
                {timeOptions.map((option) => {
                  return (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  );
                })}
              </Select>
              <Label htmlFor="minutes">min.</Label>
            </InputAndLabelWrapper>
            <span>:</span>
            <InputAndLabelWrapper>
              <Select
                id="seconds"
                value={newTimer.seconds}
                onChange={(event) =>
                  changeTimerChain(
                    event,
                    newTimer.id,
                    newTimerChain,
                    setNewTimerChain
                  )
                }
              >
                {timeOptions.map((option) => {
                  return (
                    <option key={option} value={option}>
                      {option < 10 ? `0${option}` : option}
                    </option>
                  );
                })}
              </Select>
              <Label htmlFor="seconds"> sec.</Label>
            </InputAndLabelWrapper>
          </Li>
        ))}
      </FormList>
      <ButtonWrapper>
        <FormButtons
          type="button"
          onClick={() => handleAdd(newTimerChain, setNewTimerChain)}
        >
          <Image alt="add" src={add} width="64" height="64" />
        </FormButtons>
        <FormButtons
          type="button"
          onClick={() => handleRemove(newTimerChain, setNewTimerChain)}
        >
          <Image alt="remove" src={remove} width="64" height="64" />
        </FormButtons>
      </ButtonWrapper>
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
    margin: 0 5px 0 0;
  }
`;

const InputAndLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExerciseName = styled.input`
  background-color: #edffdf;
  margin: 0 1px;
  border-radius: 5px;
  border: none;
`;

const Select = styled.select`
  text-align: right;
  background-color: #edffdf;
  width: 50px;
  margin: 0 1px;
  border-radius: 5px;
  border: none;
`;

const Label = styled.label`
  color: #caf6ff;
  font-weight: 300;
  font-size: 0.8rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const FormButtons = styled.button`
  background-color: transparent;
  border: none;

  &:active {
    transform: translateY(1px);
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
  border: none;
  border-radius: 5px;
  position: absolute;
  margin: 10px 0 0 0;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    transform: translateY(1px);
  }
`;
