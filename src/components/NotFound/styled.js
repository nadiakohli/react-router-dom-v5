import styled from 'styled-components';

// Images
import SadDogImg from 'assets/images/sadDog.jpg';

export const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  height: 100vh;
  background-image: url(${SadDogImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;

  & h1 {
    font-size: 125px;
    color: #000;
  }

  & p {
    font-size: 25px;
    color: #000;
  }

  & button {
    cursor: pointer;
    color: #fff;
    margin: 25px;
    font-weight: 600;
    font-size: 14px;
    padding: 10px 15px;
    background-color: #000;
    border-radius: 10px;
    border: none;
    border: 1px solid #000;
    font-family: 'Arima-Variable', sans-serif;

    &:hover {
      opacity: 85%;
    }
  }
`;
