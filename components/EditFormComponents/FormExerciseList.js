import styled from "styled-components";
import changeTimerChain from "./ChangeTimerChain";

export default function FormExerciseList ({newTimerChain, setNewTimerChain}) {
  const timeOptions = [];
  for (let i = 0; i <= 59; i++) {
    timeOptions.push(i);
  }
    return (  
    <FormList>
          {newTimerChain.map((newTimer) => (
            <Li key={newTimer.id}>
              <InputAndLabelWrapper>
                <ExerciseName
                  id="exerciseName"
                  type="text"
                  value={newTimer.exerciseName}
                  placeholder={`Exercise ${newTimer.id}`}
                  onChange={(event) =>
                    changeTimerChain(
                      event,
                      newTimer.id,
                      newTimerChain,
                      setNewTimerChain
                    )
                  }
                />
                <Label htmlFor="exerciseName"> Exercise</Label>
              </InputAndLabelWrapper>
              <InputAndLabelWrapper>
                <Select
                  id="minutes"
                  value={newTimer.minutes}
                  onChange={(event) =>
                    changeTimerChain(
                      event,
                      newTimer.id,
                      newTimerChain,
                      setNewTimerChain
                    )
                  }
                >
                  {timeOptions.map((option) => {
                    return (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    );
                  })}
                </Select>
                <Label htmlFor="minutes">min.</Label>
              </InputAndLabelWrapper>
              <span>:</span>
              <InputAndLabelWrapper>
                <Select
                  id="seconds"
                  value={newTimer.seconds}
                  onChange={(event) =>
                    changeTimerChain(
                      event,
                      newTimer.id,
                      newTimerChain,
                      setNewTimerChain
                    )
                  }
                >
                  {timeOptions.map((option) => {
                    return (
                      <option key={option} value={option}>
                        {option < 10 ? `0${option}` : option}
                      </option>
                    );
                  })}
                </Select>
                <Label htmlFor="seconds"> sec.</Label>
              </InputAndLabelWrapper>
            </Li>
          ))}
        </FormList>
  );    
}

const FormList = styled.ol`
  background-color: rgba(52, 108, 61, 0.7);
  margin: 5px 10vw;
  border-radius: 5px;
  padding: 15px 0;
  list-style-type: none;
  counter-reset: li;
`;

const Li = styled.li`
  display: flex;
  justify-content: center;

  &::before {
    counter-increment: li;
    content: counter(li, decimal-leading-zero);
    color: #caf6ff;
    margin: 0 5px 0 0;
  }
`;

const InputAndLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExerciseName = styled.input`
  background-color: #edffdf;
  margin: 0 1px;
  border-radius: 5px;
  border: none;
  width: 30vw;
  max-width: 340px;
`;

const Select = styled.select`
  text-align: right;
  background-color: #edffdf;
  width: 50px;
  margin: 0 1px;
  border-radius: 5px;
  border: none;
`;

const Label = styled.label`
  color: #caf6ff;
  font-weight: 300;
  font-size: 0.8rem;
`;