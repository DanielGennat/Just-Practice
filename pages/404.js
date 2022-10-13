import Image from 'next/image';
import styled from 'styled-components';
import jackCable from '../public/jackCable.jpg';

export default function PageNotFound() {
  return (
    <>
      <ImageWrapper>
        <Image
          alt="background image jack cable"
          src={jackCable}
          layout="fill"
          objectFit="cover"
        />
      </ImageWrapper>
      <H1>404 | This page could not be found. </H1>
    </>
  );
}

const ImageWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
  background-color: #bf4a4a;
`;

const H1 = styled.h1`
  color: #caf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0.2);
  //font-size: 1.2rem;
  padding: 50vw 20px;
  text-align: center;
`;
