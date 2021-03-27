import React from 'react';
import { theme } from '../themes'
import { BannerWrapper, InnerBannerLeft, InnerBannerRight , SmallText } from '../elements';

const Banner = ({ banner }) => {
    return (  
        <BannerWrapper 
            theme={ theme } 
            style={ banner ? null : { right: '-3000px' }}>
            <InnerBannerLeft theme={ theme }>
                👍
            </InnerBannerLeft>
                
            <InnerBannerRight>
                <SmallText>
                    Password reset instructions have been sent.
                </SmallText>
            </InnerBannerRight>

        </BannerWrapper>
    );
}
 
export default Banner;
