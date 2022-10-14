import Image from 'next/image';
import styled from 'styled-components';

export default function BackgroundImage({
  image,
  alt,
  fallbackBackgroundColor,
}) {
  return (
    <ImageWrapper background={fallbackBackgroundColor}>
      <Image alt={alt} src={image} layout="fill" objectFit="cover" />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
  background-color: ${(props) => props.background};
`;
