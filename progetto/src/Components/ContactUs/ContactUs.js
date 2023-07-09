import React from 'react'
import Form from './Form'
import Map from './Map'
import Nebulosa2 from '../../Assets/Nebulosa2.png'


const ContactUs = ({ hiddenComponents }) => {
    return (
        <div
            className={hiddenComponents ? 'hidden' : 'relative '}

        >
            <div
                className='absolute left-0 right-0 bottom-36 z-0 w-[100%] h-[100%]'

            >
                <img
                    src={Nebulosa2}
                    alt="nebulous"
                    className='absolute left-0 right-0 bottom-20  z-0 w-[100%] h-[100%]'
                />

            </div>
            <div className='grid justify-start pr-5 text-white ml-12'>
                <h1
                    className='contactUsTitle '
                >
                    Contattaci
                </h1>
            </div>
            <div
                className='flex flex-col justify-center items-center'
            >
                <Map />
                <Form />
            </div>
        </div>
    )

}

export default ContactUs