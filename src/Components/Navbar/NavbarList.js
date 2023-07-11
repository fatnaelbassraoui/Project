import React from 'react'
import { motion } from 'framer-motion'

const NavbarList = ({ burger }) => {
    {/*daisyUi ul component */ }
    return (

        <div
            className={burger ? "flex-none mr-2" : "navList"}>
            <ul className="menu menu-horizontal font-semibold  bg-white  px-1">
                <motion.li
                    whileHover={{ scale: 1.1, originX: 0, backgroundColor: 'white', marginTop: '-1rem' }}
                    transition={{ duration: 0.5 }}
                ><p>Progetti</p></motion.li>
                <motion.li
                    whileHover={{ scale: 1.1, originX: 0, backgroundColor: 'white', marginTop: '-1rem' }}
                    transition={{ duration: 0.5 }}
                ><p>Chi siamo</p></motion.li>
                <motion.li
                    whileHover={{ scale: 1.1, originX: 0, backgroundColor: 'white', marginTop: '-1rem' }}
                    transition={{ duration: 0.5 }}
                ><p>Contattaci</p></motion.li>
            </ul>
        </div>

    )
}

export default NavbarList