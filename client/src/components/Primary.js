import React from 'react';
import { theme } from '../themes';
import { AsideWrapper, LogoWrapper, H1, H3, H5, Aside, SolidBox, EmptyBox } from '../elements';


const Primary = (props) => {
    console.log(props);
    return (
        <Aside theme={ theme }>
            
            <EmptyBox theme={theme} top={ true } />
            <AsideWrapper position='absolute'>
                <LogoWrapper>
                    <SolidBox />
                    <H3>ACME</H3>
                </LogoWrapper>
                <H1>Sign in and start saving your time today.</H1>
                <H5>We provide 24/7 support with out highly dedicated professional team.</H5>
            </AsideWrapper>
            <EmptyBox theme={theme} top={ false }/>

        </Aside>
    );
}
 
export default Primary;