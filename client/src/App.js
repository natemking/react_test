import React from 'react';
import { GlobalStyle } from './themes';
import { Wrapper } from './elements';
import Primary from './components/Primary';
import Main from './components/Main';


function App() {
  return (
    
      <Wrapper>
        <GlobalStyle />
        <Primary />
        <Main />
      </Wrapper>
    
  );
}

export default App;
