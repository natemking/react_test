import styled from 'styled-components';

export const SmallText = styled.p`
    font-size: 14px;
    line-height: 20px;
    font-weight: 300;
    color: ${ props => props.altColor ? props.theme.inputBorder : 'inherit' }
`