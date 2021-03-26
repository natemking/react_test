import React from 'react';
import { theme } from '../themes';
import { AsideWrapper, LogoWrapper, H3, Aside, SolidBox, EmptyBox } from '../elements';


const Primary = () => {
    
    return (
        <Aside theme={ theme }>
            
            <EmptyBox theme={theme} top={ true } />
            <AsideWrapper position='absolute'>
                <LogoWrapper>
                    <SolidBox />
                    <H3>ACME</H3>
                </LogoWrapper>
                <H3>Sign in and start saving your time today.</H3>
                <p>We provide 24/7 support with our highly dedicated professional team.</p>
            </AsideWrapper>
            <EmptyBox theme={theme} top={ false }/>

        </Aside>
    );
}
 
export default Primary;