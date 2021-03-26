import React from 'react';
import { theme } from '../themes'
import { FooterWrapper, SmallText } from '../elements';

const Footer = () => {
    return (  
        <FooterWrapper>
            <SmallText altColor={ true } theme={ theme }>
                &copy; Copyright ACME 2020
            </SmallText>
        </FooterWrapper>
    );
}
 
export default Footer;