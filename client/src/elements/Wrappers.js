import styled from 'styled-components';

export const AsideWrapper = styled.div`
    position: ${ props => (props.position ? props.position : null) };
    top: 20%;
    bottom: 20%;
    padding: 0 40px;
`
export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`