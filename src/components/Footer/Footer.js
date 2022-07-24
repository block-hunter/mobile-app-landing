import "./Footer.scss"

const Footer = () => {
  return (
    <footer>
        <div className='footer--main'>
        <div className='brand--desc'>
            <img className='logo' alt='logo' />
            <p>lorem ipsum amet dolor lorem ipsum amet dolor lorem ipsum</p>
            <span className='footer--mark'>@block-hunter 2022</span>
        </div>
        <div className='footer--nav'>
            <h3 className='thick'>About Us</h3>
            <div>
            <a href='#!'>Lorem</a>
            <a href='#!'>Lorem</a>
            <a href='#!'>Lorem</a>
            <a href='#!'>Lorem</a>
            </div>
        </div>

        <div className='footer--contact'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <p>+9603 2234 711</p>
        </div>

        <div className='footer--social'>
            <a href='#!'>
            facebook
            </a>
            <a href='#!'>
            instagram
            </a>
            <a href='#!'>
            twitter
            </a>
            <a href='#!'>
            linkedin
            </a>
        </div>
        </div>
        <div className='footer--copyright'>
        <p>Copyright ® 2021 Lorem All rights Rcerved</p>
        </div>
    </footer>
  )
}

export default Footer