import Image from "next/image";
import styled from "styled-components";
import remove from '../../public/delete-button.svg';

export default function DeleteButton({newTimerChain, setNewTimerChain}) {
  function handleRemove(newTimerChain, setNewTimerChain) {
  const lastId = newTimerChain.length;
  if (lastId > 1) {
    const newChain = newTimerChain.filter((timer) => timer.id !== lastId);
    setNewTimerChain(newChain);
  }
}
return (
    <Delete
        type="button"
        onClick={() => handleRemove(newTimerChain, setNewTimerChain)}
    >
        <Image alt="remove" src={remove} width="64" height="64" />
    </Delete>
);
}

const Delete = styled.button`
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