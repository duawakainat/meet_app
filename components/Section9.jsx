import React from 'react'
import style from '../app/style.module.css'
import Image from 'next/image'
import '../app/globals.css'
import { BsFacebook, BsTwitter, BsDribbble, BsHeart } from 'react-icons/bs';
import {faStar , faHeart,faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Section9=()=>{
    return(
        <div class="container-fluid bg-black">
        <div class="sectionF P_120 mx-auto">
            <div class="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 items-center">
                <div class="col-span-2" style={{padding: '0 15px'}}>
                    <h3 class="Font_18">About Me</h3>
                    <p class="font_14" style={{color: '#777',marginBottom: '30px'}}>Do you want to be even more successful?
                        Learn to love learning and growth. The more effort you put into improving your skills,</p>
                    <p class="font_14 m-0 p-0" style={{color: '#777'}}>Copyright ©2023 All rights reserved | This template
                        is made with <BsHeart/>Colorlib
                    </p>
                </div>
                <div class="col-span-2 align-self-start self-start " style={{padding: '0 15px'}}>
                    <h3 class="Font_18 mt-0 pt-0">Newsletter</h3>
                    <p class="font_14" style={{color: '#777',marginBottom: '15px'}}>Stay updated with our latest trends</p>
                    <div class="input-container items-start">
                        <input class="input-field self-start" type="text" placeholder="Email" name="email"/><button
                            class="btn_change">
                                <svg class="w-6 h-6 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
                            </button>
                    </div>
                </div>
                <div class="self-start">
                    <h3 class="Font_18 mt-0 pt-0">Follow Me</h3>
                    <p class="font_14" style={{color: '#777',marginBottom: '15px'}}>Let us be social</p>
                    <div className='flex'>
                    <BsFacebook className='icon_14'/>
                    <BsTwitter className='icon_14'/>
                    <BsDribbble className='icon_14'/>
                    <BsDribbble className='icon_14'/>
                </div></div>
            </div>
        </div></div>
    )
}
export default Section9