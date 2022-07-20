import React from 'react';
import { withRouter } from 'react-router-dom';

// Styles
import { MainWrap, Container } from './styled';

const Home = ({ history: { push } }) => {
  const handleLogOut = () => {
    localStorage.clear();
    push('/login');
  };

  return (
    <MainWrap>
      <Container>
        <button onClick={handleLogOut}>Log Out</button>
        <h1>Home page</h1>
      </Container>
    </MainWrap>
  );
};

export default withRouter(Home);
