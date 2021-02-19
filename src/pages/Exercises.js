import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import QuizOptions from '../components/QuizOptions';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import useFetch from '../hooks/useFetch';
import ExBtn from '../components/ExBtn';

const Exercises = () => {
    const { id } = useParams();
    const { data: posts, isPending, error} = useFetch(`http://localhost:8000/exercises`);
    return (
        <Router>
            { error && <div>{ error }</div>}
            { isPending && <h3>Loading...</h3> }
            { posts && <ExBtn posts={posts} service={id} /> }
            <Switch>
                <Route path="/exercises/:id">
                    <QuizOptions />
                </Route>
            </Switch>
            
        </Router>
    )
}

export default Exercises
