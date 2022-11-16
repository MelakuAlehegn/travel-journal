import React from "react"
import Navabar from "./components/Navabar"
import Main from "./components/Main"
import data from "./data"


function App() {
const places = data.map(place => <Main key= {place.id} place = {place}/>)
  return (
    <div className="App">
      <Navabar />
      {places}
    </div>
  )
}

export default App
