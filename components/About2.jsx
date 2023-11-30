import React from 'react'
import style from '../app/style.module.css'
import '../app/globals.css'
import { Poppins } from 'next/font/google'
import { BsFacebook } from 'react-icons/bs';
import { BsHouse, BsEnvelope, BsCalendar, BsPhoneFill } from 'react-icons/bs';
import Image from 'next/image';
const Section1 = (props) => {
    return (
        <div className=' bg-transparent'>
            <div>
                <div className={style.marG_T_2 + ' container border-transparent section_F border-transparent marG_T position-relative z-3'}>
                    <div
                        className={style.Display_col + ' grid lg:grid-cols-2  flex border-transparent lg:flex-row md:flex-col sm:flex-col justify-center flex-xl-row flex-lg-column flex-md-column flex-sm-column flex-xs-column Display_col bottom_marP ' +  style.sectionF} style={{padding: '100px 0'}}>
                        <div
                            className={style.padd_S + ' flex !justify-center justify-self-center md:justify-center sm:justify-center justify-content-xs-center'}>
                            <Image src="/personal-2.jpg.webp" width={499} height={599} className='Image_size'   fluid alt="..." />
                        </div>
                        <div className={style.Div_font +' text-start'}>
                            <h6 className={style.font_Small}>HELLO EVERYBODY, I AM</h6>
                            <h3 className={style.font_S}>DONALD MCKINNEY</h3>
                            <h4 className={style.h4_Font} style={{fontSize: '16px'}}>JUNIOR UI/UX DEVELOPER</h4>
                            <p className={style.Para_F}>You will begin to realise why this exercise is called the Dickens Pattern
                                (with reference to the ghost showing Scrooge some different futures)</p>
                                <ul className="link_S m-0 p-0">
                                <li className={style.Icon_Wi}><a>
                                    <span className='flex justify-start'> <p className={style.img_CO}><BsCalendar className='m-0' /></p>
                                        31st December,
                                        1992</span>
                                </a>
                                </li>
                                <li className={style.Icon_Wi}>
                                    <a>
                                        <span className='flex justify-start'> <p className={style.img_CO}><BsPhoneFill className='m-0' /></p> 44 (012) 6954
                                            783</span></a>
                                </li>
                                <li className={style.Icon_Wi}><a>         <span className='flex justify-start'> <p className={style.img_CO}><BsEnvelope className='m-0' />
                                </p>                                        businessplan@donald</span></a>
                                </li>
                                <li className={style.Icon_Wi}><a>
                                   
                                    <span className='flex justify-start'> <p className={style.img_CO}><BsHouse className='m-0' /></p>Santa monica
                                        bullevard</span> </a>
                                </li>
                            </ul>
                            <div className={style.Mar_T + ' flex'}>
                                  
                                <svg xmlns="http://www.w3.org/2000/svg" className='instagram' color='#e8e8e8' width="3em" height="3em" viewBox="0 0 24 24" {...props}><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z" width={35} height={40} style={{ width: '35px', height: '40px' }} fill="currentColor"></path></svg>
                                
    
    <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 1024 1024" {...props}><path fill="#e8e8e8" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM727.3 401.7c.3 4.7.3 9.6.3 14.4c0 146.8-111.8 315.9-316.1 315.9c-63 0-121.4-18.3-170.6-49.8c9 1 17.6 1.4 26.8 1.4c52 0 99.8-17.6 137.9-47.4c-48.8-1-89.8-33-103.8-77c17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35c25.1-4.7 49.1-14.1 70.5-26.7c-8.3 25.7-25.7 47.4-48.8 61.1c22.4-2.4 44-8.6 64-17.3c-15.1 22.2-34 41.9-55.7 57.6z" width={35} height={40} style={{ width: '35px', height: '40px' }}></path></svg>   
    <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24" {...props}><path fill="#e8e8e8" d="M18.336 18.339h-2.665v-4.177c0-.996-.02-2.278-1.39-2.278c-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387c2.7 0 3.2 1.778 3.2 4.092v4.714ZM7.004 8.575a1.546 1.546 0 0 1-1.548-1.549a1.548 1.548 0 1 1 1.547 1.549Zm1.336 9.764H5.667V9.75H8.34v8.589ZM19.67 3H4.33C3.594 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.339C20.4 21 21 20.42 21 19.703V4.297C21 3.581 20.4 3 19.666 3h.003Z"></path></svg>                           
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Section1
