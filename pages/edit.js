import Image from 'next/image';
import styled from 'styled-components';
import hook from '../public/hook.svg';
import remove from '../public/delete-button.svg';
import FormHeadline from '../components/EditFormComponents/FormHeadline';
import useLocalStorage from '../hooks/useLocalStorage';
import { useRouter } from 'next/router';
import BackgroundImage from '../components/BackgroundImage';
import pedalsImg from '../public/pedals.jpg';
import FormExerciseList from '../components/EditFormComponents/FormExerciseList';
import AddButton from '../components/EditFormComponents/AddButton';

export function handleRemove(newTimerChain, setNewTimerChain) {
  const lastId = newTimerChain.length;
  if (lastId > 1) {
    const newChain = newTimerChain.filter((timer) => timer.id !== lastId);
    setNewTimerChain(newChain);
  }
}

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

  function changeSettings(event, settings, setSettings) {
    const value = event.target.value;
    setSettings(settings.map((setting) => {
      if (value == 'repeat') {
        return {...setting, repeatTimerChain: !setting.repeatTimerChain}
      }
      return setting;
    }));
  }

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
          <DeleteButton
            type="button"
            onClick={() => handleRemove(newTimerChain, setNewTimerChain)}
          >
            <Image alt="remove" src={remove} width="64" height="64" />
          </DeleteButton>
        </ButtonWrapper>
        <ChainSettings>
            <RepeatInput type="checkbox" id="repeatTimerChain" name="repeatTimerChain" value="repeat" checked={settings[0].repeatTimerChain} onChange={(event) =>
                    changeSettings(
                      event,
                      settings,
                      setSettings
                    )
                  }/>
            <RepeatLabel htmlFor="repeatTimerChain">repeat timer chain</RepeatLabel>
        </ChainSettings>
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

const DeleteButton = styled.button`
  background-color: transparent;
  border-radius: 60px;
  border: none;

  &:hover {
    background: radial-gradient(
      circle,
      rgba(255, 58, 0, 0.1),
      rgba(255, 58, 0, 0.8) 55%,
      transparent 72%
    );
  }
  &:active {
    transform: translateY(1px);
    background: radial-gradient(
      circle,
      rgba(255, 58, 0, 0.1),
      rgba(255, 58, 0, 0.8) 55%,
      transparent 72%
    );
  }
`;

const ChainSettings = styled.div`
  background-color: rgba(52, 108, 61, 0.7);
  margin: 5px 25vw;
  border-radius: 5px;
  padding: 15px 0;
  color: #caf6ff;
`;

const RepeatInput = styled.input`
  -webkit-appearance: none;

  &::before{
  margin: -2px 0 0 7px;
  margin-right: 50px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #edffdf;
  display: block;
  content: "";
  float: left;
  margin-right: 5px;
}

&:hover:before{
  background-color: #caf6ff;
  box-shadow: 0 0 10px rgba(73, 245, 236, 1), 0 0 5px rgba(73, 245, 236, 1);
}

&:checked:before{
  background-color: #caf6ff;
  box-shadow: 0 0 20px rgba(73, 245, 236, 1), 0 0 15px rgba(73, 245, 236, 1), 0 0 10px rgba(73, 245, 236, 1), 0 0 7.5px rgba(73, 245, 236, 1), 0 0 5px rgba(73, 245, 236, 1), 0 0 2.5px rgba(73, 245, 236, 1);
}
`;

const RepeatLabel = styled.label`
  position: absolute;
  margin-left: 2px;
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
