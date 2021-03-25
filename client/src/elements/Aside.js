import styled from 'styled-components';

export const Aside = styled.aside`
    height: 100vh;
    width: 33vw;
    position: relative;
    background: ${ props => props.theme.bgColor };
    color: ${ props => props.theme.primary };
    
    @media(max-width: 768px){
        width: 100vw;
    }
`;