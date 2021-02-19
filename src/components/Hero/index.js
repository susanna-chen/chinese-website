import React from 'react'
import Button from '../Button';
import {HeroContainer, HeroContent, HeroBg, HeroH1, HeroP, HeroBtnWrapper} from './HeroElements';

const Hero = () => {
    return (
        <>
            <HeroContainer id="hero">
                <HeroBg></HeroBg>{/* aggiungere bg */}
                <HeroContent>
                    <HeroH1>Lorem ipsum dolor sit amet consectetur adipisicing elit</HeroH1>
                    <HeroP>Lorem ipsum dolor sit amet consectetur adipisicing elit. A dicta dolor quasi officia nemo, eaque at iure obcaecati veritatis amet quaerat assumenda voluptates? Optio iusto adipisci est reprehenderit et natus.</HeroP>
                    <HeroBtnWrapper>
                        <Button to="/" label="Start Learning" />
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer> 
        </>
    )
}

export default Hero
