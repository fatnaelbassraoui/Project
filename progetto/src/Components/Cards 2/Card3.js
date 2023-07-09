import React from 'react'
import ArtImg from '../../Assets/ArtImg.png'

const Card3 = () => {
    const dots = [];
    for (let i = 0; i < 200; i++) {
        dots.push(<div key={i} className="dot2" />);
    }
    return (
        <div
            className="flex flex-col rounded-lg md:w-full md:flex-row justify-between mr-20 mt-20  ">
            <div
                className='dot-grid2 gap-6 '
            >
                {dots}
            </div>
            <div
                className='containerImgCard3 md:pt-20 gap-4 md:mt-16 absolute flex flex-row md:w-full md:flex-row justify-between  '
            >
                <img
                    className="h-[30vw] w-[60vw] rounded-r-lg "
                    src={ArtImg}
                    alt="ArtImg" />


                <div className="flex flex-col justify-center p-0 md:p-6">
                    <h5
                        className="mb-2 textTitleCard3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h5>
                    <p className="mb-4 textCard3 md:pr-6 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at ante eget magna elementum tristique non ac est. Nam dapibus nisl velit, non facilisis libero dignissim vel. Nam sagittis nibh eu augue lacinia convallis.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Card3