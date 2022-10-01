import Image from 'next/image';
import styled from 'styled-components';
import manPlayingGuitarOnHisBackImg from '../public/guitarOnBack.png';

export default function TimerBackgroundImage() {
  return (
    <ImageWrapper>
      <Image
        alt="background image man playing guitar on his back"
        src={manPlayingGuitarOnHisBackImg}
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
