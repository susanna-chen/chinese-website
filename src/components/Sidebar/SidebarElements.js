import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height:100%;
    background: ${props => props.theme.colors.detail};
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => isOpen ? '100%' :'0'};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: ${props => props.theme.colors.darkBase};
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: ${props => props.theme.colors.lightText};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const SidebarLink = styled(LinkS)`
    display: none;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: ${props => props.theme.colors.lightText};
    cursor: pointer;
    padding: 10%;

    &:hover {
        color: ${props => props.theme.colors.darkText};
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    white-space: nowrap;
    background: ${props => props.theme.colors.darkBase};
    padding: 10px 22px;
    color: ${props => props.theme.colors.lightText};
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-size: 16px;

    &:hover {
    transition: all 0.2s ease-in-out;
    background: ${props => props.theme.colors.lightBase};
    color: ${props => props.theme.colors.darkText};
    }
`
/* da cambiare se ci sono pi# link */
export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 80px);
    

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(5, 60px);
    }
`   