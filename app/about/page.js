import React from 'react'
import About1 from '../../components/About1'
import About2 from '../../components/About2'
import About3 from '../../components/Section2'
import About8 from '../../components/Section8'
import Navbar from '../../components/Navbar'
import Section9 from '../../components/Section9'
const page = () => {
  return (
    <div>
<Navbar/>
<About1 head='About'/>  
<About2/>  
<About3/>
<About8/>
<Section9/>
  </div>
  )
}

export default page