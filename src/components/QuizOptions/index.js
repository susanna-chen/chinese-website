import React, { useState } from 'react';
import {QuizContainer, ScoreText, QuestionContainer, QuestionWrapper, QuizText, QuestionText, OptionsWrapper, Option} from './QuizOptionsElements';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

const QuizOptions = () => {
    const { id } = useParams();
    const { data: exercises, isPending, error} = useFetch('http://localhost:8000/exercises/' + id);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [randomIndex, setRandomIndex] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [totalQuestion] = useState(5);

    const optionClick = (isCorrect) => {

        if (isCorrect === true) {
            setScore(score + 1);
        } 

        const nextQuestion = currentQuestion + 1;
 
        if (nextQuestion < totalQuestion) {
            setRandomIndex(Math.floor(Math.random() * exercises.quizes.length));
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowScore(true);
        }    }

    const clearScore = () => {
        setScore(0);
        setCurrentQuestion(0)
        setShowScore(false);
    }

    return (
        <>
            {isPending && <h3>Loading...</h3>}
            {error && <div>{ error }</div>}
            {exercises &&
            <QuizContainer>
                {showScore ? (
                <>
                    <ScoreText>You scored {score} out of {totalQuestion}</ScoreText>
                    <Option onClick={() => clearScore()}>Try Again</Option>
                </>
                ):(                
                <QuestionContainer>
                    <QuizText>Choose the right classifier {currentQuestion}/{totalQuestion}</QuizText>
                    <QuestionWrapper>
                        <QuestionText>{exercises.quizes[randomIndex].question}</QuestionText>
                    </QuestionWrapper>
                    <OptionsWrapper>
                    {exercises.quizes[randomIndex].options.map((answerOption) => 
                        <Option key={answerOption.id} isCorrectColor={answerOption.isCorrect} onClick={() => optionClick(answerOption.isCorrect)}>{answerOption.answer}</Option>       
                    )}
                    </OptionsWrapper>
                </QuestionContainer>
                )}
            </QuizContainer>}
        </>
    )
}

export default QuizOptions
