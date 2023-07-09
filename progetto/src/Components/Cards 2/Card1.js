import React from 'react'
import Mountains from '../../Assets/Mountains.png'
import Logo from '../../Assets/logo.png'

const Card1 = () => {
    return (
        <div
            className="flex flex-col md:w-full ml-20 mr-20  ">

            <img
                className="h-[10hw] w-cover    "
                src={Mountains}
                alt="Mountains" />


            <div className="p-6 ">
                <h1
                    className='textTitleCard1 text-white'
                >Lorem Ipsum dolor
                </h1>
                <div
                    className='flex flex-row  justify-between items-center w-[85%]'
                >
                    <div
                        className='ContainerLogoCard flex justify-center items-center border ml-4 border-white'>

                        <img

                            className="w-30"
                            src={Logo}
                            alt="Logo" />
                        {/* <h5
                            className="textLogoCard text-white  "
                        >
                            logo
                        </h5> */}
                    </div>
                    <p className=" w-3/4  text-white text-xs md:text-lg ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at ante eget magna elementum tristique non ac est. Nam dapibus nisl velit, non facilisis libero dignissim vel. Nam sagittis nibh eu augue lacinia convallis.</p>
                </div>
            </div>
        </div>
    )
}

export default Card1