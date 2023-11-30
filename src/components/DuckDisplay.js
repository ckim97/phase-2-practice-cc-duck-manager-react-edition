import React from 'react'

function DuckDisplay({featuredDuck, updateLikes}) {

  function handleIncrementLIkes() {
    console.log(featuredDuck.likes)
    const newLikes = featuredDuck.likes + 1
    updateLikes(newLikes, featuredDuck.id)

    fetch(`http://localhost:3000/ducks/${featuredDuck.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({likes: newLikes})
  })
  .then(resp => resp.json())
  .then(data => console.log(data))
}

return (
    <div className="duck-display">

      {/* show all the details for the featuredDuck state here */}

      <h2>{featuredDuck.name}</h2>

      <img src={featuredDuck.img_url} alt={featuredDuck.name} />

      <button onClick={handleIncrementLIkes}>{featuredDuck.likes} likes</button>

    </div>
  )
}

export default DuckDisplay