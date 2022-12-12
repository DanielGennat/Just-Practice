import Image from "next/image";
import styled from "styled-components";
import hook from '../../public/hook.svg';

export default function ApplyButton() {
    return (
        <ApplyWrapper>
          <DummyDiv />
          <Apply type="submit">
            <Image alt="hook" src={hook} width="42" height={41.71} />
            <div>Apply</div>
          </Apply>
        </ApplyWrapper>
    );
}

const ApplyWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const DummyDiv = styled.div`
  width: 35vw;
  max-width: 167px;
`;

const Apply = styled.button`
  color: #caf6ff;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  background-color: rgba(52, 108, 61, 1);
  width: 167px;
  height: 64px;
  border: none;
  border-radius: 5px;
  position: relative;
  margin: 10px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: 0 0 40px rgba(52, 250, 100, 1), 0 0 40px rgba(52, 250, 100, 0.2);
    background-color: rgba(52, 108, 61, 0.9);
  }
  &:active {
    transform: translateY(1px);
    box-shadow: 0 0 40px rgba(52, 250, 100, 1), 0 0 40px rgba(52, 250, 100, 0.2);
    background-color: rgba(52, 108, 61, 0.9);
  }
`;