import styled from 'styled-components';

export const QuizContainer = styled.div`
    height: 75vh;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ScoreText = styled.h3`
    font-size: 24px;
    color: ${props => props.theme.colors.darkText};
`

export const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const QuestionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const QuizText = styled.p`
    color: ${props => props.theme.colors.detail};
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    margin-bottom: 8px;
`

export const QuestionText = styled.h2`
    font-size: 48px;
    color: ${props => props.theme.colors.darkText};
    margin-bottom: 32px;
`

export const OptionsWrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const Option = styled.button`
    margin: 8px;
    flex: 0 1 200px; /*  No stretching: */
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

/*     &:hover {
        transition: all 0.2s ease-in-out;
        background: ${props => props.theme.colors.darkBase};
        color: ${props => props.theme.colors.lightText};
        border: 1px solid ${props => props.theme.colors.darkBase};
    } */

    &:active {
        transition: all 0.2s ease-in-out;
        background: ${props => props.isCorrectColor ? '#2ecc71' : '#e74c3c'};
        color: ${props => props.theme.colors.lightText};
        border: 1px solid ${props => props.isCorrectColor ? '#2ecc71' : '#e74c3c'};

    }
`