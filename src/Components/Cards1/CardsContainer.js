import React from 'react'
import CardOne from './CardOne'
import CardTwo from './CardTwo'
import CardThree from './CardThree'
import CardFour from './CardFour'


const CardsContainer = ({ hiddenComponents, handleHiddenComponents }) => {
    return (
        <div
            className={hiddenComponents ? 'hidden' : 'mb-32 ml-10 mr-10'}
        >
            <div
                className='flex justify-center gap-2 '
            >
                <CardOne handleHiddenComponents={handleHiddenComponents} />
                <CardTwo handleHiddenComponents={handleHiddenComponents} />
            </div>
            <CardThree handleHiddenComponents={handleHiddenComponents} />
            <CardFour handleHiddenComponents={handleHiddenComponents} />


        </div>

    )
}

export default CardsContainer