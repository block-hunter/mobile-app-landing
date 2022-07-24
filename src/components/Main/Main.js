import personImg from "../../assets/person.png"
import "./Main.scss"

const Main = () => {
  return (
    <main>
        <div className="main--slogan">
          <h1>
              Experienced 
              <span className='text-blue'> mobile and web </span>
              applications and website <br /> builders measuring.
          </h1>

          <p>
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. 
          </p>

          <div className='btn--group'>
              <button className='btn btn--blue'>Contact Us</button>
              <button className='btn'>View More</button>
          </div>
        </div>

        <div className='main--img'>
        <img src={personImg} alt='person' />
        {/* <img src='./assets/plant.png' alt='plant' />
        <img src='./assets/brick.png' alt='brick' /> */}
        </div>
    </main>
  )
}

export default Main