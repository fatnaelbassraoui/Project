import React from 'react'
import { motion } from 'framer-motion'
import NavbarImg from './NavbarImg'
import NavbarList from './NavbarList'
import NavBurger from './NavBurger'

const Navbar = ({ handleBurger, burger, handleHiddenComponentsFalse }) => {
    return (

        <div
            className='sticky top-0 z-10'
        >
            <motion.div
                className={burger ? "navbar  animationNav sticky top-0 z-10 bg-white " : "navbar sticky top-0 z-10 colorGradient backdrop-filter backdrop-blur-lg "} >
                <NavbarImg burger={burger} handleHiddenComponentsFalse={handleHiddenComponentsFalse} />
                <NavbarList burger={burger} />
                <NavBurger burger={burger} handleBurger={handleBurger} />
            </motion.div >
            <div
                className='flex flex-row justify-between  top-0 z-10'
            >

                {/*The side lines of the Navbar */}
                <div
                    className={burger ? "border-box font-semibold h-screen w-5 top-0 z-10 bg-white  px-1" : "hidden"}
                >
                </div>
                <div
                    className={burger ? "border-box2 font-semibold h-screen w-5 top-0 z-10 bg-white  px-1" : "hidden"}
                >
                </div>

            </div>
            {/*The bottom line of the Navbar */}
            <div
                className=' top-0 z-10'
            >
                <div
                    className={burger ? "border-box font-semibold w-full h-5 top-0 z-10 bg-white  px-1" : "hidden"}
                >
                </div>

            </div>
        </div>
    )
}

export default Navbar