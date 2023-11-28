import React from 'react'
import Image from 'next/image'
// import { } from 'react-icons/bs';
import { HiUserRemove,HiUser } from 'react-icons/hi';
import {faHeart, faUser,faStar} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../app/globals.css'
const page=()=>{
    return(
        <div class="col-lg-8  " style={{padding: '15px'}}>
        <div class="col-12">
            <div class=""><Image src="/feature-img1.jpg.webp" width={100} height={130} class="img-fluid" alt=""/></div>
        </div>
        <div class="grid lg:grid-cols-3 d-flex flex-lg-row flex-md-column flex-sm-column col_sm">
            <div class="col-md-4 text-end Text_S " style={{paddingTop:'30px',paddingLeft: '15px',paddingRight: '15px'}}>
                <p class="Blog_P m-0" style={{paddingBottom: '20px',lineHeight: '21px',color: '#222'}}>
                    Food, <span style={{color: '#766dff'}}>Technology</span>, Politics, Lifestyle </p>
                <ul class="p-0 " style={{listStyleType: 'none'}}>
                    <li class="Blog_P hober flex justify-end flex-inline" style={{paddingBottom: '12px',color: '#777'}}>
                        Mark wiens 
                           <svg class="w-6 h-4 text-gray-400 ps-1 leading-5 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 18">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"/>
  </svg>
                      </li>
                    <li class="Blog_P hober flex justify-end flex-inline" style={{paddingBottom: '12px',color: '#777'}}>12 Dec,
                        2017 
                        <svg class="w-6 h-5 leading-5 ps-3 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z"/>
  </svg>
  </li>
                    <li class="Blog_P hober flex justify-end flex-inline" style={{paddingBottom: '12px',color: '#777'}}>12M Views
                    <svg class="w-6 h-8 ps-2 leading-5 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
      <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
      <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z"/>
    </g>
  </svg> </li>
                    <li class="Blog_P ps-3 hober flex justify-end flex-inline" style={{paddingBottom: '12px',color: '#777'}}>06
                        Comments <svg class="w-6 h-8 leading-5 ps-2 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.5 6.5h.01m4.49 0h.01m4.49 0h.01M18 1H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
  </svg></li>
                </ul>
            </div>
            <div class="col-md-9 lg:col-span-2" style={{paddingTop:'26px',paddingLeft: '15px',paddingRight: '15px'}}>
                <div class="text_post text-start">
                    <h2 class="font_24 hober" style={{marginBottom: '8px',color: 'black'}}> Astronomy Binoculars A
                        Great Alternative</h2>
                    <p class="p-0"
                        style={{marginBottom: '16px',color: '#777',fontWeight: 'normal',fontSize: '16px'}}>
                        MCSE boot camps have its supporters and its detractors. Some people do not understand
                        why you should have to spend money on boot camp when you can get the MCSE study
                        materials yourself at a fraction.</p>
                    <p class="p-0"
                        style={{marginBottom: '16px',color: '#777',fontWeight: 'normal',fontSize: '16px'}}>
                        Boot camps have its supporters and its detractors. Some people do not understand why you
                        should have to spend money on boot camp when you can get the MCSE study materials
                        yourself at a fraction of the camp price. However, who has the willpower to actually sit
                        through a self-imposed MCSE training. who has the willpower to actually sit through a
                        self-imposed</p>
                    <p class="p-0"
                        style={{marginBottom: '16px',color: '#777',fontWeight: 'normal',fontSize: '16px'}}>
                        Boot camps have its supporters and its detractors. Some people do not understand why you
                        should have to spend money on boot camp when you can get the MCSE study materials
                        yourself at a fraction of the camp price. However, who has the willpower to actually sit
                        through a self-imposed MCSE training. who has the willpower to actually sit through a
                        self-imposed</p>
                </div>
            </div>
        </div>
        
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <p class="Para_Blog">MCSE boot camps have its supporters and its detractors. Some people do
                        not understand why you should have to spend money on boot camp when you can get the MCSE
                        study materials yourself at a fraction of the camp price. However, who has the willpower
                        to actually sit through a self-imposed MCSE training.</p>
                </div>
            </div>
        </div>
        
        <div class="">
            <div class="grid grid-cols-2 row align-items-center">
                <div class="col-lg-6 col-md-6 col-sm-6" style={{paddingLeft: '15px',paddingRight: '15px',marginBottom: '10px'}}>
                    <Image src="/post-img1.jpg.webp" width={100} height={130} class="img-fluid" alt="" />
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6" style={{paddingLeft: '15px',paddingRight: '15px',marginBottom: '10px'}}>
                    <Image src="/post-img2.jpg.webp" width={100} height={130} class="img-fluid" alt="" />
                </div>
            </div>
        </div>
        
        <div class="">
            <div class="row align-items-center">
                <div class="col-lg-12" style={{paddingLeft: '15px',paddingRight: '15px',paddingBottom: '15px'}}>
                    <p class="p-0"
                        style={{marginBottom: '16px',color: '#777',fontWeight: 'normal',fontSize: '16px'}}>
                        MCSE boot camps have its supporters and its detractors. Some people do not understand
                        why you should have to spend money on boot camp when you can get the MCSE study
                        materials yourself at a fraction of the camp price. However, who has the willpower.</p>
                    <p class="p-0"
                        style={{marginBottom: '16px',color: '#777',fontWeight: 'normal',fontSize: '16px'}}>
                        MCSE boot camps have its supporters and its detractors. Some people do not understand
                        why you should have to spend money on boot camp when you can get the MCSE study
                        materials yourself at a fraction of the camp price. However, who has the willpower.</p>
                </div>
            </div>
        </div>
        
        <div class="border_" style={{marginTop: '60px',paddingBottom: '30px'}}></div>
        
        <div class="container">
            <div class="flex justify-between items-center">
                <div
                    class="col-lg-6 col-md-6 col-sm-6 flex justify-start items-center Margin_B">
                    <div class="opicity">
                        <Image src="/prev.jpg.webp" width={100} height={130} style={{marginRight: '20px',width: '65px'}} alt="" />
                        <div class="overlay" style={{backgroundColor: 'rgba(0, 0, 0, .5)'}}>
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
  </svg>
                        </div>
                    </div>
                    <div class="">
                        <p class="Para_16 m-0 p-0" style={{color: '#777'}}>Prev Post</p>
                        <h4 class="s_18">Space The Final Frontier</h4>
                    </div>
                </div>
                <div class="text-end col-lg-6 col-md-6 col-sm-6 flex justify-end align-items-center">
                    <div class="" style={{marginRight: '20px'}}>
                        <p class="Para_16 m-0 p-0" style={{color: '#777'}}>Next Post </p>
                        <h4 class="s_18">Space The Final Frontier</h4>
                    </div>
                    <div class="opicity">
                        <Image src="/next.jpg.webp" width={100} height={130} style={{width: '65px'}} alt="" />
                        <div class="overlay"
                            style={{backgroundColor: 'rgba(0, 0, 0, .5)',marginRight: '20px;'}}>
                           <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="container">
            <div class="px-12 py-8"
                style={{border: '1px solid #eee',background: '#fafaff',marginTop: '50px'}}>
                <h4 class="s_18 text-center mb-12">05 Comments</h4>
                <div class="flex justify-between items-center mb-12">
                    <div class="flex flex-inline justify-between items-center">
                        <Image src="/c1.jpg.webp" width={100} height={130} className='mr-5 leading-15' alt="" />
                        <div class="">
                            <h6 class="h6_F p-0 m-0 SMALL12_"> Emilly Blunt</h6>
                            <p class="Para___16_C mb-3">December 4, 2017 at 3:12 pm </p>
                            <p class="Para_16  p-0 m-0 P_small"> Never say goodbye till the end comes!</p>
                        </div>
                    </div>
                        <div class="col text-end">
                            <a href="#" class="Btn_commit">Reply</a>
                        </div>
                </div>
                
                <div class="flex justify-between mb-12 ml-6">
                    <div class="flex justify-between">
                        <Image src="/c2.jpg.webp" width={100} height={130} className='mr-5 h-15' alt="" />
                        <div class="">
                            <h6 class="h6_F p-0 m-0 SMALL12_"> Emilly Blunt</h6>
                            <p class="Para___16_C mb-3">December 4, 2017 at 3:12 pm </p>
                            <p class="Para_16  p-0 m-0 P_small"> Never say goodbye till the end comes!</p>
                        </div>
                    </div>
                        <div class="col text-end">
                            <a href="#" class="Btn_commit">Reply</a>
                        </div>
                </div>
                
                <div class="flex justify-between mb-12 ml-6">
                    <div class="flex justify-between">
                        <Image src="/c3.jpg.webp" width={100} height={130} className='mr-5 h-15' alt=""/>
                        <div class="">
                            <h6 class="h6_F p-0 m-0 SMALL12_"> Emilly Blunt </h6>
                            <p class="Para___16_C mb-3">December 4, 2017 at 3:12 pm </p>
                            <p class="Para_16  p-0 m-0 P_small"> Never say goodbye till the end comes!</p>
                        </div>
                    </div>
                        <div class="col text-end">
                            <a href="#" class="Btn_commit">Reply</a>
                        </div>
                </div>
                
                <div class="flex justify-between mb-12">
                    <div class="flex justify-between">
                        <Image src="/c4.jpg.webp" width={100} height={130} className='mr-5 h-15' alt="" />
                        <div class="">
                            <h6 class="h6_F p-0 m-0 SMALL12_"> Emilly Blunt </h6>
                            <p class="Para___16_C mb-3">December 4, 2017 at 3:12 pm </p>
                            <p class="Para_16  p-0 m-0 P_small"> Never say goodbye till the end comes!</p>
                        </div>
                    </div>
                        <div class="col text-end">
                            <a href="#" class="Btn_commit">Reply</a>
                        </div>
                </div>
                
                <div class="flex justify-between mb-12">
                    <div class="flex justify-between">
                        <Image src="/c5.jpg.webp" width={100} height={130} className='mr-5 h-15'
                         alt="" />
                        <div class="">
                            <h6 class="h6_F p-0 m-0 SMALL12_"> Emilly Blunt </h6>
                            <p class="Para___16_C mb-3">December 4, 2017 at 3:12 pm </p>
                            <p class="Para_16  p-0 m-0 P_small"> Never say goodbye till the end comes!</p>
                        </div>
                    </div>
                        <div class="col text-end">
                            <a href="#" class="Btn_commit">Reply</a>
                        </div>
                </div>
                
            </div>
        </div>
         
        <div class="container">
            <div class="px-12 py-8"
                style={{border: '1px solid #eee',background: '#fafaff',marginTop: '50px'}}>
                <h4 class="s_18 text-center mb-12">Leave a Reply</h4>
                <div class="flex justify-between  items-center pt-2">
                        <div class="col-lg-6 input-container me-4" style={{marginBottom: '10px'}}>
                            <input class="input-field_2" type="text" placeholder="Enter Subject" name="email" />
                        </div>
                        <div class="col-lg-6 input-container ms-4" style={{marginBottom: '10px'}}>
                            <input class="input-field_2" type="text" placeholder="Enter Subject" name="email" />
                        </div>
                </div>
                <div class="col pt-2">
                    <div class="col-lg-6 input-container" style={{marginBottom: '10px'}}>
                        <input class="input-field_2" type="text" placeholder="Enter Subject" name="email" />
                    </div>
                </div>
                <div class="col-md-12 pt-2">
                    <div class="input-container">
                        <div class="w-100">
                            <textarea class="form-control w-100" id="exampleFormControlTextarea1" rows="1"
                                placeholder="Enter Message"></textarea>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 text-right flex justify-center
            "><button type="button" class="btn Contact_btn float-right">Send Message</button></div>
            </div>
        </div>
    </div>
    )
}
export default page