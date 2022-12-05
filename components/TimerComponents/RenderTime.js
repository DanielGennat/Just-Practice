import styled from 'styled-components';

export default function RenderTime(remainingTime, playNotificationSound) {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  if (remainingTime === 0) {
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    oscillator.type = "sine";
    const gain = audioContext.createGain();
    oscillator.connect(gain);
    gain.connect(audioContext.destination)
    oscillator.start(0);
    gain.gain.exponentialRampToValueAtTime(0.00001, audioContext.currentTime + 2);
    //playNotificationSound();
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
