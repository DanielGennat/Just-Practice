import Image from 'next/image';
import styled from 'styled-components';
import hook from '../../public/hook.svg';

export default function EditTimerChainForm({ timerChain, setTimerChain }) {
  return (
    <form>
      <p>01</p>
      <Apply>
        <Image alt="hook" src={hook} width="42" height={41.71} />
        <div>Apply</div>
      </Apply>
    </form>
  );
}

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
