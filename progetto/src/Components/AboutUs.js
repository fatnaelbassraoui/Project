import React from 'react'

const AboutUs = ({ hiddenComponents }) => {
    return (
        <div
            className={hiddenComponents ? 'hidden' : 'ml-3 mr-3'}
        >
            <div className='grid justify-end pr-5 text-white'>
                <h1
                    className='aboutUsTitle mr-6'
                >
                    Chi siamo
                </h1>
            </div>
            <div
                className='grid justify-center grid-cols-1 md:grid-cols-3 xl:grid-cols-3  gap-6 text-white mt-10 ml-12 '
            >
                <p
                    className='w-3/4 text-lg' //w-3/4 is a tailwind class that sets the width to 75% of the parent element
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at ante eget magna elementum tristique non ac est.
                </p>
                <p
                    className='w-3/4 text-lg' //w-3/4 is a tailwind class that sets the width to 75% of the parent element
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at ante eget magna elementum tristique non ac est. Nam dapibus nisl velit, non facilisis libero dignissim vel. Nam sagittis nibh eu augue lacinia convallis.
                </p>
            </div>
        </div>
    )
}

export default AboutUs