import React from 'react'
import '.././globals.css'
import Blog1 from '../../components/BlogD'
import Blog2 from '../../components/BlogD2'
import Blog3 from '../../components/About1'
import Navbar from '../../components/Navbar'
import Section9 from '../../components/Section9'
const page = () => {
    return (
        <div>
            <Navbar/>
            <Blog3 head="Blog Detail"/>
        <div class="mx-auto sectionF px-3 P_120">
            <div class="grid lg:grid-cols-3">
                <div className='lg:col-span-2'>
       <Blog1/></div>
       <div className='px-4'>
<Blog2/>
       </div>
       </div></div>
       <Section9 /></div>
    )}
    export default page