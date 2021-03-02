import './statics/knowledge.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from "@fortawesome/free-solid-svg-icons"
import { faDesktop } from "@fortawesome/free-solid-svg-icons"
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons"

const Knowledge = () => {
  return (
    <>
      <h1 className="knowledge">KNOWLEDGE</h1>
      <div className="knowledge-div">

        <div className='segment'>
          <div className='title'>
            <FontAwesomeIcon icon={faDatabase} /> <span className="know-span">Full Stack Development</span>
          </div>
          <div>
            <p className="knowledge-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aperiam consequatur omnis ut sequi nesciunt sed iusto. Cumque exercitationem quas facilis doloribus nam possimus delectus quasi nisi, accusamus nesciunt quae.</p>
          </div>
        </div>

        <div className='segment'>
          <div className='title'>
            <FontAwesomeIcon icon={faDesktop} /> <span className="know-span">Full Stack Development</span>
          </div>
          <div>
            <p className="knowledge-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aperiam consequatur omnis ut sequi nesciunt sed iusto. Cumque exercitationem quas facilis doloribus nam possimus delectus quasi nisi, accusamus nesciunt quae.</p>
          </div>
        </div>

        <div className='segment'>
          <div className='title'>
            <FontAwesomeIcon icon={faMobileAlt} /> <span className="know-span">Full Stack Development</span>
          </div>
          <div>
            <p className="knowledge-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aperiam consequatur omnis ut sequi nesciunt sed iusto. Cumque exercitationem quas facilis doloribus nam possimus delectus quasi nisi, accusamus nesciunt quae.</p>
          </div>
        </div>

      </div>
      <div className="knowledge-div">

        <div className='segment'>
          <div className='title'>
            <FontAwesomeIcon icon={faDatabase} /> <span className="know-span">Full Stack Development</span>
          </div>
          <div>
            <p className="knowledge-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aperiam consequatur omnis ut sequi nesciunt sed iusto. Cumque exercitationem quas facilis doloribus nam possimus delectus quasi nisi, accusamus nesciunt quae.</p>
          </div>
        </div>

        <div className='segment'>
          <div className='title'>
            <FontAwesomeIcon icon={faDesktop} /> <span className="know-span">Full Stack Development</span>
          </div>
          <div>
            <p className="knowledge-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aperiam consequatur omnis ut sequi nesciunt sed iusto. Cumque exercitationem quas facilis doloribus nam possimus delectus quasi nisi, accusamus nesciunt quae.</p>
          </div>
        </div>

        <div className='segment'>
          <div className='title'>
            <FontAwesomeIcon icon={faMobileAlt} /> <span className="know-span">Full Stack Development</span>
          </div>
          <div>
            <p className="knowledge-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aperiam consequatur omnis ut sequi nesciunt sed iusto. Cumque exercitationem quas facilis doloribus nam possimus delectus quasi nisi, accusamus nesciunt quae.</p>
          </div>
        </div>

      </div>

    </>
  )
}

export default Knowledge