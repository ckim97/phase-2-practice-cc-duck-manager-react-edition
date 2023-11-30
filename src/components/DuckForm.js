import React, {useState} from 'react'

function DuckForm({renderNewDuck}) {

  const [newName, setNewName] = useState("");
  const [newImage, setNewImage] = useState("");
  console.log(newName)
  console.log(newImage)
  
  function handleSubmit(e) {
    e.preventDefault()
    const newDuckItem = {
      name : newName,
      img_url : newImage,
      likes: 0
    }
    fetch("http://localhost:3000/ducks", {
      method: 'POST',
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(newDuckItem)
    })
      .then(r => r.json())
      .then((newDuckObject) => renderNewDuck(newDuckObject))


  }

  return (
    <form id="new-duck-form" onSubmit={handleSubmit}>
       <label htmlFor="duck-name-input">New Duck Name:</label>
       <input type="text" name="duck-name-input" value={newName} onChange={(e) => setNewName(e.target.value)}/>

       <label htmlFor="duck-image-input">New Duck Image URL:</label>
       <input type="text" name="duck-image-input" value={newImage} onChange={(e) => setNewImage(e.target.value)}/>

       <input type="submit" value="Create Duck" />
    </form>
  )
}

export default DuckForm
