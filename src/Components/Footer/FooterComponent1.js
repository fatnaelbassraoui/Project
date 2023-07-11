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
                <li href="#"> <img
                    src={Linkedin}
                    alt="Linkedin" />
                </li>
                <li href="#"> <img
                    src={Tiktok}
                    alt="Tiktok" />
                </li>
                <li href="#"> <img
                    src={Twitter}
                    alt="Twitte" />
                </li>
                <li href="#"> <img
                    src={Facebook}
                    alt="Facebook" />
                </li>
                <li href="#"> <img
                    src={Instagram}
                    alt="Instagram" />
                </li>

            </div>
        </footer>


    )
}

export default FooterComponent1