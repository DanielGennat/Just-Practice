import { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styled from 'styled-components';
import RenderTime from './RenderTime';

export function setUpNextInterval(
  timerChain,
  timerPointer,
  setTimerPointer,
  setCountdownKey,
  settings
) {
  if (timerPointer + 1 < timerChain.length) {
    setTimerPointer(timerPointer + 1);
    setCountdownKey(timerPointer + 1);
  } else if (settings[0].repeatTimerChain === true) {
    setTimerPointer(0);
    setCountdownKey(timerPointer + 1);
  }
}

export default function CountdownCircleTimerFunction({
  timerChain,
  timerPointer,
  setTimerPointer,
  countdownKey,
  setCountdownKey,
  settings
}) {
  const [audio, setAudio] = useState(null);
  useEffect(() => {
    setAudio(new Audio('/sounds/expired-notification.mp3'));
  }, []);

  function playNotificationSound() {
    audio.play();
  }

  if (timerChain[timerPointer].minutes + timerChain[timerPointer].seconds < 1) {
    setUpNextInterval(
      timerChain,
      timerPointer,
      setTimerPointer,
      setCountdownKey,
      settings
    )
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
            setCountdownKey,
            settings
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
    transparent 35%,
    rgba(10, 175, 230, 0.5) 61%,
    transparent 72%
  );
  padding: 2vh;
`;
