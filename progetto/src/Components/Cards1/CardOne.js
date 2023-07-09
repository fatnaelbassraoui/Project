import React from 'react'
import Img from '../../Assets/Status-Default-Desktop1.png'

const CardOne = ({ handleHiddenComponents }) => {
    return (

        <figure
        ><img
                onClick={handleHiddenComponents}
                className='object-cover  w-[46vw] rounded-t-lg'
                src={Img} alt="img" /></figure>


    )
}

export default CardOne