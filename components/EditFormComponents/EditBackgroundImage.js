import Image from 'next/image';
import styled from 'styled-components';
import pedals from '../../public/pedals.jpg';

export default function EditBackgroundImage() {
  return (
    <ImageWrapper>
      <Image
        alt="background image pedals"
        src={pedals}
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
  background-color: #545378;
`;
