import styled from 'styled-components';

// Images
import SeriousDogImg from 'assets/images/seriousDog.jpg';

export const MainWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8b6d52;
`;

export const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;
  width: 300px;
  background-color: #c09f82;
  border-radius: 0 10px 10px 0;
`;

export const Image = styled.div`
  height: 700px;
  width: 550px;
  background-image: url(${SeriousDogImg});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px 0 0 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80%;
  width: 85%;

  & h1 {
    text-align: center;
    font-size: 28px;
    margin-bottom: 25px;
  }
`;

export const InputWrap = styled.div`
  height: 15%;
  
  & h2 {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  background-color: #a26a42;
  margin: 20px 0;
  border-radius: 7px;
  border: 1px solid #623b15;
  font-family: 'Arima-variable', sans-serif;
  font-size: 16px;
  cursor: pointer;

  &:hover:not([disabled]) {
    opacity: 85%;
  }
`;

export const Input = styled.input`
  padding: 10px 15px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #000;

  &:-webkit-autofill {
    border-bottom: 1px solid #000;
    box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  &::placeholder {
    opacity: 50%;
    font-size: 11px;
    color: black;
  }

  &:focus {
    outline: none !important;
    border-bottom: 1px solid #fff;
  }
`;
