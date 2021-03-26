import styled from 'styled-components';

export const Anchor = styled.a`
    font-size: inherit;
    color: ${ props => props.theme.primary };

    &:hover {
        cursor: pointer;
    }
`