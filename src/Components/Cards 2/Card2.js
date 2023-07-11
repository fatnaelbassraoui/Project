import React from 'react'
import DriesFlowers from '../../Assets/DriesFlowers.png'

const Card2 = () => {
    return (
        <div
            className="flex  rounded-lg  md:flex-row justify-between ml-20 mr-20">

            <div className="flex flex-col justify-start ml-8 p-4 text-white">
                <h5
                    className="mb-2 textTitleCard2 w-3/4 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h5>

            </div>
            <img
                className="h-[40vw] w-[40vw] rounded-t-lg object-cover md:rounded-lg"
                src={DriesFlowers}
                alt='DriesFlowers'
            />
        </div>
    )
}

export default Card2
