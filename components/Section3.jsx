'use client'
import style from '../app/style.module.css'
import React, { useState } from 'react';
import '../app/globals.css'
const Section3=()=>{
    const [isButtonClicked, setButtonClicked] = useState(false);
    const [isButtonColor, setButtonColor] = useState(false);

    const handleButtonClick = () => {
      setButtonClicked(!isButtonClicked);
    };
    const buttonStyle1 = {
        backgroundColor: isButtonClicked ? '#fff' : '#ffffff1a',
        color: isButtonColor ? 'black' : 'white',
        marginRight: '14px',
        fontSize: '13px',
        lineHeight: '50px',
paddingLeft: '40px',
paddingRight: '40px',
      };
    
      const buttonStyle2 = {
        backgroundColor: isButtonClicked ? '#ffffff1a' : '#fff',
        color: isButtonColor ? 'white' : 'black',
        lineHeight: '50px',
        fontSize: '13px',
        paddingLeft: '40px',
        paddingRight: '40px',
      };
    return(
        <div className={style.P_120 + ' ' + style.bg_col}>
        <div className={style.section_F +  " mx-auto"}>
            <div className="">
                <div className={style.Mar_120 + " mx-auto text-start"}>
         
                    <div className="flex justify-center text-white">
                       
                        <button id="button1" onClick={handleButtonClick} style={buttonStyle2} type="button">My Experiences</button>
                        <button id="button2" onClick={handleButtonClick} style={buttonStyle1} type="button">My Education</button>
                    </div>
                </div>
                <div className="text-start mx-auto  px-0">
                    <div className="">
                        <ul className={style.lint_vert + " px-0 list-none " + style.width_460 }>
                            <li className={style.mar_BoT}>
                                <span className={style.list_S}></span>
                                <div className={style.Display_2 + " flex self-start "}>
                                    <div className="px-0">
                                        <p className={style.padd_100}>March 2017 to present </p>
                                    </div>
                                    <div className="">
                                        <h4 className={style.Mar_20}>colorlib</h4>
                                        <p className={style.P_heeb0}>Senior Web Developer <br/> Santa monica, Los angeles </p>
                                    </div>
                                </div>
                            </li>
                            <li className={style.mar_BoT}>
                                <span className={style.list_S}></span>
                                <div className={style.Display_2 + " flex self-end"}>
                                    <div className="px-0" >
                                        <p className={style.padd_100 + ' flex-wrap'}>March 2017 to present</p>
                                    </div>
                                    <div className="">
                                        <h4 className={style.Mar_20}>colorlib</h4>
                                        <p className={style.P_heeb0}>Senior Web Developer <br/>  Santa monica, Los angeles </p>
                                    </div>
                                </div>
                            </li>
                            <li className="">
                                <span className={style.list_S}></span>
                                <div className={style.Display_2 + " flex self-end"}>
                                    <div className="px-0">
                                        <p className={style.padd_100}>March 2017 to present</p>
                                    </div>
                                    <div className="">
                                        <h4 className={style.Mar_20}>colorlib</h4>
                                        <p className={style.P_heeb0}>Senior Web Developer <br/> Santa monica, Los angeles </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Section3