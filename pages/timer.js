import styled from 'styled-components';
import { useEffect, useState } from 'react';
import TimerBackgroundImage from '../components/TimerComponents/TimerBackgroundImage';
import FormHeadline from '../components/EditFormComponents/FormHeadline.js';
import CountdownCircleTimerFunction from '../components/TimerComponents/CountdownCircleTimerFunction';
import EditTimerChainForm from './edit';
import useLocalStorage from '../hooks/useLocalStorage';
import DisplayExerciseList from '../components/TimerComponents/DisplayExerciseList';

// export function handleSubmit(
//   event,
//   newTimerChain,
//   setTimerChain,
//   setTimerPointer,
//   countdownKey,
//   setCountdownKey
// ) {
//   event.preventDefault();
//   setTimerChain(newTimerChain);
//   setTimerPointer(0);
//   setCountdownKey(countdownKey + 1);
// }

export default function TimerPage({
  timerChain,
  setTimerChain,
  timerPointer,
  setTimerPointer,
  countdownKey,
  setCountdownKey,
}) {
  // const initialChain = [
  //   { id: 1, minutes: 0, seconds: 30, name: 'Exercise 1' },
  //   { id: 2, minutes: 1, seconds: 10, name: 'practice sth. else' },
  //   { id: 3, minutes: 1, seconds: 2, name: 'a minor arpeggio' },
  //   { id: 4, minutes: 1, seconds: 40, name: 'my favorite song' },
  // ];
  // const [timerChain, setTimerChain] = useLocalStorage(
  //   '_timerChainStorage',
  //   initialChain
  // );
  // const [timerPointer, setTimerPointer] = useState(0);
  // const [countdownKey, setCountdownKey] = useState(0);

  // if (
  //   timerPointer + 1 < timerChain.length &&
  //   timerChain[timerPointer].minutes + timerChain[timerPointer].seconds < 1
  // ) {
  //   setTimerPointer(timerPointer + 1);
  // }

  console.log(timerChain, 'timer page');
  return (
    <>
      <TimerBackgroundImage />
      <TopWrapper>
        <CountdownCircleTimerFunction
          timerChain={timerChain}
          timerPointer={timerPointer}
          setTimerPointer={setTimerPointer}
          countdownKey={countdownKey}
          setCountdownKey={setCountdownKey}
        />
      </TopWrapper>
      <DisplayExerciseList
        timerChain={timerChain}
        timerPointer={timerPointer}
      />
      {/* <EditTimerChainForm
        timerChain={timerChain}
        setTimerChain={setTimerChain}
        setTimerPointer={setTimerPointer}
        handleSubmit={handleSubmit}
        countdownKey={countdownKey}
        setCountdownKey={setCountdownKey}
      /> */}
      <UserInteractionInfo>
        Click anywhere if you don't get any acoustic notification
      </UserInteractionInfo>
    </>
  );
}

const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const UserInteractionInfo = styled.div`
  color: #caf6ff;
  text-shadow: 3px 3px 5px #000000;
  padding: 30px 10px;
  //max-width: 50vw;
  background-color: rgba(10, 175, 230, 0.2);
  display: flex;
  margin: 5vh 5vw;
  border-radius: 10px;
  position: fixed;
  left: 0px;
  bottom: 0px;
`;
