import React from 'react'
import {Btn} from './ButtonElements';

const Button = (props) => {


    return (
        <>
            <Btn>{props.label}</Btn>
        </>
    )
}

export default Button
