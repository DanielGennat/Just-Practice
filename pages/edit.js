import Image from 'next/image';
import styled from 'styled-components';
import hook from '../public/hook.svg';
import FormHeadline from '../components/EditFormComponents/FormHeadline';
import useLocalStorage from '../hooks/useLocalStorage';
import { useRouter } from 'next/router';
import BackgroundImage from '../components/BackgroundImage';
import pedalsImg from '../public/pedals.jpg';
import FormExerciseList from '../components/EditFormComponents/FormExerciseList';
import AddButton from '../components/EditFormComponents/AddButton';
import DeleteButton from '../components/EditFormComponents/DeleteButton';
import ChainSettings from '../components/EditFormComponents/ChainSettings';

export default function EditTimerChainForm({
  timerChain,
  setTimerChain,
  setTimerPointer,
  setCountdownKey,
  settings,
  setSettings
}) {
  const [newTimerChain, setNewTimerChain] = useLocalStorage(
    '_timerChainStorage',
    timerChain
  );

  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const checkTimerChain = newTimerChain.filter(
      (timer) => Number(timer.minutes + timer.seconds) > 0
    );
    if (checkTimerChain.length > 0) {
      setTimerChain(newTimerChain);
      setTimerPointer(0);
      setCountdownKey(-1);
      router.push('/timer');
    } else {
      alert('All timers are 0:00. Set at least one timer!');
    }
  }

  return (
    <>
      <BackgroundImage
        image={pedalsImg}
        alt="background image pedals"
        fallbackBackgroundColor="#545378"
      />
      <HeadlineWrapper>
        <FormHeadline />
      </HeadlineWrapper>
      <TopGap />
      <Form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <FormExerciseList newTimerChain={newTimerChain} setNewTimerChain={setNewTimerChain} />
        <ButtonWrapper>
          <AddButton newTimerChain={newTimerChain} setNewTimerChain={setNewTimerChain} />
          <DeleteButton newTimerChain={newTimerChain} setNewTimerChain={setNewTimerChain} />
        </ButtonWrapper>
        <ChainSettings settings={settings} setSettings={setSettings} />
        <ApplyWrapper>
          <DummyDiv />
          <Apply type="submit">
            <Image alt="hook" src={hook} width="42" height={41.71} />
            <div>Apply</div>
          </Apply>
        </ApplyWrapper>
      </Form>
    </>
  );
}

const HeadlineWrapper = styled.div`
  position: fixed;
  width: 100%;
  backdrop-filter: blur(10px);
`;

const TopGap = styled.div`
  height: 75px;
`;

const Form = styled.form`
  padding-bottom: 50px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ApplyWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const DummyDiv = styled.div`
  width: 35vw;
  max-width: 167px;
`;

const Apply = styled.button`
  color: #caf6ff;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  background-color: rgba(52, 108, 61, 1);
  width: 167px;
  height: 64px;
  border: none;
  border-radius: 5px;
  position: relative;
  margin: 10px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: 0 0 40px rgba(52, 250, 100, 1), 0 0 40px rgba(52, 250, 100, 0.2);
    background-color: rgba(52, 108, 61, 0.9);
  }
  &:active {
    transform: translateY(1px);
    box-shadow: 0 0 40px rgba(52, 250, 100, 1), 0 0 40px rgba(52, 250, 100, 0.2);
    background-color: rgba(52, 108, 61, 0.9);
  }
`;
