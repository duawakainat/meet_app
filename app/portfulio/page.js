import style from '../style.module.css'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import About from '../../components/About1'
import About6 from '../../components/Section6'
import About9 from '../../components/Section9'


const page=()=>{
    return (
        <div>
<Navbar/>
<About head="Portfulio"/>
<About6/>
<About9/>
</div>
    )
}
export default page