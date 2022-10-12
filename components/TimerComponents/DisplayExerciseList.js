import styled from 'styled-components';

export default function DisplayExerciseList({ timerChain, timerPointer }) {
  return (
    <ExerciseList>
      {timerChain.map((timer) => (
        <Li highlight={timer.id === timerPointer + 1} key={timer.id}>
          <Number>{timer.id < 10 ? `0${timer.id}` : timer.id}</Number>
          <Exercise>
            {timer.name == '' ? `Exercise ${timer.id}` : timer.name}
          </Exercise>
          <Duration>
            {timer.minutes}:
            {timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}
          </Duration>
        </Li>
      ))}
    </ExerciseList>
  );
}

const ExerciseList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 0;
`;

const Li = styled.li`
  display: flex;
  gap: 2px;
  color: ${(props) => (props.highlight ? 'black' : '#caf6ff')};
  background-color: ${(props) =>
    props.highlight ? '#49F6EC' : 'rgba(10, 175, 230, 0.2)'};
  border-radius: 15px;
  box-shadow: ${(props) =>
    props.highlight
      ? '0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0.2)'
      : 'none'};
  margin: ${(props) => (props.highlight ? '5px' : '0')};
`;

const Number = styled.p`
  width: 30px;
  text-align: center;
  margin: 5px;
`;

const Exercise = styled.p`
  width: 40vw;
  max-width: 340px;
  margin: 5px;
`;

const Duration = styled.p`
  width: 42px;
  text-align: right;
  margin: 5px;
`;
