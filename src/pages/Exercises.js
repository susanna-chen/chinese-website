import React from 'react'
import { useParams } from 'react-router-dom';
import QuizOptions from '../components/QuizOptions';

const Exercises = () => {
    const { id } = useParams();

    return (
        <>
            <div>baubaumiaomiao n. {id}</div>
            <QuizOptions />
        </>
    )
}

export default Exercises
