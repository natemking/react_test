import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;

    @media(max-width: 768px){
        flex-direction: column;
    }
`
export const AsideWrapper = styled.section`
    position: ${ props => (props.position ? props.position : null) };
    top: 20%;
    bottom: 20%;
    padding: 0 40px;

    @media(max-width: 768px){
        top: 0;
    }

    @media(max-width: 500px){
        padding: 0 15px;

        h3 {
            margin: 20px 0;
        }
    }
`
export const LogoWrapper = styled.section`
    display: flex;
    align-items: center;
`
export const MainWrapper = styled.section`
    position: absolute;
    margin: auto;
    width: 350px;
    top: 25%;
    bottom: 20%;
    left: 0;
    right: 0;
    text-align: center;

    @media(max-width: 768px){
        top: 10%;
    }
`
export const FooterWrapper = styled.footer`
    position: absolute;
    width: 100%;
    bottom: 0;
    text-align: center;
    padding-bottom: 20px;
`
export const BannerWrapper = styled.div`
    height: 40px;
    position: absolute;
    top: 30px;
    right: 30px;
    width: 365px;
    border: 1px solid ${ props => props.theme.inputBorder };
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    box-shadow: 2px 3px 5px ${ props => props.theme.inputBorder };
    transition: right 1s;

    @media(max-width: 500px){
        right: 5px;
    }
`
export const InnerBannerLeft = styled.div`
    background: linear-gradient(to right, ${ props => props.theme.bgColor });
    font-size: 1.2em;
    padding: 10px;
`
export const InnerBannerRight = styled.div`
    width: 90%;
    padding-left: 10px;
`