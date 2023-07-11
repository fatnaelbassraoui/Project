import React from 'react'
import Line from '../../Assets/Line.png'

const LineFooterImg = () => {
    return (
        <div className='mb-20 relative'>
            <img
                className="w-full absolute z-10 bottom2 "
                src={Line}
                alt='line'
            />

        </div>
    )
}

export default LineFooterImg