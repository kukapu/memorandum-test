import { AppStoreIcon, FbIcon, GooglePlayIcon, InstagramIcon, MicrosoftStoreIcon, TwitterIcon } from '../helpers/Icons'
import './Footer.css'


export const Footer = () => {

  

  return (
    <footer className="footer">
      <div className='footer-maxwidth'>
        <div className='footer-terms'>
          <span>Home</span> | <span>Terms and Conditions</span> | <span>Privacy Policy</span> | <span>Collection Statement</span> | <span>Help</span> | <span>Manage Account</span>
        </div>
        <div className='footer-copyright'>
          Copyright C 2016 DEMO Streaming. All Right Reserved.
        </div>

        <div className='footer-icons'>
          <div className='footer-social'>
            <FbIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>
          <div className='footer-stores'>
            <AppStoreIcon />
            <GooglePlayIcon />
            <MicrosoftStoreIcon />  
          </div>
        </div>
      </div>
    </footer>
  )
}

