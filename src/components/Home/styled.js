import styled from 'styled-components';

// Images
import CuteDogImg from 'assets/images/cuteDog.jpg';

export const MainWrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  background-image: url(${CuteDogImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  & button {
    height: 5%;
    width: 35%;
    background-color: #000;
    color: #fff;
    border-radius: 7px;
    font-family: 'Arima-Variable', sans-serif;
    margin: 5px;
    align-self: flex-end;
    cursor: pointer;

    &:hover {
      opacity: 85%;
    }
  }

  & h1 {
    margin-right: 125px;
    height: 55%;
    justify-content: center;
    font-size: 55px;
    text-decoration: underline;
  }
`;
