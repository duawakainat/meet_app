import React from 'react'
import style from '../app/style.module.css'
import { Poppins } from 'next/font/google'
import { BsFacebook } from 'react-icons/bs';
import { BsHouse, BsEnvelope, BsCalendar, BsPhoneFill } from 'react-icons/bs';

const Section1 = () => {
    return (
        <div className={style.marg_B}>
            <div className={style.sectionF + ''}>
                <div className={style.marG_T + ' card section_F marG_T position-relative z-3'}>
                    <div
                        className={style.Display_col + ' flex lg:flex-row md:flex-col sm:flex-col justify-center flex-xl-row flex-lg-column flex-md-column flex-sm-column flex-xs-column Display_col bottom_marP'}>
                        <div
                            className={style.padd_S + ' d-flex justify-content-lg-center justify-content-md-center justify-content-sm-center justify-content-xs-center'}>
                            <img src="/personal.jpg.webp" className={style.img_size} fluid alt="..." />
                        </div>
                        <div className={style.Div_font + ' text-start'}>
                            <h6 className={style.font_Small}>HELLO EVERYBODY, I AM</h6>
                            <h3 className={style.font_S}>DONALD MCKINNEY</h3>
                            <h4 className={style.h4_Font}>JUNIOR UI/UX DEVELOPER</h4>
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
                                    <a href="" className="">
                                        <span className='flex justify-start'> <p className={style.img_CO}><BsPhoneFill className='m-0' /></p> 44 (012) 6954
                                            783</span></a>
                                </li>
                                <li className={style.Icon_Wi}><a href="" className="">         <span className='flex justify-start'> <p className={style.img_CO}><BsEnvelope className='m-0' />
                                </p>                                        businessplan@donald</span></a>
                                </li>
                                <li className={style.Icon_Wi}><a href="">
                                    {/* <i className="fa-solid fa-house m-0" className="img_CO"
                                style="size: 20px;  padding-right: 40px; color: #766dff;"></i>*/}
                                    <span className='flex justify-start'> <p className={style.img_CO}><BsHouse className='m-0' /></p>Santa monica
                                        bullevard</span> </a>
                                </li>
                            </ul>
                            <div className={style.Mar_T + ' flex'}>
                            <svg class="w-2 text-[#e8e8e8] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
  </svg>
  <svg class="w-5 text-[#e8e8e8] ml-4 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path fill="currentColor" d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"/>
  </svg>
  <svg class="w-5 text-[#e8e8e8] ml-4 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
    <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd"/>
    <path d="M3 5.012H0V15h3V5.012Z"/>
  </svg>
    
                                {/* <i className="fa-brands fa-square-facebook icon_Gray"
                                    style="font-size: 40px;margin-right: 7px;"></i><i
                                        className="fa-brands fa-square-twitter icon_Gray"
                                        style="font-size: 40px;margin-right: 7px;"></i><i
                                            className="fa-brands fa-linkedin icon_Gray" style="font-size: 40px;margin-right: 7px;"></i> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Section1
