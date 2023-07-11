import React, { useState } from 'react'
import Ellipse1 from '../../Assets/Ellipse-1.png'
import { motion } from 'framer-motion'

const MemberStaff1 = () => {
    const [showStaffText, setShowStaffText] = useState(false)
    return (
        <div className='flex justify-center items-center  text-white '>
            <div className='card flex flex-col  justify-center items-center'>
                <div className='card-image  '>
                    <motion.img
                        //change setshowstafftext to true on hover start and false on hover end
                        onHoverStart={() => setShowStaffText(true)}
                        onHoverEnd={() => setShowStaffText(false)}
                        whileHover={{ scale: 1.2, transition: { duration: 0.5 }, marginTop: '-4rem' }}
                        src={Ellipse1}
                        alt="staff" />
                </div>
                <motion.div
                    visible={showStaffText ? { opacity: 1, transition: { duration: 0.5 } } : { opacity: 0, transition: { duration: 0.5 } }}
                    initial='visible'
                    animate={showStaffText ? 'hidden' : 'visible'}
                    variants={{
                        visible: { opacity: 1, transition: { duration: 0.5 } },
                        hidden: { opacity: 0, transition: { duration: 0.5 } },
                    }}
                    className='flex flex-col justify-center items-center mt-2 mb'
                >
                    <p>RUOLO</p>
                    <p>RICOPERTO</p>
                </motion.div>
                <motion.div
                    whileHover={{ opacity: 1 }}
                    initial='hidden'
                    animate={showStaffText ? 'visible' : 'hidden'}
                    variants={{
                        visible: { opacity: 1, transition: { duration: 0.5 }, marginTop: '-3rem' },
                        hidden: { opacity: 0, transition: { duration: 0.5 } },
                    }}
                >
                    <div
                        className='flex flex-col justify-center items-center mt-1 mb-1'
                    >
                        <h6>Nome Cognome</h6>
                        <h5>su due righe</h5>
                    </div>
                    <div
                        className='card-text  md:text-xs text-center '>
                        <span className='date'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at ante eget magna elementum tristique non ac est.</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default MemberStaff1