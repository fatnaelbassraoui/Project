import React from 'react'
import logo from '../../Assets/logo.png'



const NavbarImg = ({ burger, handleHiddenComponentsFalse }) => {
    return (
        <div
            className={burger ? " animationLogo " : 'logo  '}
        >
            <img
                onClick={handleHiddenComponentsFalse}
                className=" w-10"
                src={logo}
                alt="Logo" />
        </div>
    )
}

export default NavbarImg