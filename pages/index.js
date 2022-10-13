import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import IndexBackgroundImage from '../components/IndexComponents/IndexBackgroundImage';
import edit from '../public/edit-button.svg';

export default function Home() {
  return (
    <>
      <IndexBackgroundImage />
      <HeadlinesWrapper>
        <H3>stay focussed</H3>
        <H2>save time</H2>
        <H1>Just Practice</H1>
      </HeadlinesWrapper>
      <StartWrapper>
        <Link href="/timer">
          <Start>Start!</Start>
        </Link>
      </StartWrapper>
      <EditWrapperWrapper>
        <EditWrapper>
          <Link href="/edit">
            <Image alt="edit" src={edit} width="64" height="64" />
          </Link>
        </EditWrapper>
      </EditWrapperWrapper>
    </>
  );
}

const HeadlinesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H3 = styled.h3`
  color: #caf6ff;
  margin: 30px 0 15px 0;
`;

const H2 = styled.h2`
  color: #caf6ff;
  font-size: 2em;
  margin: 0 0;
`;

const H1 = styled.h1`
  color: #caf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0.2);
  font-size: 3em;
  margin: 25px 0;
`;

const StartWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Start = styled.a`
  background-color: #ff3a00;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  width: 130px;

  &:hover {
    box-shadow: 0 0 20px rgba(255, 58, 0, 1), 0 0 20px rgba(255, 58, 0, 0.2);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 0 20px rgba(255, 58, 0, 1), 0 0 20px rgba(255, 58, 0, 0.2);
  }
`;

const EditWrapperWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 50px;
  width: 100%;
`;

const EditWrapper = styled.div`
  background-color: transparent;
  border-radius: 60px;
  border: none;
  padding: 5px;

  &:hover {
    background: radial-gradient(
      circle,
      rgba(85, 255, 5, 0.1),
      rgba(85, 255, 5, 0.8) 35%,
      transparent 72%
    );
  }
  &:active {
    transform: translateY(1px);
    background: radial-gradient(
      circle,
      rgba(85, 255, 5, 0.1),
      rgba(85, 255, 5, 0.8) 35%,
      transparent 72%
    );
  }
`;
