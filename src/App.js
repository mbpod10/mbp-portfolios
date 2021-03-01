import './App.css';
import { useEffect, useState } from 'react'
import axios from "axios"

let sheetAsJSON =
  "https://spreadsheets.google.com/feeds/list/17g2XPR7udYLKwDvOmYw0IfEqXHgZtaTuWMKwoBO0iSI/od6/public/values?alt=json";



function App() {

  const [projectArray, setProjectArray] = useState([])

  useEffect(() => {
    const APIcall = () => {
      axios.get(sheetAsJSON)
        .then((response => {
          // console.log(response.data.feed.entry)
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
      <div key={index}>
        <h1 > {element.gsx$title.$t} </h1>
        {/* <p >{element.gsx$image.$t}</p> */}
        <img src={element.gsx$image.$t} alt={element.gsx$title.$t} />
        <p >{element.gsx$description.$t}</p>
        <p >{element.gsx$url.$t}</p>

      </div>
    )
  })


  return (
    <div className="App">
      {projectReturnArray}
    </div>
  );
}

export default App;
