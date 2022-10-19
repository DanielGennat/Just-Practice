import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import BackgroundImage from '../components/BackgroundImage';
import guitarOnAmplifierImg from '../public/landingImage.jpg';
import edit from '../public/edit-button.svg';

export default function Home() {
  return (
    <>
      <BackgroundImage
        image={guitarOnAmplifierImg}
        alt="background image guitar on amplifier"
        fallbackBackgroundColor="#0e0f11"
      />
      <HeadlinesWrapper>
        <H3>stay focussed</H3>
        <H2>save time</H2>
        <H1>Just Practice</H1>
      </HeadlinesWrapper>
      <Link href="/timer">
        <Start>Start!</Start>
      </Link>
      <EditWrapper>
        <Link href="/edit">
          <Image alt="edit" src={edit} width="64" height="64" />
        </Link>
      </EditWrapper>
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

const Start = styled.a`
  background-color: #ff3a00;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  width: 130px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);

  &:hover {
    box-shadow: 0 0 20px rgba(255, 58, 0, 1), 0 0 20px rgba(255, 58, 0, 0.2);
  }

  &:active {
    transform: translate(-50% 1px);
    box-shadow: 0 0 20px rgba(255, 58, 0, 1), 0 0 20px rgba(255, 58, 0, 0.2);
  }
`;

const EditWrapper = styled.div`
  background-color: transparent;
  border-radius: 60px;
  border: none;
  padding: 5px;
  bottom: 50px;
  position: absolute;
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
