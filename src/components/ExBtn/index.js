import React, {useState} from 'react'
import {ExBtnContainer, ExBtnWrap, ExBtnTitle} from './ExBtnElements';

const ExBtn = ({posts}) => {
    const [showQuiz, setShowQuiz] = useState(false);

    return (
        <>
            <ExBtnContainer>
                {posts.map((props) => ( 
                    <ExBtnWrap key={ props.id } to={`/exercises/${props.id}`}>
                        <ExBtnTitle>{ props.type }</ExBtnTitle>
                    </ExBtnWrap>
                ))}
            </ExBtnContainer>
        </>
    )
}

export default ExBtn