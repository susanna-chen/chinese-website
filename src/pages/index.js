import React, {useState} from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import { homeAbout } from '../components/InfoSection/Data';
import { homeExercises, homeGrammar } from '../components/Services/Data';
/* import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'; */
import Services from '../components/Services';
import QuizOptions from '../components/QuizOptions';

const Home = () => {
/*     const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    } */
    return (
        <>
{/*             <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />  */} 
            <Hero />
            <Services {...homeExercises}/>
            <InfoSection {...homeAbout} />
            <Footer />
        </>
    )
}

export default Home
