import React from 'react'
import '.././globals.css'
import Blog1 from '../../components/BlogSH1'
import Blog2 from '../../components/BlogSH2'
import Blog3 from '../../components/BlogSH3'
import Blog4 from '../../components/BlogD2'
import Section9 from '../../components/Section9'
const page = () => {
    return (
        <div>


<Blog1/>
        <div className='mx-auto sectionF'>
<Blog2/>


        <div class=" px-3">
            <div class="grid lg:grid-cols-3">
                <div className='lg:col-span-2'>
<Blog3/>
</div>
       <div className='px-4'>
       <Blog4/>

       </div>
       </div></div>
       </div>
       <Section9/>
       
       </div>
    )}
    export default page