import styled from 'styled-components';

export const Input = styled.input`
    font-family: inherit;
    font-size: 14px;
    font-weight: 300;
    padding: 15px 20px;
    margin-bottom: 15px;
    background-color: ${ props => props.theme.inputBG };
    border: 1px solid ${ props => props.theme.inputBorder };
    border-radius: 5px;
`
