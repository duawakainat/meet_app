import React from 'react'
import style from '../style.module.css'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Element1 from '../../components/Element1'
import Element2 from '../../components/Element2'
import Element3 from '../../components/Element3'
import Element4 from '../../components/Element4'
import Element5 from '../../components/Element5'
import Element6 from '../../components/About1'
import Section9 from '../../components/Section9'
const page=()=>{
    return(
        <div>
            <Navbar/>
            <Element6 head="Element"/>
        <Element1/>
        <Element2/>
        <Element3/>
        <Element4/>
        <Element5/>
        <Section9/>
            </div>
    )}
    export default page