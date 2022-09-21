import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styled from 'styled-components';

export default function Home() {
  const renderTime = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    if (seconds < 60 && minutes < 1) {
      return (
        <div>
          <div>{seconds}</div>
        </div>
      );
    } else if (seconds < 10) {
      return (
        <div>
          <div>
            {minutes}:0{seconds}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            {minutes}:{seconds}
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <CountdownCircleTimer isPlaying duration={300} colors={'#abc'}>
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
}
