import styled from 'styled-components';
import { useState } from 'react';
import TimerBackgroundImage from '../components/TimerComponents/TimerBackgroundImage';
import FormHeadline from '../components/EditFormComponents/FormHeadline.js';
import CountdownCircleTimerFunction from '../components/TimerComponents/CountdownCircleTimerFunction';
import EditTimerChainForm from '../components/EditFormComponents/EditTimerChainForm';

export function handleSubmit(
  event,
  newTimerChain,
  timerChain,
  setTimerChain,
  setTimerPointer,
  key,
  setKey
) {
  //debugger;
  event.preventDefault();
  setTimerChain(newTimerChain);
  setTimerPointer(0);
  setKey(key + 1); //warum undefined??

  console.log(event.target);
  console.log(timerChain);
  console.log(key);
}

export default function Home() {
  const [timerChain, setTimerChain] = useState([
    { id: 1, minutes: 0, seconds: 30 },
    { id: 2, minutes: 1, seconds: 0 },
    { id: 3, minutes: 1, seconds: 2 },
    { id: 4, minutes: 1, seconds: 40 },
  ]);
  const [timerPointer, setTimerPointer] = useState(0);
  const [key, setKey] = useState(0);

  // console.log(timerChain);
  // console.log(timerPointer);
  console.log(key);

  return (
    <>
      <TimerBackgroundImage />
      <TopWrapper>
        <CountdownCircleTimerFunction
          timerChain={timerChain}
          timerPointer={timerPointer}
          setTimerPointer={setTimerPointer}
          key={key}
          setKey={setKey}
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
        key={key}
        setKey={setKey}
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
  background-color: rgba(10, 175, 230, 0.2);
  display: inline-block;
  margin: 50px;
  border-radius: 10px;
  position: absolute;
  left: 0px;
  bottom: 0px;
`;
