import { useEffect, useState } from 'react'
import axios from "axios"
import './statics/projects.css'
import * as RBS from "react-bootstrap"
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardGroup"

let sheetAsJSON =
  "https://spreadsheets.google.com/feeds/list/17g2XPR7udYLKwDvOmYw0IfEqXHgZtaTuWMKwoBO0iSI/od6/public/values?alt=json"



const Projects = () => {

  const [projectArray, setProjectArray] = useState([])

  useEffect(() => {
    const APIcall = () => {
      axios.get(sheetAsJSON)
        .then((response => {
          setProjectArray(response.data.feed.entry)
        }))
        .catch((error) => {
          console.log(error)
        })
    }
    APIcall()
  }, [])

  const projectReturnArray = projectArray.map((element, index) => {
    return (
      <>
        <RBS.Card key={index}>
          <RBS.Card.Img variant="top" src={element.gsx$image.$t} alt={element.gsx$title.$t} />
          <RBS.Card.Body>
            <RBS.Card.Title>{element.gsx$title.$t}</RBS.Card.Title>
            <RBS.Card.Text>
              {element.gsx$description.$t}
            </RBS.Card.Text>
          </RBS.Card.Body>
          <RBS.Card.Footer>
            {/* <small className="text-muted">{element.gsx$url.$t}</small> */}
            <RBS.Button href={element.gsx$url.$t}>Visit</RBS.Button>
          </RBS.Card.Footer>
        </RBS.Card>

      </>
    )
  })

  return (
    <div className='container'>

      <RBS.CardColumns>
        {projectReturnArray}
      </RBS.CardColumns>
    </div>
  )

}

export default Projects


// const projectReturnArray = projectArray.map((element, index) => {
//   return (
//     <div key={index}>
//       <h1 > {element.gsx$title.$t} </h1>
//       {/* <p >{element.gsx$image.$t}</p> */}
//       <img src={element.gsx$image.$t} alt={element.gsx$title.$t} />
//       <p >{element.gsx$description.$t}</p>
//       <p >{element.gsx$url.$t}</p>
//     </div>
//   )
// })