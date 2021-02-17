import styled from 'styled-components';

export const BtnS = styled.button`
    border-radius: 50px;
    background: transparent;
    padding: 10px 22px;
    color: ${props => props.theme.colors.detail};
    border: 1px solid ${props => props.theme.colors.detail};
    outline: none;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s ease-in-out;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    text-decoration: none;
    margin-left: 10px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${props => props.theme.colors.darkBase};
        color: ${props => props.theme.colors.lightText};
        border: 1px solid ${props => props.theme.colors.darkBase};
    }

    @media screen and (max-width: 440px) {
        display: none;
    }
`

