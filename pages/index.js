import styled from 'styled-components';
import { useState } from 'react';
import TimerBackgroundImage from '../components/TimerComponents/TimerBackgroundImage';
import FormHeadline from '../components/EditFormComponents/FormHeadline.js';
import CountdownCircleTimerFunction from '../components/TimerComponents/CountdownCircleTimerFunction';
import EditTimerChainForm from '../components/EditFormComponents/EditTimerChainForm';

export function handleSubmit(
  event,
  newTimerChain,
  setTimerChain,
  setTimerPointer,
  countdownKey,
  setCountdownKey
) {
  event.preventDefault();
  setTimerChain(newTimerChain);
  setTimerPointer(0);
  setCountdownKey(countdownKey + 1);
}

export default function Home() {
  const [timerChain, setTimerChain] = useState([
    { id: 1, minutes: 0, seconds: 30 },
    { id: 2, minutes: 1, seconds: 10 },
    { id: 3, minutes: 1, seconds: 2 },
    { id: 4, minutes: 1, seconds: 40 },
  ]);
  const [timerPointer, setTimerPointer] = useState(0);
  const [countdownKey, setCountdownKey] = useState(0);

  if (
    (timerPointer + 1 < timerChain.length) &
    (timerChain[timerPointer].minutes + timerChain[timerPointer].seconds < 1)
  ) {
    setTimerPointer(timerPointer + 1);
  }

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
      <UserInteractionInfo>
        Click anywhere to activate acoustic notification
      </UserInteractionInfo>
      <FormHeadline />
      <EditTimerChainForm
        timerChain={timerChain}
        setTimerChain={setTimerChain}
        setTimerPointer={setTimerPointer}
        handleSubmit={handleSubmit}
        countdownKey={countdownKey}
        setCountdownKey={setCountdownKey}
      />
    </>
  );
}

const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const UserInteractionInfo = styled.div`
  color: #caf6ff;
  padding: 30px 10px;
  max-width: 25vw;
  background-color: rgba(10, 175, 230, 0.2);
  display: inline-block;
  margin: 50px;
  border-radius: 10px;
  position: absolute;
  left: 0px;
  bottom: 0px;
`;
