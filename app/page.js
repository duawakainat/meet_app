import Image from 'next/image';
import Navbar from '../components/Navbar'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Section6 from '../components/Section6'
import Section8 from '../components/Section8'
import Section9 from '../components/Section9'
export default function Home() {

  return (
    <div>
      <Navbar />
      <Section1 />
       <Section2 />
      <Section3/>
      <Section4/>
     <Section6/>
       <Section8/>
     <Section9/>
    </div>
  )
}
