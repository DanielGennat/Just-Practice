import Image from "next/image";
import add from '../../public/add-button.svg';
import styled from "styled-components";

export default function AddButton({newTimerChain, setNewTimerChain}) {
function handleAdd(newTimerChain, setNewTimerChain) {
  const addId = newTimerChain.length + 1;
  setNewTimerChain([
    ...newTimerChain,
    { id: addId, minutes: 5, seconds: 0, exerciseName: '' },
  ]);
}
    return (
        <Add
            type="button"
            onClick={() => handleAdd(newTimerChain, setNewTimerChain)}
          >
            <Image alt="add" src={add} width="64" height="64" />
        </Add>
    );
}

const Add = styled.button`
  background-color: transparent;
  border-radius: 60px;
  border: none;

  &:hover {
    background: radial-gradient(
      circle,
      rgba(85, 255, 5, 0.1),
      rgba(85, 255, 5, 0.8) 55%,
      transparent 72%
    );
  }
  &:active {
    transform: translateY(1px);
    background: radial-gradient(
      circle,
      rgba(85, 255, 5, 0.1),
      rgba(85, 255, 5, 0.8) 55%,
      transparent 72%
    );
  }
`;