import styled from 'styled-components';


export const ServiceContainer = styled.div`
    color: ${({light}) => ( light ? `${props => props.theme.colors.lightText}` : `${props => props.theme.colors.darkText}`)};
    background: ${({lightBg}) => (lightBg ? `${props => props.theme.colors.darkText}` : `${props => props.theme.colors.lightText}`)};
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const ServiceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 75vh;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const TextWrapper = styled.div`

`

export const BottomLine = styled.p`
    background: ${props => props.theme.colors.detail};
    width: 96px;
    height: 5px;
    margin: -20px auto 16px auto;

    @media screen and (max-width: 480px) {
        width: 48px;
        height: 4px;
    }
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({light}) => ( light ? `${props => props.theme.colors.lightText}` : `${props => props.theme.colors.darkText}`)};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({light}) => ( light ? `${props => props.theme.colors.lightText}` : `${props => props.theme.colors.darkText}`)};
`
