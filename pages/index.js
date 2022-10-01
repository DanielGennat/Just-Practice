import styled from 'styled-components';
import { useState } from 'react';
import TimerBackgroundImage from '../components/TimerComponents/TimerBackgroundImage';
import FormHeadline from '../components/EditFormComponents/FormHeadline.js';
import CountdownCircleTimerFunction from '../components/TimerComponents/CountdownCircleTimerFunction';
import EditTimerChainForm from '../components/EditFormComponents/EditTimerChainForm';

export default function Home() {
  const [timerChain, setTimerChain] = useState([30, 60, 62, 100]);
  const [timerPointer, setTimerPointer] = useState(0);

  return (
    <>
      <TimerBackgroundImage />
      <TopWrapper>
        <CountdownCircleTimerFunction
          timerChain={timerChain}
          timerPointer={timerPointer}
          setTimerPointer={setTimerPointer}
        />
      </TopWrapper>
      <UserInteractionInfo>
        Click anywhere to activate acoustic notification
      </UserInteractionInfo>
      <FormHeadline />
      <EditTimerChainForm
        timerChain={timerChain}
        setTimerChain={setTimerChain}
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
