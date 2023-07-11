import React from 'react'
import Logo from '../../Assets/logo.png'
import Linkedin from '../../Assets/Linkedin.png'
import Tiktok from '../../Assets/Tiktok.png'
import Twitter from '../../Assets/Twitter.png'
import Facebook from '../../Assets/Facebook.png'
import Instagram from '../../Assets/Instagram.png'



const FooterComponent1 = () => {
    return (
        <footer class="footer items-center p-4  text-neutral-content justify-center md:justify-between">
            <div class="items-center grid-flow-col ">
                <img
                    className="footerLogo"
                    src={Logo}
                    alt="Logo" />
            </div>
            <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end ">
                <p > <img
                    src={Linkedin}
                    alt="Linkedin" />
                </p>
                <p > <img
                    src={Tiktok}
                    alt="Tiktok" />
                </p>
                <p> <img
                    src={Twitter}
                    alt="Twitte" />
                </p>
                <p> <img
                    src={Facebook}
                    alt="Facebook" />
                </p>
                <p > <img
                    src={Instagram}
                    alt="Instagram" />
                </p>

            </div>
        </footer>


    )
}

export default FooterComponent1