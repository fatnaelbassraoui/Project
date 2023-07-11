import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Nebulous from '../Components/Nebulous'
import StaffCards from '../Components/StaffComponentsCards/StaffCards'
import AboutUs from '../Components/AboutUs'
import ContactUs from '../Components/ContactUs/ContactUs'
import CardsContainer from '../Components/Cards1/CardsContainer'
import CardsContainer2 from '../Components/Cards 2/CardsContainer2'

const Home = () => {
    const [burger, setBurger] = useState(false); // i use this to handle the burger menu
    const [hiddenComponents, setHiddenComponents] = useState(false); // i use this to hidden the components when i click on the cards images

    //function to handle burger
    const handleBurger = () => {
        setBurger((prev) => !prev)
    }

    //functions to handle hidden components

    const handleHiddenComponents = () => {
        setHiddenComponents(true)
    }

    const handleHiddenComponentsFalse = () => {
        setHiddenComponents(false)
    }


    return (
        <>
            <Navbar handleHiddenComponentsFalse={handleHiddenComponentsFalse} handleBurger={handleBurger} burger={burger} />
            <Nebulous hiddenComponents={hiddenComponents} />
            <CardsContainer hiddenComponents={hiddenComponents} handleHiddenComponents={handleHiddenComponents} />
            <CardsContainer2 hiddenComponents={hiddenComponents} handleHiddenComponents={handleHiddenComponents} />
            <AboutUs hiddenComponents={hiddenComponents} />
            <StaffCards hiddenComponents={hiddenComponents} />
            <ContactUs hiddenComponents={hiddenComponents} />

            <Footer />
        </>

    )
}

export default Home