import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: ${props => props.theme.colors.lightBase};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const HeroH1 = styled.h1`
    font-size: 48px;
    color: ${props => props.theme.colors.darkText};
    text-align: center;
    max-width: 700px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    font-size: 24px;
    color: ${props => props.theme.colors.darkText};
    margin-top: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
`