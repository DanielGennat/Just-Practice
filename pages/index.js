import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styled from 'styled-components';

export default function Home() {
  return (
    <div>
      <CountdownCircleTimer isPlaying duration={300} colors={'#abc'}>
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
}
