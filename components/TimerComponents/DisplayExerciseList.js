import styled from 'styled-components';

export default function DisplayExerciseList({ timerChain, timerPointer }) {
  return (
    <ExerciseList>
      {timerChain.map((timer) => (
        <Li highlight={timer.id === timerPointer + 1} key={timer.id}>
          <Number>{timer.id < 10 ? `0${timer.id}` : timer.id}</Number>
          <Exercise highlight={timer.id === timerPointer + 1}>
            {timer.exerciseName === ''
              ? `Exercise ${timer.id}`
              : timer.exerciseName}
          </Exercise>
          <Duration highlight={timer.id === timerPointer + 1}>
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
  font-size: ${(props) => (props.highlight ? '1.5rem' : '#16px')};
  text-shadow: ${(props) =>
    props.highlight ? '1px 1px 3px #000000' : '2px 2px 5px #000000'};
  background-color: ${(props) =>
    props.highlight ? '#49F6EC' : 'rgba(38, 52, 64, 0.3)'};
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
  width: ${(props) => (props.highlight ? '60vw' : '40vw')};
  max-width: ${(props) => (props.highlight ? '510px' : '340px')};
  margin: 5px;
`;

const Duration = styled.p`
  width: ${(props) => (props.highlight ? '63px' : '42px')};
  text-align: right;
  margin: 5px;
`;
