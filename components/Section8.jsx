'use client'
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import style from '../app/style.module.css'
import '../app/globals.css'
import { BsStarFill } from "react-icons/bs";
import { faCoffee,faStar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);



const Section8=()=>{
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplaySpeed: 2000,
      ltr: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 778,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
      <div class={style.bg_difff + " container-fluid p-0 bg-difff"}>
        <div class={style.P_120 + " mx-auto " + style.sectionF}>
            <div class={style.main_title + " text-center"}>
                <h2 class={style.font_36}>OFFERINGS TO MY CLIENTS</h2>
                <p class={style.Para_16 + " p-0 m-0"}>If you are looking at blank cassettes on the web, you may be very confused at
                    the difference in price. You may see some for as low as $.17 each.</p>
            </div>
        <Slider className={style.sectionF} {...settings}>
          <div>
          <div class="item_owl">
                        <div class="div_card_2 text-start">
                            <p class="Para_16 p-0" style={{marginBottom:'16px'}}><i>As conscious traveling Paup ers we
                                    must always be oncerned about our dear Mother Earth. If you think about it, you
                                    travel across her face</i>
                            </p>
                            <h4 class="s_18">Fanny Spencer</h4>
                            <div>
      <FontAwesomeIcon icon={faStar} className={style.IonCol}/>
      <FontAwesomeIcon icon={faStar} className={style.IonCol}/>
      <FontAwesomeIcon icon={faStar} className={style.IonCol}/>
      <FontAwesomeIcon icon={faStar} className={style.IonCol}/>
      <FontAwesomeIcon icon={faStar} className={style.IonCol}/>
                            </div>
                        </div>
                    </div></div>
<div>
          <div class="item_owl">
                        <div class="div_card_2 text-start">
                            <p class="Para_16 p-0" style={{marginBottom:'16px'}}><i>As conscious traveling Paup ers we
                                    must always be oncerned about our dear Mother Earth. If you think about it, you
                                    travel across her face</i>
                            </p>
                            <h4 class="s_18">Fanny Spencer</h4>
                            <div>
      <FontAwesomeIcon icon={faStar} className={style.IonCol}/>
      <FontAwesomeIcon icon={faStar} className={style.IonCol}/>
      <FontAwesomeIcon icon={faStar} className={style.IonCol}/>
      <FontAwesomeIcon icon={faStar} className={style.IonCol}/>
      <FontAwesomeIcon icon={faStar} className={style.IonCol}/>
                            </div>
                        </div>
                    </div></div>
          
          <div>
          <div class="item_owl">
                        <div class="div_card_2 text-start">
                            <p class="Para_16 p-0" style={{marginBottom:'16px'}}><i>As conscious traveling Paup ers we
                                    must always be oncerned about our dear Mother Earth. If you think about it, you
                                    travel across her face</i>
                            </p>
                            <h4 class="s_18">Fanny Spencer</h4>
                            <div>
      <FontAwesomeIcon icon={faStar} className={style.IonCol}/>
      <FontAwesomeIcon icon={faStar} className={style.IonCol}/>
      <FontAwesomeIcon icon={faStar} className={style.IonCol}/>
      <FontAwesomeIcon icon={faStar} className={style.IonCol}/>
      <FontAwesomeIcon icon={faStar} className={style.IonCol}/>
                            </div>
                        </div>
                    </div>
          </div>
          <div>
          <div class="item_owl">
                        <div class="div_card_2 text-start">
                            <p class="Para_16 p-0" style={{marginBottom:'16px'}}><i>As conscious traveling Paup ers we
                                    must always be oncerned about our dear Mother Earth. If you think about it, you
                                    travel across her face</i>
                            </p>
                            <h4 class="s_18">Fanny Spencer</h4>
                            <div>
      <FontAwesomeIcon icon={faStar} className={style.IonCol}/>
      <FontAwesomeIcon icon={faStar} className={style.IonCol}/>
      <FontAwesomeIcon icon={faStar} className={style.IonCol}/>
      <FontAwesomeIcon icon={faStar} className={style.IonCol}/>
      <FontAwesomeIcon icon={faStar} className={style.IonCol}/>
                            </div>
                        </div>
                    </div></div>
        </Slider>
        </div></div>
    )
}
export default Section8


