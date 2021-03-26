import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`
export const AsideWrapper = styled.section`
    position: ${ props => (props.position ? props.position : null) };
    top: 20%;
    bottom: 20%;
    padding: 0 40px;
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
`
export const FooterWrapper = styled.footer`
    position: absolute;
    width: 100%;
    bottom: 0;
    text-align: center;
    padding-bottom: 20px;
`