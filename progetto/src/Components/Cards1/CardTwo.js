import React from 'react'
import Img from '../../Assets/Status-Default-Desktop2.png'

const CardTwo = ({ handleHiddenComponents }) => {
    return (
        <figure><img
            onClick={handleHiddenComponents}
            className='object-cover  w-[46vw] rounded-t-lg '
            src={Img} alt="Shoes" /></figure>
    )
}

export default CardTwo