import React from 'react';
import { theme } from '../themes'
import { BannerWrapper, InnerBannerLeft, InnerBannerRight , SmallText } from '../elements';

const Banner = () => {
    return (  
        <BannerWrapper theme={ theme }>
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
