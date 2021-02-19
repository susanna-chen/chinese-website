import React from 'react';
import {CardContainer, CardDescription, CardWrap, CardTitle, ArrowWrap, Arrow} from './CardElements';

const index = ({posts}) => {

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
