import {FaInstagram, FaLinkedin, FaTwitter, FaDiscord} from "react-icons/fa"
import "./Footer.scss"

const Footer = () => {
  return (
    <footer>
        <div className='footer--main'>
            <div className='footer--box brand--desc flex'>
                <h1 className="logo">Logo</h1>

                <p>lorem ipsum amet dolor lorem ipsum amet dolor lorem ipsum</p>

                <span className='footer--mark'>@block-hunter 2022</span>
            </div>

            <div className='footer--box footer--nav flex'>
                <h3 className='thick'>About Us</h3>
                <div className="link--list flex">
                    <a href='#!'>Home</a>
                    <a href='#!'>Services</a>
                    <a href='#!'>Blog</a>
                    <a href='#!'>Contact</a>
                </div>
            </div>

            <div className='footer--box footer--contact flex'>
                <h1>Contact Us</h1>
                <p>lorem ipsum amet dolor lorem ipsum amet dolor lorem ipsum</p>
                <span>+095 2134 1231</span>
            </div>

            <div className='footer--box footer--social flex'>
                
                <a href='#!' className="flex">
                    <FaDiscord />
                </a>
                <a href='#!' className="flex">
                    <FaInstagram />
                </a>
                <a href='#!' className="flex">
                    <FaTwitter />

                </a>
                <a href='#!' className="flex">
                    <FaLinkedin />
                </a>
            </div>
        </div>

        <div className='footer--copyright flex'>
            <p>Copyright ® 2021 Lorem All rights Rcerved</p>
        </div>
    </footer>
  )
}

export default Footer