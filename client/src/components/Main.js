import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { theme } from '../themes';
import { MainWrapper, H3, Line, SmallText, Anchor } from '../elements';
import SignIn from './SignIn';
import Footer from './Footer';

const Main = () => {
    const history = useHistory();
    const [page, setPage] = useState(null);

    useEffect(() => {
        window.location.hash === '#/' ?
            setPage(true) :
            setPage(false);
    }, []);

    const handleClick = () => {
        console.log(page);
        window.location.hash === '#/' ?
            history.push('/reset') :
            history.push('/');
            
    }

    return (
        <main style={{ width: '100%', position: 'relative'}}>
            <MainWrapper>
                <H3 style={ page ? null : { lineHeight: '0px' }}>
                    {page ? 'Sign In' : 'Reset Password'}
                </H3>
                <SmallText style={ page ? { display: 'none' } : { display: 'block', marginBottom: '44px' }}>
                    Enter your registered email in order to receive password reset instructions.
                </SmallText>
                <Line theme={ theme }/>
                <SignIn state={ page }/>
                <SmallText>
                    {page ? 'Forgot your password? ' : 'Didn\'t mean to click that? '}
                    <Anchor 
                        theme={ theme }
                        onClick={ handleClick }
                    >
                        {page ? 'Reset it here' : 'Sign In' }
                    </Anchor>.
                </SmallText>
            </MainWrapper>
            <Footer />
        </main>
    );
}
 
export default Main;