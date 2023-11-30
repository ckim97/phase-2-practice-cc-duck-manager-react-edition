import React from 'react'
import DuckListCard from "./DuckListCard"

function DuckList({ducks, setFeaturedDuck}) {

  const renderDucks = ducks.map((duck) => <DuckListCard key={duck.id} duck={duck} setFeaturedDuck={setFeaturedDuck} />)

  return (

    <div className="duck-nav">
      {renderDucks}
    </div>

  )
}

export default DuckList
