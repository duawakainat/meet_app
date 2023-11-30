'use client'
import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import style from '../app/style.module.css';
import '../app/globals.css';
import 'bootstrap/dist/css/bootstrap.css'
import { motion } from 'framer-motion';
const Section2 = (props) => {


    return (
        <div className={style.P_120 + ' ' + style.sectionF}>
            <div
                className={style.Display_col + ' grid lg:grid-cols-2'}>
                <div className="text-start w-100">
                    <div className="About_text">
                        <h4 className={style.H4_38}>ABOUT MYSELF</h4>
                        <p className={style.Para_F + style.max_W}>inappropriate behavior is often laughed off as “boys will be boys,” women
                            face higher conduct standards especially in the workplace. That’s why it’s crucial that, as
                            women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed. </p>
                        <div className="flex align-center grid lg:grid-cols-3 md:grid-cols-3">
                            <div className={style.pad_out + ' ps-0'}>
                                <div className={style.padd_inN}>
                                    <div className='Icon_bg bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>       
                                                                 {/* <svg xmlns="http://www.w3.org/2000/svg" className='' width="2em" height="2em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 21q-3.775 0-6.387-1.162T3 17V7q0-1.65 2.638-2.825T12 3q3.725 0 6.363 1.175T21 7v10q0 1.675-2.613 2.838T12 21Zm0-11.975q2.225 0 4.475-.638T19 7.025q-.275-.725-2.512-1.375T12 5q-2.275 0-4.462.638T5 7.025q.35.75 2.538 1.375T12 9.025ZM12 14q1.05 0 2.025-.1t1.863-.288q.887-.187 1.675-.462T19 12.525v-3q-.65.35-1.437.625t-1.675.463q-.888.187-1.863.287T12 11q-1.05 0-2.05-.1t-1.888-.288q-.887-.187-1.662-.462T5 9.525v3q.625.35 1.4.625t1.663.463q.887.187 1.887.287T12 14Zm0 5q1.15 0 2.338-.175t2.187-.462q1-.288 1.675-.65t.8-.738v-2.45q-.65.35-1.437.625t-1.675.463q-.888.187-1.863.287T12 16q-1.05 0-2.05-.1t-1.888-.288q-.887-.187-1.662-.462T5 14.525V17q.125.375.788.725t1.662.638q1 .287 2.2.462T12 19Z" className='Icon_bg'></path></svg> */}
                                    </div>
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white"                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 4c0 1.657-3.582 3-8 3S1 5.657 1 4m16 0c0-1.657-3.582-3-8-3S1 2.343 1 4m16 0v6M1 4v6m0 0c0 1.657 3.582 3 8 3s8-1.343 8-3M1 10v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6"/>
  </svg>
                                     {/* <span className="lnr lnr-database Icon_bg"></span> */}
                                    <h4 className={style.font_24}>$2.5M</h4>
                                    <p className={style.Para_F + "p-0 m-0"}>Total Donation</p>
                                </div>
                            </div>
                            <div className={style.pad_out + ' '}>
                                <div className={style.padd_inN}>
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 17V2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M5 15V1m8 18v-4"/>
  </svg>
                                    {/* <span className="lnr lnr-book Icon_bg"></span> */}
                                      <h4 className={style.font_24}>1465</h4>
                                    <p className={style.Para_F + "p-0 m-0"}>Total Projects</p>
                                </div>
                            </div>
                            <div className={style.pad_out + " "}>
                                <div className={style.padd_inN}>
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3a3 3 0 1 1-1.614 5.53M15 12a4 4 0 0 1 4 4v1h-3.348M10 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM5 11h3a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"/>
  </svg>
                                     {/* <span className="lnr lnr-users Icon_bg"></span> */}
                                    <h4 className={style.font_24}>3965</h4>
                                    <p className={style.Para_F + "p-0 m-0"}>Total Volunteers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-100 md:w-100 md:p-0 sm:p-0">
                    <div className={style.padd_LR + " padd_LR w-100 text-start"}>
                        <h4 className={style.font_14}>After Effects 85%</h4>

                        <div className={style.progess_col}>
                            <div className={style.progress + ' p-0'} role="progressbar" style={{ height: 10 }}
                            >
                                <motion.div className={style.progress_bar + ' md:w-100'}
                                    animate={{
                                        width: '85%'
                                    }}
                                    transition={{
                                        duration: 2
                                    }} ></motion.div>
                            </div>
                        </div>
                        <h4 className={style.font_14}>Illustrator 70%</h4>
                        <div className={style.progess_col}>
                            <div className={style.progress + ' self-center'} role="progressbar" style={{ height: 10 }}>
                                <motion.div className={style.progress_bar}
                                    animate={{
                                        width: '70%'
                                    }}
                                    transition={{
                                        duration: 2
                                    }} ></motion.div>

                            </div>
                        </div>
                        <h4 className={style.font_14}>Photoshop 90%</h4>
                        <div className={style.progess_col}>
                            <div className={style.progress + ' p-0'} style={{ height: 10 }}
                            >
                                <motion.div className={style.progress_bar}
                                    animate={{
                                        width: '90%'
                                    }}
                                    transition={{
                                        duration: 2
                                    }} ></motion.div>
                            </div>
                        </div>
                        <h4 className={style.font_14}>Illustrator 70%</h4>
                        <div className={style.progess_col}>
                            <div className={style.progress + ' '}
                                style={{ height: 10 }}>
                                <motion.div className={style.progress_bar}
                                    animate={{
                                        width: '75%'
                                    }}
                                    transition={{
                                        duration: 2
                                    }} ></motion.div>
                            </div>
                        </div>
                        <h4 className={style.font_14}>Sublime 95%</h4>
                        <div className="progess_col m-0">
                            <div className={style.progress} style={{ height: 10 }}
                            >
                                <motion.div className={style.progress_bar}
                                    animate={{
                                        width: '75%'
                                    }}
                                    transition={{
                                        duration: 2
                                    }} ></motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}


export default Section2
