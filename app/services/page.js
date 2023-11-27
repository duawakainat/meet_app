import style from '../style.module.css'
import Image from 'next/image'
import Navbar from '../../components/Navbar'

import About from '../../components/About1'
import Section from '../../components/Section4'
import Section8 from '../../components/Section8'
import Section9 from '../../components/Section9'
const page=()=>{
    return(
        <div>
            <Navbar/>
        <About head="Services"/>
<Section/>
<Section/>
<Section8/>
<Section9/>
</div>
    )}
    export default page