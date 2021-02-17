import styled from 'styled-components';
import {BsArrowRight} from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
`

export const CardWrap = styled(Link)`
    display: block;
    position: relative;
    max-width: 300px;
    background-color: ${props => props.theme.colors.gray};
    border-radius: 4px;
    padding: 32px 24px;
    margin: 12px;
    text-decoration: none;
    z-index: 0;
    overflow: hidden;
    cursor: pointer;
    text-align: left;
    text-decoration: none;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: ${props => props.theme.colors.detail};
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.25s ease-out;
  }

  &:hover > h3,
  &:hover > p {
    color: ${props => props.theme.colors.lightText};
  }

  &:hover:before {
    transform: scale(22);
  }

  &:hover:before {
    transform: scale(22);
}
`

export const ArrowWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 40px;
    height: 40px;
    overflow: hidden;
    top: 0;
    right: 0;
    background-color: ${props => props.theme.colors.detail};
    border-radius: 0 4px 0 40px;
`

export const Arrow = styled(BsArrowRight)`
    color: white;
    width: 30px;
    height: 30px;
    margin-top: -7px;
    margin-right: -5px;
`

export const CardTitle = styled.h3`
    color: #262626;
    font-size: 32px;
    line-height: 24px;
    font-weight: 700;
    margin-bottom: 12px;
    transition: 0.25s ease-in-out;


    @media screen and (max-width: 480px) {
        font-size: 24px;
    }
`

export const CardDescription = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: #666666;
    transition: 0.25s ease-in-out;
`