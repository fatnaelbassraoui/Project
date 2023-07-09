import React from 'react'
import { Menu } from 'react-feather'
import { X } from 'react-feather'

const NavBurger = ({ handleBurger, burger }) => {
    return (
        <div
            onClick={handleBurger}>
            {burger ? <X className='text-black mr-2' /> : <Menu className='text-white ' />}
        </div>
    )
}

export default NavBurger