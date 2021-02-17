import React from 'react';
import { Link } from 'react-router-dom';
import {CardContainer, CardDescription, CardWrap, CardTitle, ArrowWrap, Arrow} from './CardElements';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Exercises from '../../pages/Exercises';


const index = ({posts, service}) => {

    return (
        <>
            <CardContainer>
                {posts.map((props) => ( 
                    <CardWrap key={ props.id } to={`/exercises/${props.id}`}>
                        <CardTitle>{ props.type }</CardTitle>
                        <CardDescription>{props.description}</CardDescription>
                        <ArrowWrap>
                            <Arrow />
                        </ArrowWrap>
                    </CardWrap>
                    
                ))}

            </CardContainer>
        </>
    )
}

export default index
