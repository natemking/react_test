import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import { H1 } from './elements';


// const theme = {
//   fontFamily: `'Montserrat', sans- serif`,
// }

function App() {
  return (
    <>
      <GlobalStyles />
      <H1>Hello World</H1>
    </>
    
  );
}

export default App;
