import styled from 'styled-components';
import CountdownCircleTimerFunction from '../components/TimerComponents/CountdownCircleTimerFunction';
import DisplayExerciseList from '../components/TimerComponents/DisplayExerciseList';
import EditButton from '../components/EditButton';
import BackgroundImage from '../components/BackgroundImage';
import manPlayingGuitarOnHisBackImg from '../public/guitarOnBack.png';

export default function TimerPage({
  timerChain,
  timerPointer,
  setTimerPointer,
  countdownKey,
  setCountdownKey,
  settings
}) {
  return (
    <>
      <BackgroundImage
        image={manPlayingGuitarOnHisBackImg}
        alt="background image man playing guitar on his back"
        fallbackBackgroundColor="#161616"
      />
      <TopWrapper>
        <CountdownCircleTimerFunction
          timerChain={timerChain}
          timerPointer={timerPointer}
          setTimerPointer={setTimerPointer}
          countdownKey={countdownKey}
          setCountdownKey={setCountdownKey}
          settings={settings}
        />
      </TopWrapper>
      <DisplayExerciseList
        timerChain={timerChain}
        timerPointer={timerPointer}
      />
      <EditButton bottomValue="none"/>
      <UserInteractionInfo>
        Click anywhere if you don&apos;t get any acoustic notification
      </UserInteractionInfo>
    </>
  );
}

const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const UserInteractionInfo = styled.div`
  color: #caf6ff;
  text-shadow: 2px 2px 5px #000000;
  padding: 30px 10px;
  background-color: rgba(10, 175, 230, 0.2);
  display: flex;
  margin: 5vh 5vw;
  border-radius: 10px;
  position: fixed;
  left: 0px;
  bottom: 0px;
`;
