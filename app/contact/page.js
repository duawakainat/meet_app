import React from 'react'
import style from '../style.module.css'
import '../globals.css'
import { Poppins } from 'next/font/google'
import { BsFacebook } from 'react-icons/bs';
import { BsHouse, BsEnvelope, BsCalendar, BsPhoneFill } from 'react-icons/bs';
import Contact from '../../components/Contact1'
import About1 from '../../components/About1'
import Navbar from '../../components/Navbar'
import Section9 from '../../components/Section9'
const page = () => {
    return (
        <div>
            <Navbar/>
        <About1 head="Contact"/>
    <div className='sectionF mx-auto P_120'>
        <Contact/>
    </div>
    <Section9/>
    </div>
    )}
    export default page