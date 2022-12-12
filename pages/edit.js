import styled from 'styled-components';
import FormHeadline from '../components/EditFormComponents/FormHeadline';
import useLocalStorage from '../hooks/useLocalStorage';
import { useRouter } from 'next/router';
import BackgroundImage from '../components/BackgroundImage';
import pedalsImg from '../public/pedals.jpg';
import FormExerciseList from '../components/EditFormComponents/FormExerciseList';
import AddButton from '../components/EditFormComponents/AddButton';
import DeleteButton from '../components/EditFormComponents/DeleteButton';
import ChainSettings from '../components/EditFormComponents/ChainSettings';
import ApplyButton from '../components/EditFormComponents/ApplyButton';

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
        <ApplyButton />
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