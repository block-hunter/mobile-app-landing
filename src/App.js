import React from 'react'

const App = () => {
  return (
    <div>
      <header className='app--header'>
        <div>
          <img src='./assets/logo.png' alt='logo' />logo
        </div>
        <div>
          <nav>
            <a href='#!'>Home</a>
            <a href='#!' className='selected--nav'>About Us</a>
            <a href='#!'>Services</a>
            <a href='#!'>Blog</a>
          </nav>

          <div className='btn blue-bg'>
            <a href='#!'>Contact Us</a>
          </div>
        </div>
      </header>
      
      <div>
        <div>
          <h1>
            Experienced 
            <span className='text--blue'>mobile and web </span>
            applications and website builders measuring.
          </h1>

          <p>
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. 
          </p>

          <div className='btn--group'>
            <button className='btn btn--blue'>Contact Us</button>
            <button className='btn'>Contact Us</button>
          </div>
        </div>
        <div className='img'>
          <img src='./assets/person.png' alt='person' />
          <img src='./assets/plant.png' alt='plant' />
          <img src='./assets/brick.png' alt='brick' />
        </div>
      </div>


      <div className='features'>
        <div className='features--box'>
          <img className='features--img' src='./assets/web.png' alt='' />
          <div>
            <h1>web applications</h1>
            <p>lorem ipsum dolor amet</p>
          </div> 
        </div>
        <div className='features--box'>
          <img className='features--img' src='./assets/web.png' alt='' />
          <div>
            <h1>web applications</h1>
            <p>lorem ipsum dolor amet</p>
          </div> 
        </div>
        <div className='features--box'>
          <img className='features--img' src='./assets/web.png' alt='' />
          <div>
            <h1>web applications</h1>
            <p>lorem ipsum dolor amet</p>
          </div> 
        </div>
        <div className='features--box'>
          <img className='features--img' src='./assets/web.png' alt='' />
          <div>
            <h1>web applications</h1>
            <p>lorem ipsum dolor amet</p>
          </div> 
        </div>
      </div>
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
    </div>
  )
}

export default App