import React from 'react'
import './style.css'
import { Routes,Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Services from './component/Services'
import Team from './component/Team'
import Contact from './component/Contact'
import Products from './component/Products'
import Banglow from './component/Banglow'
import Flats from './component/Flats'
import Plots from './component/Plots'
import Error from './component/Error'
function App() {
  
return (
<>
 <div className='App'>
  <Navbar/>
    <br />
    <br />

    
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/services' element={<Services/>}/>
<Route path='/products' element={<Products/>} >  
       <Route path='banglow' element={<Banglow/>}/>
       <Route path='flats' element={<Flats/>}/>
       <Route path='plots' element={<Plots/>}/>
</Route>
       <Route path='team' element={<Team/>}/>
       <Route path='contact' element={<Contact/>}/>
       <Route path='*' element={<Error/>}/>     
   </Routes>
    </div> 
    </>
  )
}

export default App