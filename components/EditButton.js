import Link from 'next/link';
import Image from "next/image";
import edit from '../public/edit-button.svg';
import styled from 'styled-components';

export default function EditButton({bottomValue}) {
   return (
      <EditWrapper bottomValue={bottomValue}>
        <Link href="/edit">
          <Image alt="edit" src={edit} width="64" height="64" />
        </Link>
      </EditWrapper>
   );
}

const EditWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: transparent;
  border-radius: 60px;
  border: none;
  padding: 5px;
  z-index: 1;
  position: absolute;
  bottom: ${(props) => props.bottomValue};
  left: 50%;
  transform: translate(-50%);

  &:hover {
    background: radial-gradient(
      circle,
      rgba(85, 255, 5, 0.1),
      rgba(85, 255, 5, 0.8) 35%,
      transparent 72%
    );
  }
  &:active {
    transform: translate(-50% 1px);
    background: radial-gradient(
      circle,
      rgba(85, 255, 5, 0.1),
      rgba(85, 255, 5, 0.8) 35%,
      transparent 72%
    );
  }
`;