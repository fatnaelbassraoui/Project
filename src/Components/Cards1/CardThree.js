import React from 'react'
import Img from '../../Assets/Status-Default-Desktop3.png'
import Img2 from '../../Assets/Status-Default-Desktop4.png'
import Img3 from '../../Assets/Status-Default-Desktop5.png'


const CardThree = ({ handleHiddenComponents }) => {
    return (
        <figure
            className='flex gap-2 justify-center mt-4 '
        >
            <img
                onClick={handleHiddenComponents}
                className='object-cover  w-[30vw] rounded-t-lg'
                src={Img} alt="Shoes" />
            <img
                onClick={handleHiddenComponents}
                className='object-cover  w-[30vw] rounded-t-lg'
                src={Img2} alt="Shoes" />
            <img
                onClick={handleHiddenComponents}
                className='object-cover  w-[30vw] rounded-t-lg'
                src={Img3} alt="Shoes" />
        </figure>
    )
}

export default CardThree