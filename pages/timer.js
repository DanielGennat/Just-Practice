import styled from 'styled-components';
import CountdownCircleTimerFunction from '../components/TimerComponents/CountdownCircleTimerFunction';
import DisplayExerciseList from '../components/TimerComponents/DisplayExerciseList';
import Link from 'next/link';
import edit from '../public/edit-button.svg';
import Image from 'next/image';
import BackgroundImage from '../components/BackgroundImage';
import manPlayingGuitarOnHisBackImg from '../public/guitarOnBack.png';

export default function TimerPage({
  timerChain,
  timerPointer,
  setTimerPointer,
  countdownKey,
  setCountdownKey,
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
        />
      </TopWrapper>
      <DisplayExerciseList
        timerChain={timerChain}
        timerPointer={timerPointer}
      />
      <EditWrapperContainer>
        <EditWrapper>
          <Link href="/edit">
            <Image alt="edit" src={edit} width="64" height="64" />
          </Link>
        </EditWrapper>
      </EditWrapperContainer>
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
const EditWrapperContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const EditWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: transparent;
  border-radius: 60px;
  border: none;
  padding: 5px;
  z-index: 1;

  &:hover {
    background: radial-gradient(
      circle,
      rgba(85, 255, 5, 0.1),
      rgba(85, 255, 5, 0.8) 35%,
      transparent 72%
    );
  }
  &:active {
    transform: translateY(1px);
    background: radial-gradient(
      circle,
      rgba(85, 255, 5, 0.1),
      rgba(85, 255, 5, 0.8) 35%,
      transparent 72%
    );
  }
`;

const Home = styled.a`
  background-color: rgba(10, 175, 230, 0.2);
  font-weight: bold;
  font-size: 1.5rem;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  width: 130px;

  &:hover {
    box-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0.2);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0.2);
  }
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
