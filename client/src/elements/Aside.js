import styled from 'styled-components';

export const Aside = styled.aside`
    height: 100vh;
    width: 45vw;
    position: relative;
    background: linear-gradient(${ props => props.theme.bgColor });
    color: ${ props => props.theme.primaryText };
    
    @media(max-width: 768px){
        width: 100vw;
        height: 30vh;
    }

    @media(max-width: 500px){
        height: 50vh;
    }
`;