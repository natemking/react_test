import styled from 'styled-components';

export const Button = styled.button`
    background: linear-gradient(to right, ${ props => props.theme.bgColor });
    font-family: inherit;
    font-size: 14px;
    font-weight: 800;
    color: ${ props => props.theme.primaryText };
    padding: 15px 0;
    border: none;
    border-radius: 5px;
`