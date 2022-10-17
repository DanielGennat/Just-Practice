import styled from 'styled-components';
import BackgroundImage from '../components/BackgroundImage';
import jackCableImg from '../public/jackCable.jpg';

export default function PageNotFound() {
  return (
    <>
      <BackgroundImage
        image={jackCableImg}
        alt="background image jack cable"
        fallbackBackgroundColor="#bf4a4a"
      />
      <H1>404 | This page could not be found. </H1>
    </>
  );
}

const H1 = styled.h1`
  color: #caf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0.2);
  padding: 20vh 20px 0 20px;
  text-align: center;
`;
