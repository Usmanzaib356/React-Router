import React from 'react'
import Banglow_child from './Banglow_child'
import bngl1 from './bngl1.jpg'
function Banglow() {
  var cards = [{
    img:bngl1,
    title:"Banglow",
    text:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    btn:"Book Me"  
  },
  {
    img:bngl1,
    title:"Banglow",
    text:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    btn:"Book Me"  
  },
  {
    img:bngl1,
    title:"Banglow",
    text:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    btn:"Book Me"  
  },
  {
    img:bngl1,
    title:"Banglow",
    text:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    btn:"Book Me"  
  },
  ]
 
  return (
    <>
    <div id='banglow'> 
     {cards.map((item)=>{
      return(
        <Banglow_child data={item} />
      )
     })}
     </div>
   

    
    </>
  )
}

export default Banglow