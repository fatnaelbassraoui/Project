import React from 'react'
import PlantLeave from '../../Assets/Plant-leaves.png'

const Card4 = () => {
    return (
        <div>
            <div
                className="flex  rounded-lg  md:flex-row justify-between items-start ml-20 rounded-l-lg">


                <div className="flex flex-col justify-center md:p-6 md:pt-20">
                    <p className="mb-6 textCard4 pr-6  ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at ante eget magna elementum tristique non ac est. Nam dapibus nisl velit, non facilisis libero dignissim vel. Nam sagittis nibh eu augue lacinia convallis.
                    </p>
                    <p className="mb-4 textCard4 pr-6 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at ante eget magna elementum tristique non ac est. Nam dapibus nisl velit, non facilisis libero dignissim vel. Nam sagittis nibh eu augue lacinia convallis.
                    </p>
                </div>
                <img
                    className="h-[40vw] w-[40vw] rounded-t-lg object-cover imgCard4 "
                    src={PlantLeave}
                    alt='DriesFlowers'
                />
            </div>
        </div>
    )
}

export default Card4