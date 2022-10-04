import Image from 'next/image';
import styled from 'styled-components';
import hook from '../../public/hook.svg';

export default function EditTimerChainForm({ timerChain, setTimerChain }) {
  return (
    <form>
      <FormList>
        {timerChain.map((timer) => (
          <Li key={timer.id}>
            <InputAndLabelWrapper>
              <Input
                type="number"
                id={`minutes of ${timer.id}`}
                name={`minutes of ${timer.id}`}
                min="0"
                max="59"
                defaultValue={Math.floor(timer.duration / 60)}
                required
              />
              <label htmlFor={`minutes of ${timer.id}`}>min.</label>
            </InputAndLabelWrapper>
            <span>:</span>
            <InputAndLabelWrapper>
              <Input
                type="number"
                id={`seconds of ${timer.id}`}
                name={`seconds of ${timer.id}`}
                min="0"
                max="59"
                defaultValue={timer.duration % 60}
                required
              />
              <label htmlFor={`seconds of ${timer.id}`}> sec.</label>
            </InputAndLabelWrapper>
          </Li>
        ))}
      </FormList>
      <Apply>
        <Image alt="hook" src={hook} width="42" height={41.71} />
        <div>Apply</div>
      </Apply>
    </form>
  );
}

const FormList = styled.ol`
  background-color: rgba(52, 108, 61, 0.7);
  margin: 5px 10vw;
  border-radius: 5px;
  padding: 5px;
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
  }
`;

const InputAndLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  text-align: right;
  &::before {
    content: '0';
  }
`;

const Apply = styled.button`
  color: #caf6ff;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  background-color: rgba(52, 108, 61, 1);
  width: 167px;
  height: 64px;
  border: 1px solid #000000;
  border-radius: 5px;
  position: absolute;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
