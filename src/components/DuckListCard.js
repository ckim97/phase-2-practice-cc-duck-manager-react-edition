function DuckListCard({duck, setFeaturedDuck}) {
  
  function renderDuck() {
    setFeaturedDuck(duck);
  }
  
  return (
    <img src={duck.img_url} alt={duck.name} onClick={renderDuck}/>
  )
}

export default DuckListCard
