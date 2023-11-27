'use client'
import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import style from '../app/style.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import { motion } from 'framer-motion';
const Section2 = () => {


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
                                    <BsFacebook /> {/* <span className="lnr lnr-database Icon_bg"></span> */}
                                    <h4 className={style.font_24}>$2.5M</h4>
                                    <p className={style.Para_F + "p-0 m-0"}>Total Donation</p>
                                </div>
                            </div>
                            <div className={style.pad_out + ' '}>
                                <div className={style.padd_inN}>
                                    {/* <span className="lnr lnr-book Icon_bg"></span> */}
                                    <BsFacebook />  <h4 className={style.font_24}>1465</h4>
                                    <p className={style.Para_F + "p-0 m-0"}>Total Projects</p>
                                </div>
                            </div>
                            <div className={style.pad_out + " "}>
                                <div className={style.padd_inN}>
                                    <BsFacebook /> {/* <span className="lnr lnr-users Icon_bg"></span> */}
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
