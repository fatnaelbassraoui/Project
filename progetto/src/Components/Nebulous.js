import React from 'react'
import Planets from '../Assets/Planets.png'
import NebulosaImg from '../Assets/Nebulosa.png'



const Nebulous = ({ hiddenComponents }) => {
    const dots = [];
    for (let i = 0; i < 110; i++) {
        dots.push(<div key={i} className="dot" />);
    }
    return (
        < div
            className={hiddenComponents ? 'hidden' : ''}
            style={{
                backgroundImage: `url("${NebulosaImg}")`,
                backgroundSize: 'full',
                borderBlockEndWidth: 'full',
                backgroundHeight: 'full',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            {/* in alternativa al backgroundImg ho cercato di creare la neburolsa usando radial gradient */}
            {/* <div
                className='nebulous'
            ></div> */}
            <div

            >

            </div>
            <div className="dot-grid gap-6   ">{dots}</div>
            <div
                className='text-planets '
            >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at ante eget magna elementum tristique non ac est. Nam dapibus nisl velit, non facilisis libero dignissim vel. Nam sagittis nibh eu augue lacinia convallis.</p>
            </div>
            <div
                className='mt-10'
            >
                <img
                    src={Planets}
                    alt="planets"
                    className='planetsImg ' />
            </div>
        </div>
    )
}

export default Nebulous