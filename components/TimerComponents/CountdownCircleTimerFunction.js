import { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styled from 'styled-components';
import RenderTime from './RenderTime';

export function setUpNextInterval(timerChain, timerPointer, setTimerPointer) {
  if (timerPointer + 1 < timerChain.length) {
    setTimerPointer(timerPointer + 1);
  }
}

export default function CountdownCircleTimerFunction({
  timerChain,
  timerPointer,
  setTimerPointer,
}) {
  const [audio, setAudio] = useState(null);
  useEffect(() => {
    setAudio(new Audio('/sounds/expired-notification.mp3'));
  }, []);

  function playNotificationSound() {
    audio.play();
  }

  return (
    <TimerWrapper>
      <CountdownCircleTimer
        key={timerPointer}
        isPlaying
        duration={timerChain[timerPointer].duration}
        colors={['#49F6EC', '#dfe057', '#ff6666', '#b80a24']}
        colorsTime={[40, 30, 10, 0]}
        onComplete={() =>
          setUpNextInterval(timerChain, timerPointer, setTimerPointer)
        }
      >
        {({ remainingTime }) =>
          RenderTime(remainingTime, playNotificationSound)
        }
      </CountdownCircleTimer>
    </TimerWrapper>
  );
}

const TimerWrapper = styled.div`
  background: radial-gradient(
    circle,
    transparent 30%,
    rgba(10, 175, 230, 0.15) 50%,
    transparent 72%
  );
  padding: 2vh;
`;
