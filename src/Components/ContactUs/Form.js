import React, { useState } from 'react'
import { Icon } from 'react-icons-kit'
import { androidDone } from 'react-icons-kit/ionicons/androidDone'
import { ic_send_outline } from 'react-icons-kit/md/ic_send_outline'
import { motion } from 'framer-motion'

const Form = () => {
    const [button, setButton] = useState(false)
    const handleButton = () => {
        setButton(prev => !prev)
    }

    return (
        <div className="flex flex-col justify-center items-center  w-5/6  mb-10">

            <form
                className=' w-full '
            >
                <div className="mb-6 flex flex-row gap-5 m-5 ">
                    <input type="nome" className="formInput border  border-gray-900 text-gray-900 text-xl rounded-xl h-14 w-full  p-2.5" placeholder="Nome" required />
                    <input type="cognome" className="formInput border  border-gray-900 text-gray-900 text-xl rounded-xl h-14 w-full  p-2.5" placeholder="Cognome" required />

                </div>
                <div className="gap-5 m-5">
                    <input type="email" className="formInput border  border-gray-900 text-gray-900 text-xl rounded-xl h-14 w-full  p-2.5" placeholder="email" required />
                </div>
                <div className=" flex justify-end gap-5 m-5">
                    <div>
                        <div>
                            <input type="oggetto" className="formInput border  border-gray-900 text-gray-900 text-xl rounded-xl h-14 w-full  p-2.5" placeholder="Oggetto" required />
                        </div>
                        <div
                            className='flex justify-end '>
                            {button ? <motion.button
                                onClick={handleButton}
                                type="submit" className="text-white bg-blue-700 hover:bg-white hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm w-full sm:w-auto px-5 py-1 pb-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2">
                                invia messaggio
                                <Icon size={20} icon={ic_send_outline} style={{ color: '#FFFF', paddingLeft: 10 }} className='hover:text-blue-700' />
                            </motion.button> :
                                <motion.button
                                    onClick={handleButton}
                                    type="submit" className="text-white border  border-white bg-black hover:bg-white hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm w-full sm:w-auto px-5 py-1 pb-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2 ">
                                    messaggio inviato
                                    <Icon size={20} icon={androidDone} style={{ color: '#38D7A8' }} />
                                </motion.button>
                            }
                        </div>
                    </div>
                    <textarea id="message" rows="4" className=" formInput block p-1  w-full h-24 text-xl text-gray-900 border  border-gray-900 rounded-xl  " placeholder="Messaggio"></textarea>
                </div>
                <div className="flex items-start gap-2 mb-6">
                    <div
                        className='flex flex-row items-center'>
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label className="ml-2 text-label-form font-medium text-white dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et mauris dui. Vestibulum ante ipsum primis in faucibus orci luctus.</label>
                    </div>
                    <div
                        className='flex flex-row items-center'
                    >
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label className="text-label-form ml-2 font-medium text-white dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et mauris dui. Vestibulum ante ipsum primis in faucibus orci luctus.</label>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Form