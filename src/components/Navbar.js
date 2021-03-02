import * as RBS from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCodepen } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './statics/navbar.css'
import { useState } from "react";

const Navbar = (props) => {

  // const [mobileView, setMobileView] = useState(true)
  // const [width, setWidth] = useState(990)
  // if (width > 990 && width != ) {
  //   setMobileView(true)
  // } else {
  //   setMobileView(false)
  // }


  return (
    <>
      <RBS.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <RBS.Navbar.Brand href="#home" id='name'>MBP</RBS.Navbar.Brand>
        <RBS.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <RBS.Navbar.Collapse id="responsive-navbar-nav">
          <RBS.Nav className="mr-auto">
            <RBS.Nav.Link href="#features">Projects</RBS.Nav.Link>
            {/* <RBS.Nav.Link href="#pricing">Pricing</RBS.Nav.Link> */}
          </RBS.Nav>
          <RBS.Nav>

            {window.innerWidth > 900 ?
              <RBS.Nav.Link href="https://www.linkedin.com/in/mbrock-podgurski/">
                <FontAwesomeIcon icon={faLinkedin} />
              </RBS.Nav.Link> :
              <RBS.Nav.Link href="https://www.linkedin.com/in/mbrock-podgurski/">
                <div className='nav-div'>
                  <FontAwesomeIcon icon={faLinkedin} />{"  "}
                  <span className="nav-text">LinkedIn</span>
                </div>
              </RBS.Nav.Link>
            }
            {window.innerWidth > 900 ?
              <RBS.Nav.Link href="https://github.com/mbpod10">
                <FontAwesomeIcon icon={faGithub} />
              </RBS.Nav.Link> :
              <RBS.Nav.Link href="https://github.com/mbpod10">
                <div className='nav-div'>
                  <FontAwesomeIcon icon={faGithub} />{"  "}
                  <span className="nav-text">Github</span>
                </div>
              </RBS.Nav.Link>
            }
            {window.innerWidth > 900 ?
              <RBS.Nav.Link href="http://copen.io">
                <FontAwesomeIcon icon={faCodepen} />
              </RBS.Nav.Link> :
              <RBS.Nav.Link href="http://copen.io">
                <div className='nav-div'>
                  <FontAwesomeIcon icon={faCodepen} />{"  "}
                  <span className="nav-text">Codepen</span>
                </div>
              </RBS.Nav.Link>
            }
            {window.innerWidth > 900 ?
              <RBS.Nav.Link eventKey={2} href="https://www.youtube.com/watch?v=JYjdbw7XD3U&feature=youtu.be">
                <FontAwesomeIcon icon={faYoutube} />
              </RBS.Nav.Link> :
              <RBS.Nav.Link href="https://www.youtube.com/watch?v=JYjdbw7XD3U&feature=youtu.be">
                <div className='nav-div'>
                  <FontAwesomeIcon icon={faYoutube} />{"  "}
                  <span className="nav-text">Youtube</span>
                </div>
              </RBS.Nav.Link>
            }
          </RBS.Nav>
        </RBS.Navbar.Collapse>
      </RBS.Navbar>

    </>
  )
}

export default Navbar