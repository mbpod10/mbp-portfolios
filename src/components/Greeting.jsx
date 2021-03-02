import './statics/greeting.css'
import * as RBS from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
const Greeting = () => {
  return (
    <>
      <div className='greeting-container'>
        <div className='greeting-div'>
          <h1 className='name'>Hello, I'm</h1>
          <h1 className='name'>Brock Podgurski</h1>
          <div className='greeting-para'>
            <p>I am a software developer with a background in the
          financial services industry as a portfolio manager.</p>
          </div>
        </div>
        <div className="image-div">
          <RBS.Container className='greeting-image-container'>
            <RBS.Row>
              <RBS.Col xs={6} md={4}>
                <RBS.Image src="https://i.imgur.com/fiZpwG8.png" roundedCircle />
              </RBS.Col>
            </RBS.Row>
          </RBS.Container>
        </div>
      </div>
      <div className='technology'>
        <FontAwesomeIcon icon={faPython} />
        <FontAwesomeIcon icon={faReact} />
        <FontAwesomeIcon icon={faJsSquare} />
        <FontAwesomeIcon icon={faHtml5} />
        <FontAwesomeIcon icon={faCss3} />
      </div>
    </>

  )
}

export default Greeting