import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import QuizOptions from '../components/QuizOptions';
import useFetch from '../hooks/useFetch';
import ExBtn from '../components/ExBtn';

const Exercises = () => {
    const { id } = useParams();
    const { data: posts, isPending, error} = useFetch(`http://localhost:8000/exercises`);
    const [showQuiz, setShowQuiz] = useState(false);

    return (
        <>
            { error && <div>{ error }</div>}
            { isPending && <h3>Loading...</h3> }
            { posts && <ExBtn posts={posts} service={id} /> }
            {showQuiz ? (
                <>
                    <QuizOptions />
                </>
            ) :
            (
                <>
                    <div>Choose a quiz</div>
                </>
            )
        }
            
        </>
    )
}

export default Exercises
