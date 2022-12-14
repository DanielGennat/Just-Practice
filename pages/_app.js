import { useState } from 'react';
import GlobalStyle from '../components/GlobalStyles';
import { setUpNextInterval } from '../components/TimerComponents/CountdownCircleTimerFunction';
import useLocalStorage from '../hooks/useLocalStorage';

function MyApp({ Component, pageProps }) {
  const initialChain = [
    { id: 1, minutes: 1, seconds: 30, exerciseName: 'warm up' },
    { id: 2, minutes: 5, seconds: 0, exerciseName: 'a minor arpeggio' },
    { id: 3, minutes: 5, seconds: 0, exerciseName: 'practice sth. else' },
    { id: 4, minutes: 10, seconds: 0, exerciseName: 'my favorite song' },
  ];
  const [timerChain, setTimerChain] = useLocalStorage(
    '_timerChainStorage',
    initialChain
  );
  const [timerPointer, setTimerPointer] = useState(0);
  const [countdownKey, setCountdownKey] = useState(0);
  const initialSettings = [{repeatTimerChain: false}];
  const [settings, setSettings] = useLocalStorage('_settings', initialSettings);

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        initialChain={initialChain}
        timerChain={timerChain}
        setTimerChain={setTimerChain}
        timerPointer={timerPointer}
        setTimerPointer={setTimerPointer}
        countdownKey={countdownKey}
        setCountdownKey={setCountdownKey}
        settings={settings}
        setSettings={setSettings}
      />
    </>
  );
}

export default MyApp;
