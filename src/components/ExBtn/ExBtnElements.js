import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ExBtnContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
`

export const ExBtnWrap = styled(Link)`
    border-radius: 50px;
    padding: 10px 22px;
    background: ${props => props.theme.colors.darkBase};
    border: 1px solid ${props => props.theme.colors.darkBase};
    outline: none;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s ease-in-out;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px;

    &:hover {
        transition: all 0.2s ease-in-out;
        border: 1px solid ${props => props.theme.colors.detail};
        background: ${props => props.theme.colors.detail};


    }
`

export const ExBtnTitle = styled.p`
    color: ${props => props.theme.colors.lightText};
    line-height: 24px;
    transition: 0.25s ease-in-out;

    @media screen and (max-width: 480px) {
        font-size: 24px;
    }
`