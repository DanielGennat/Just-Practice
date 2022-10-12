import Image from 'next/image';
import styled from 'styled-components';
import guitarOnAmplifierImg from '../../public/landingImage.jpg';

export default function IndexBackgroundImage() {
  return (
    <ImageWrapper>
      <Image
        alt="background image guitar on amplifier"
        src={guitarOnAmplifierImg}
        layout="fill"
        objectFit="cover"
      />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
  background-color: black;
`;
