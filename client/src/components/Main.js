/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { theme } from '../themes';
import { MainEl, MainWrapper, H3, Line, SmallText, Anchor } from '../elements';
import Banner from './Banner';
import SignIn from './SignIn';
import Footer from './Footer';

const Main = () => {
    const history = useHistory();
    const location = useLocation();
    /** State for what page user is on */
    const [page, setPage] = useState(null);
    /** State to show banner */
    const [showBanner, setShowBanner] = useState(false);

    /** Set state depending on what page you are on */
    useEffect(() => {
        window.location.hash === '#/' ?
        setPage(true) :
        setPage(false);
    }, []);

    /** Set the showBanner state to true if navigating from ResetPage */
    useEffect(() => {
        location.state ? 
        setShowBanner(true) : 
        setShowBanner(false);
    }, [location.state]);

    /** Navigate to the next page */
    const handleClick = () => {
        window.location.hash === '#/' ?
        history.push('/reset') :
        history.push('/');       
    }

    return (
        <MainEl>
           <Banner banner={ showBanner }/>

            <MainWrapper>

                <H3 style={ page ? null : { lineHeight: '0px' }}>
                    {page ? 'Sign In' : 'Reset Password'}
                </H3>
                <SmallText style={ page ? { display: 'none' } : { display: 'block', marginBottom: '44px' }}>
                    Enter your registered email in order to receive password reset instructions.
                </SmallText>

                <Line theme={ theme }/>

                <SignIn state={ page } />
                
                <SmallText>
                    {page ? 'Forgot your password? ' : 'Didn\'t mean to click that? '}
                    <Anchor 
                        theme={ theme }
                        onClick={ handleClick }
                    >
                        {page ? 'Reset it here' : 'Sign In' }
                    </Anchor>
                    .
                </SmallText>
            </MainWrapper>

            <Footer />
            
        </MainEl>
    );
}
 
export default Main;