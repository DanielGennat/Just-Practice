import Image from 'next/image';
import manPlayingGuitarOnHisBackImg from '../public/guitarOnBack.png';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

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

export default function Home() {
  const [audio, setAudio] = useState(null);
  useEffect(() => {
    setAudio(new Audio('/sounds/expired-notification.mp3'));
  }, []);

  function playNotificationSound() {
    audio.play();
  }
  return (
    <>
      <ImageWrapper>
        <Image
          alt="background image man playing guitar on his back"
          src={manPlayingGuitarOnHisBackImg}
          layout="fill"
          objectFit="cover"
        />
      </ImageWrapper>
      <TopWrapper>
        <TimerWrapper>
          <CountdownCircleTimer
            isPlaying
            duration={300}
            colors={['#49F6EC', '#dfe057', '#ff6666', '#b80a24']}
            colorsTime={[40, 30, 10, 0]}
          >
            {({ remainingTime }) =>
              renderTime(remainingTime, playNotificationSound)
            }
          </CountdownCircleTimer>
        </TimerWrapper>
      </TopWrapper>
      <Button>Click anywhere to activate acoustic notification</Button>
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

const ImageWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
  background-color: black;
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

const Button = styled.div`
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
