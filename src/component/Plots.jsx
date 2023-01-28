import React from 'react'
import Plots_child from './Plots_child'
import plots from './plots.jpg'
function Plots() {
  var cards = [{
    img:plots,
    title:"Banglow",
    text:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    btn:"Book Me"  
  },
  {
    img:plots,
    title:"Flats",
    text:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    btn:"Book Me"  
  },
  {
    img:plots,
    title:"Flats",
    text:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    btn:"Book Me"  
  },
  {
    img:plots,
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
        <Plots_child data={item} />
      )
     })}
     </div> 
   </div>
  )
}

export default Plots