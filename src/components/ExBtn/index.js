import React, {useState} from 'react'
import {ExBtnContainer, ExBtnWrap, ExBtnTitle} from './ExBtnElements';

const ExBtn = ({posts}) => {
/*     const [showQuiz, setShowQuiz] = useState(false);
    const clickQuiz = () => {
        setShowQuiz(true);
        console.log(showQuiz);
    } */

    return (
        <>
            <ExBtnContainer>
                {posts.map((props) => ( 
                    <ExBtnWrap key={ props.id } to={`/exercises/${props.id}`}/*  onClick={clickQuiz} */>
                        <ExBtnTitle>{ props.type }</ExBtnTitle>
                    </ExBtnWrap>
                ))}
            </ExBtnContainer>
        </>
    )
}

export default ExBtn