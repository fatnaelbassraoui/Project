import React from 'react'
import Img from '../../Assets/Status-Default-Desktop6.png'

const CardFour = ({ handleHiddenComponents }) => {
    return (
        <figure>
            <img
                onClick={handleHiddenComponents}
                className='object-cover mt-8 w-full rounded-t-lg'
                src={Img} alt="Img" />
        </figure>
    )
}

export default CardFour