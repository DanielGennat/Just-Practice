import styled from 'styled-components';
import { useEffect, useState } from 'react';
import TimerBackgroundImage from '../components/TimerComponents/TimerBackgroundImage';
import FormHeadline from '../components/EditFormComponents/FormHeadline.js';
import CountdownCircleTimerFunction from '../components/TimerComponents/CountdownCircleTimerFunction';
import EditTimerChainForm from './edit';
import useLocalStorage from '../hooks/useLocalStorage';
import DisplayExerciseList from '../components/TimerComponents/DisplayExerciseList';
import Link from 'next/link';
import edit from '../public/edit-button.svg';
import Image from 'next/image';

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
  initialChain,
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

  // if (timerChain.length === 0) {
  //   useEffect(() => {
  //     setNewTimerChain(initialChain);
  //   }, [timerChain]);
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
      <LinkWrapper>
        <Link href="/edit">
          <Image alt="edit" src={edit} width="64" height="64" />
        </Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link href="/">
          <Home>Home</Home>
        </Link>
      </LinkWrapper>
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

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Home = styled.a`
  background-color: rgba(10, 175, 230, 0.2);
  font-weight: bold;
  font-size: 1.5rem;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  width: 130px;

  &:hover {
    box-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0.2);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0.2);
`;

const UserInteractionInfo = styled.div`
  color: #caf6ff;
  text-shadow: 2px 2px 5px #000000;
  padding: 30px 10px;
  background-color: rgba(10, 175, 230, 0.2);
  display: flex;
  margin: 5vh 5vw;
  border-radius: 10px;
  position: fixed;
  left: 0px;
  bottom: 0px;
`;
