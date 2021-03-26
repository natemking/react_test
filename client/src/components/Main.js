import React from 'react';
import { theme } from '../themes';
import { MainWrapper, H3, Line, SmallText, Anchor } from '../elements';
import SignIn from './SignIn';
import Footer from './Footer';

const Main = () => {
    return (
        <main style={{ width: '100%', position: 'relative'}}>
            <MainWrapper>
                <H3>Sign In</H3>
                <Line theme={ theme }/>
                <SignIn />
                <SmallText>
                    Forgot your password? <Anchor theme={ theme }>Reset it here</Anchor>.
                </SmallText>
            </MainWrapper>
            <Footer />
        </main>
    );
}
 
export default Main;