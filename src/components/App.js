import React, { useState, useEffect } from 'react'
import DuckList from './DuckList'
import DuckDisplay from "./DuckDisplay"
import DuckForm from "./DuckForm"
import { render } from '@testing-library/react'

function App() {

  const [ducks, setDucks] = useState([])
  const [featuredDuck, setFeaturedDuck] = useState({})
  const [duckFormOpen, setDuckFormOpen] = useState(true)

  useEffect(() => {
    fetch("http://localhost:3000/ducks")
      .then(r => r.json())
      .then(ducks  => setDucks(ducks));
  }, [])

  function renderNewDuck(newDuckObject) {
    const newDucks = [...ducks, newDuckObject];
    setDucks(newDucks)
  }

  function updateLikes(updatedLikes, id) {
    console.log(updatedLikes)
    const UpdatedList = ducks.map((duck) => {
      if(duck.id === id){
        duck.likes = updatedLikes
        return duck
      } else return duck
    })
    setDucks(UpdatedList)
  }
  

  return (
    <div className="App">

      <h1>Duck Manager 2022 - React Edition</h1>

      <DuckList ducks={ducks} setFeaturedDuck={setFeaturedDuck} />

      <DuckDisplay featuredDuck={featuredDuck} updateLikes={updateLikes}/>

      <button onClick={() => setDuckFormOpen(!duckFormOpen)}>{duckFormOpen ? "Open Duck Form" : "Close Duck Form"}</button>

      {!duckFormOpen ? <DuckForm renderNewDuck={renderNewDuck}/> : null}
      

    </div>
  );
}

export default App;
