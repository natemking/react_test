import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import { GlobalStyle } from './themes';
import { Wrapper } from './elements';
import Primary from './components/Primary';
import SignInPage from './pages/SignInPage';
import ResetPage from './pages/ResetPage';



function App() {
  return (
    
      <Wrapper>
        <GlobalStyle />
        <Primary />
        <Router>
         
          <Route exact path='/' component={ SignInPage } />
          <Route exact path='/reset' component={ ResetPage } />

        </Router>
      </Wrapper>
    
  );
}

export default App;
