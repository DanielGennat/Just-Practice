import { useRouter } from 'next/router';
import { useState } from 'react';
import GlobalStyle from '../components/GlobalStyles';
import useLocalStorage from '../hooks/useLocalStorage';

function MyApp({ Component, pageProps }) {
  const initialChain = [
    { id: 1, minutes: 0, seconds: 30, name: 'Exercise 1' },
    { id: 2, minutes: 1, seconds: 10, name: 'practice sth. else' },
    { id: 3, minutes: 1, seconds: 2, name: 'a minor arpeggio' },
    { id: 4, minutes: 1, seconds: 40, name: 'my favorite song' },
  ];
  const [timerChain, setTimerChain] = useLocalStorage(
    '_timerChainStorage',
    initialChain
  );
  const [timerPointer, setTimerPointer] = useState(0);
  const [countdownKey, setCountdownKey] = useState(0);

  // const router = useRouter();

  if (
    timerPointer + 1 < timerChain.length &&
    timerChain[timerPointer].minutes + timerChain[timerPointer].seconds < 1
  ) {
    setTimerPointer(timerPointer + 1);
  }
  console.log(timerChain, '_app');

  // function handleSubmit(
  //   event,
  //   newTimerChain,
  //   setTimerChain,
  //   setTimerPointer,
  //   countdownKey,
  //   setCountdownKey
  //   // href
  // ) {
  //   event.preventDefault();
  //   setTimerChain(newTimerChain);
  //   setTimerPointer(0);
  //   setCountdownKey(countdownKey + 1);
  //   console.log('bla');
  //   // const router = useRouter();
  //   router.push('/timer');
  //   //useRouter('/timer');
  // }

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
        // handleSubmit={handleSubmit}
      />
    </>
  );
}

export default MyApp;
