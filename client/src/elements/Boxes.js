import styled from 'styled-components';

export const SolidBox = styled.div`
    height: 40px;
    width: 40px;
    background: linear-gradient(to bottom right, #FFF, #EFADC4);
    border-radius: 5px;
    margin-right: 20px;
    box-shadow: 0 0 10px #DF477D;
`

export const EmptyBox = styled.div`
    position: absolute;
    height: ${ props => (props.top ? '50px' : '150px') };
    width: ${ props => (props.top ? '50px' : '150px') };
    border: ${ props => (props.top ? '18px' : '30px') } solid ${ props => props.theme.primaryText };
    border-radius: 4px;
    opacity: .5;
    top: ${ props => (props.top ? '-35px' : null) };
    right: ${ props => (props.top ? '-35px' : null) };
    bottom: ${ props => (props.top ? null : '-60px') };
    left: ${ props => (props.top ? null : '-60px') };
`