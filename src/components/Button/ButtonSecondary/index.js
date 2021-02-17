import React from 'react'
import {BtnS} from './ButtonSElements';

const Button = (props) => {


    return (
        <>
            <BtnS>{props.label}</BtnS>
        </>
    )
}

export default Button