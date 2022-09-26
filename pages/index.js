import Image from 'next/image';
import manPlayingGuitarOnHisBackImg from '../public/guitarOnBack.png';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

export default function Home() {
  const [audio, setAudio] = useState(null);
  useEffect(() => {
    setAudio(new Audio('/sounds/expired-notification.mp3'));
  }, []);

  const renderTime = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    if (remainingTime === 0) {
      audio.play();
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
  };

  return (
    <>
      <ImageWrapper>
        <Image
          alt="background image man playing guitar on his back"
          src={manPlayingGuitarOnHisBackImg}
          layout="fill"
          objectFit="cover"
          width={6000}
          height={4000}
        />
      </ImageWrapper>
      <TimerWrapper>
        <CountdownCircleTimer
          isPlaying
          duration={3}
          colors={['#49F6EC', '#dfe057', '#ff6666', '#b80a24']}
          colorsTime={[40, 30, 10, 0]}
        >
          {renderTime}
        </CountdownCircleTimer>
        <button>Click here to activate acoustic notification</button>
      </TimerWrapper>
    </>
  );
}

const Time = styled.div`
  font-size: 2rem;
  color: #49f6ec;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
`;

const ImageWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
`;

const TimerWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 5vh;
`;
