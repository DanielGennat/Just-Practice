import { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styled from 'styled-components';
import RenderTime from './RenderTime';

export function setUpNextInterval(
  timerChain,
  timerPointer,
  setTimerPointer,
  setCountdownKey
) {
  if (timerPointer + 1 < timerChain.length) {
    setTimerPointer(timerPointer + 1);
    setCountdownKey(timerPointer + 1); //an dieser Stelle wird der key mit dem timerPointer wieder synchronisiert
  }
}

export default function CountdownCircleTimerFunction({
  timerChain,
  timerPointer,
  setTimerPointer,
  countdownKey,
  setCountdownKey,
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
        key={countdownKey}
        isPlaying
        duration={
          timerChain[timerPointer].minutes * 60 +
          timerChain[timerPointer].seconds
        }
        colors={['#49F6EC', '#dfe057', '#ff6666', '#b80a24']}
        colorsTime={[40, 30, 10, 0]}
        onComplete={() =>
          setUpNextInterval(
            timerChain,
            timerPointer,
            setTimerPointer,
            setCountdownKey
          )
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
