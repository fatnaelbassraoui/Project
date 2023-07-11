import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import CardsCarousel from './CardsCarousel'

//container of cards 
const CardsContainer2 = ({ hiddenComponents }) => {
    return (
        <div
            className={hiddenComponents ? 'flex flex-col  w-full h-full relative bottom-12 ' : 'hidden'}
        >
            <div
                className='flex  justify-center items-center mb-20'
            >
                <Card1 />
            </div>
            <Card2 />
            <Card3 />
            <Card4 />
            <CardsCarousel />
        </div>
    )
}

export default CardsContainer2