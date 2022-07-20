import React from 'react';
import { withRouter } from 'react-router-dom';

// Styles
import { MainWrap, Container  } from './styled';

const NotFound = ({ history: { push } }) => (
  <MainWrap>
    <Container>
      <h1>404</h1>
      <p>Opps. Sorry! We couldn't search this page!!!</p>
      <button onClick={() => push('/home')}>Go Home</button>
    </Container>
  </MainWrap>
);

export default withRouter(NotFound);
