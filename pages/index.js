import { BUILD_ID_FILE } from 'next/dist/shared/lib/constants';
import Image from 'next/image';
import manPlayingGuitarOnHisBackImg from '../public/guitarOnBack.png';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styled from 'styled-components';

export default function Home() {
  const renderTime = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    if (seconds < 60 && minutes < 1) {
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
      <Image
        alt="background image man playing guitar on his back"
        src={manPlayingGuitarOnHisBackImg}
        layout="fill"
        objectFit="cover"
        width={6000}
        height={4000}
      />
      <TimerWrapper>
        <CountdownCircleTimer
          isPlaying
          duration={300}
          colors={['#daf6ff', '#dfe057', '#ff6666', '#b80a24']}
          colorsTime={[30, 20, 10, 0]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </TimerWrapper>
    </>
  );
}

const Time = styled.div`
  font-size: 2rem;
  color: #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
`;

const TimerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
