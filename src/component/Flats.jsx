import React from 'react'
import Flats_child from './Flats_child'
import flats1 from './flats1.jpg'
function Flats() {
  var cards = [{
    img:flats1,
    title:"Flots",
    text:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    btn:"Book Me"  
  },
  {
    img:flats1,
    title:"Flats",
    text:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    btn:"Book Me"  
  },
  {
    img:flats1,
    title:"Flats",
    text:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    btn:"Book Me"  
  },
  {
    img:flats1,
    title:"Flats",
    text:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    btn:"Book Me"  
  },
  ]
  return (
    <div>
     
     <div id='banglow'> 
     {cards.map((item)=>{
      return(
        <Flats_child data={item} />
      )
     })}
     </div>


        
   </div>
  )
}

export default Flats