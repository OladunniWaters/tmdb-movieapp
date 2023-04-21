import './Footer.scss'
import { BsTwitter } from 'react-icons/bs';
import { IoLogoWhatsapp} from 'react-icons/io';
import { FaGithub , FaLinkedinIn} from 'react-icons/fa';




function Footer() {

  return (
 <>  
   <div className="footer-basic">
          <footer className='container footer'>
          <p  data-aos="fade-up"  data-aos-duration="2000"   data-aos-delay="2000" data-aos-offset="200px" data-aos-ease = 'ease'  className="copyright">Designed & Developed by Me</p>
              <div  data-aos="fade-up"  data-aos-duration="2000"   data-aos-delay="2500" data-aos-offset="200px" data-aos-ease = 'ease' classNames="social">
                  <a href="https://github.com/OladunniWaters" target="_blank" rel="noreferrer"><FaGithub/></a>
                  <a href="https://twitter.com/OladunniCath?t=E_aahJv7o2kv2D8U6Kvf9Q&s=09" target="_blank" rel="noreferrer"><BsTwitter/></a>
                  <a href="https://www.linkedin.com/in/oladunni-waters-851b201b0" target="_blank" rel="noreferrer"><FaLinkedinIn  /></a>
                  <a href="https://wa.me/message/F6VY6KSDRRP4J1" target="_blank" rel="noreferrer"><IoLogoWhatsapp/></a>
              </div>
              
          </footer>
      </div>
  </>  
  )
}

export default Footer