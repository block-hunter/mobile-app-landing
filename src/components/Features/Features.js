import "./Features.scss"
import seo from "../../assets/seo.png"
import website from "../../assets/website.png"
import vr from "../../assets/vr.png"
import mobile from "../../assets/mobile.png"

const featuresElements = [
  {
    id: 'website',
    img : website,
    title: 'Web Application',
    content: 'lorem ipsum amet dolor',
  },
  {
    id: 'seo',
    img : seo,
    title: 'SEO',
    content: 'lorem ipsum amet dolor',
  },
  {
    id:'vr',
    img : vr,
    title: 'AR/VR Solutions',
    content: 'lorem ipsum amet dolor',
  },
  {
    id: 'mobile',
    img : mobile,
    title: 'Mobile Applications',
    content: 'lorem ipsum amet dolor',
  },
] 

const Features = () => {
  return (
    <div className='features'>

      {
        featuresElements.map(featuresItem => (
          <div className='features--box'>
            <div className={`color-box ${featuresItem.id}`}>
              <img className='features--img' src={featuresItem.img} alt='' />
            </div>

            <div>
              <h1>{featuresItem.title}</h1>
              <p>{featuresItem.content}</p>
            </div> 
          </div>
        ))
      }
    </div>
  )
}

export default Features