import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Property1 from '../../Assets/Property-1.png'
import Property2 from '../../Assets/Property-2.png'
import Property3 from '../../Assets/Property-3.png'
import Property4 from '../../Assets/Property-4.png'
import Property5 from '../../Assets/Property-5.png'
import Property6 from '../../Assets/Property-6.png'

const CardsCarousel = () => {
    const [showStaffText, setShowStaffText] = useState(false)
    const [showStaffText2, setShowStaffText2] = useState(false)
    const [showStaffText3, setShowStaffText3] = useState(false)
    const [showStaffText4, setShowStaffText4] = useState(false)
    const [showStaffText5, setShowStaffText5] = useState(false)
    const [showStaffText6, setShowStaffText6] = useState(false)

    return (
        <div className="carousel flex flex-col w-full mt-52 ">
            <h1
                className='titleCarousel text-white'
            >Altri progetti</h1>
            <div className="carousel w-full mt-10 ">
                <div id="slide1" class="carousel-item relative w-full ">
                    <div
                        className='flex justify-center items-center'
                    >
                        <motion.img
                            src={Property1}
                            className="w-[33vw] relative hover:contrast-50 -space-y-20 hover:duration-500 hover:ease-in-out"
                            onHoverStart={() => setShowStaffText(true)}
                            onHoverEnd={() => setShowStaffText(false)}

                        />
                        <motion.p
                            visible={showStaffText ? { opacity: 1, transition: { duration: 0.5 } } : { opacity: 0, transition: { duration: 0.5 } }}
                            initial='hidden'
                            animate={showStaffText ? 'visible' : 'hidden'}
                            variants={{
                                visible: { opacity: 5, transition: { duration: 0.5 } },
                                hidden: { opacity: 0, transition: { duration: 0.5 } },
                            }}
                            className='carouselImgText font-semibold absolute z-10 bottom-10'>
                            Nome progetto 1
                        </motion.p>
                    </div>
                    <div
                        className='flex justify-center items-center'
                    >
                        <motion.img
                            src={Property2}
                            className="w-[33vw] relative hover:contrast-50 -space-y-20 hover:duration-500 hover:ease-in-out"
                            onHoverStart={() => setShowStaffText2(true)}
                            onHoverEnd={() => setShowStaffText2(false)}
                        />
                        <motion.p
                            visible={showStaffText2 ? { opacity: 1, transition: { duration: 0.5 } } : { opacity: 0, transition: { duration: 0.5 } }}
                            initial='hidden'
                            animate={showStaffText2 ? 'visible' : 'hidden'}
                            variants={{
                                visible: { opacity: 5, transition: { duration: 0.5 } },
                                hidden: { opacity: 0, transition: { duration: 0.5 } },
                            }}
                            className='carouselImgText font-semibold absolute z-10 bottom-10'>
                            Nome progetto 3
                        </motion.p>
                    </div>
                    <div
                        className='flex justify-center items-center'
                    >
                        <motion.img
                            src={Property3}
                            className="w-[33vw] relative hover:contrast-50 -space-y-20 hover:duration-500 hover:ease-in-out"
                            onHoverStart={() => setShowStaffText3(true)}
                            onHoverEnd={() => setShowStaffText3(false)}
                        />
                        <motion.p
                            visible={showStaffText3 ? { opacity: 1, transition: { duration: 0.5 } } : { opacity: 0, transition: { duration: 0.5 } }}
                            initial='hidden'
                            animate={showStaffText3 ? 'visible' : 'hidden'}
                            variants={{
                                visible: { opacity: 5, transition: { duration: 0.5 } },
                                hidden: { opacity: 0, transition: { duration: 0.5 } },
                            }}
                            className='carouselImgText font-semibold absolute z-10 bottom-10'>
                            Nome progetto 3
                        </motion.p>
                    </div>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <div
                        className='flex justify-center items-center'
                    >
                        <motion.img
                            src={Property4}
                            className="w-[33vw] relative hover:contrast-50 -space-y-20 hover:duration-500 hover:ease-in-out"
                            onHoverStart={() => setShowStaffText4(true)}
                            onHoverEnd={() => setShowStaffText4(false)}
                        />
                        <motion.p
                            visible={showStaffText4 ? { opacity: 1, transition: { duration: 0.5 } } : { opacity: 0, transition: { duration: 0.5 } }}
                            initial='hidden'
                            animate={showStaffText4 ? 'visible' : 'hidden'}
                            variants={{
                                visible: { opacity: 5, transition: { duration: 0.5 } },
                                hidden: { opacity: 0, transition: { duration: 0.5 } },
                            }}
                            className='carouselImgText font-semibold absolute z-10 bottom-10'>
                            Nome progetto 4
                        </motion.p>
                    </div>
                    <div
                        className='flex justify-center items-center'
                    >
                        <motion.img
                            src={Property5}
                            className="w-[33vw] relative hover:contrast-50 -space-y-20 hover:duration-500 hover:ease-in-out"
                            onHoverStart={() => setShowStaffText5(true)}
                            onHoverEnd={() => setShowStaffText5(false)}
                        />
                        <motion.p
                            visible={showStaffText5 ? { opacity: 1, transition: { duration: 0.5 } } : { opacity: 0, transition: { duration: 0.5 } }}
                            initial='hidden'
                            animate={showStaffText5 ? 'visible' : 'hidden'}
                            variants={{
                                visible: { opacity: 5, transition: { duration: 0.5 } },
                                hidden: { opacity: 0, transition: { duration: 0.5 } },
                            }}
                            className='carouselImgText font-semibold absolute z-10 bottom-10'>
                            Nome progetto 5
                        </motion.p>
                    </div>
                    <div
                        className='flex justify-center items-center'
                    >
                        <motion.img
                            src={Property6}
                            className="w-[33vw] relative hover:contrast-50 -space-y-20 hover:duration-500 hover:ease-in-out"
                            onHoverStart={() => setShowStaffText6(true)}
                            onHoverEnd={() => setShowStaffText6(false)}
                            whileHover={{ scale: 1.1 }}
                        />
                        <motion.p
                            visible={showStaffText6 ? { opacity: 1, transition: { duration: 0.5 } } : { opacity: 0, transition: { duration: 0.5 } }}
                            initial='hidden'
                            animate={showStaffText6 ? 'visible' : 'hidden'}
                            variants={{
                                visible: { opacity: 5, transition: { duration: 0.5 } },
                                hidden: { opacity: 0, transition: { duration: 0.5 } },
                            }}
                            className='carouselImgText font-semibold absolute z-10 bottom-10'>
                            Nome progetto 6
                        </motion.p>
                    </div>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default CardsCarousel