import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import FormHeadline from '../components/FormHeadline';
import TimerBackgroundImage from '../components/TimerBackgroundImage';

export function renderTime(remainingTime, playNotificationSound) {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  if (remainingTime === 0) {
    playNotificationSound();
    return (
      <div>
        <Time>{seconds}</Time>
      </div>
    );
  } else if (seconds < 60 && minutes < 1) {
    return (
      <div>
        <Time>{seconds}</Time>
      </div>
    );
  } else if (seconds < 10) {
    return (
      <div>
        <Time>
          {minutes}:0{seconds}
        </Time>
      </div>
    );
  } else {
    return (
      <div>
        <Time>
          {minutes}:{seconds}
        </Time>
      </div>
    );
  }
}

export function setUpNextInterval(timerChain, timerPointer, setTimerPointer) {
  if (timerPointer + 1 < timerChain.length) {
    setTimerPointer(timerPointer + 1);
  }
}

export default function Home() {
  const timerChain = [3, 1, 2, 1];
  const [timerPointer, setTimerPointer] = useState(0);

  const [audio, setAudio] = useState(null);
  useEffect(() => {
    setAudio(new Audio('/sounds/expired-notification.mp3'));
  }, []);

  function playNotificationSound() {
    audio.play();
  }

  return (
    <>
      <TimerBackgroundImage />
      <TopWrapper>
        <TimerWrapper>
          <CountdownCircleTimer
            key={timerPointer}
            isPlaying
            duration={timerChain[timerPointer]}
            colors={['#49F6EC', '#dfe057', '#ff6666', '#b80a24']}
            colorsTime={[40, 30, 10, 0]}
            onComplete={() =>
              setUpNextInterval(timerChain, timerPointer, setTimerPointer)
            }
          >
            {({ remainingTime }) =>
              renderTime(remainingTime, playNotificationSound)
            }
          </CountdownCircleTimer>
        </TimerWrapper>
      </TopWrapper>
      <UserInteractionInfo>
        Click anywhere to activate acoustic notification
      </UserInteractionInfo>
      <FormHeadline />
    </>
  );
}

const Time = styled.div`
  font-size: 2rem;
  color: #caf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0.2);
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const TimerWrapper = styled.div`
  background: radial-gradient(
    circle,
    transparent 30%,
    rgba(10, 175, 230, 0.15) 50%,
    transparent 72%
  );
  padding: 2vh;
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
