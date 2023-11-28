import React from 'react'
import style from '../app/style.module.css'
import Image from 'next/image'
import '../app/globals.css'
const Section4=()=>{
    return(
        <div class={style.bg_difff + " container-fluid p-0 bg-difff"}>
        <div class={style.P_120 + " mx-auto " + style.sectionF}>
            <div class={style.main_title + " text-center"}>
                <h2 class={style.font_36}>OFFERINGS TO MY CLIENTS</h2>
                <p class={style.Para_16 + " p-0 m-0"}>If you are looking at blank cassettes on the web, you may be very confused at
                    the difference in price. You may see some for as low as $.17 each.</p>
            </div>
            <div class={style.sectionF + " grid lg:grid-cols-3 md:grid-cols-2 p-4  flex justify-center align-center mx-auto"}>
                <div class="col-lg-4 col-md-6 col-sm-12 w-100 padd_15">
                    <div class={style.div_card}>
                        <div class="mb-[35px]">
                            <Image src="/cityscape (1).png" width={64} height={64} alt="" class='icon_61'/>
                        </div>
                        <h4 class={style.Head_4}>ARCHITECTURE</h4>
                        <p class={style.Para_16 + " p-0 m-0"}>If you are looking at blank cassettes on the web, you may be very
                            confused at the difference in price. You may see some for as low as $17 each. </p>
                    </div>
                </div>
                <div class=" w-100 col-lg-4 col-md-6 col-sm-12 padd_15">
                    <div class={style.div_card}>
                        <div class="mb-[35px]">
                            <Image src="/skyline (1).png" width={64} height={64} alt="" class='icon_61'/>
                        </div>
                        <h4 class={style.Head_4}>INTERIOR DESIGN</h4>
                        <p class={style.Para_16 + " p-0 m-0"}>If you are looking at blank cassettes on the web, you may be very
                            confused at the difference in price. You may see some for as low as $17 each. </p>
                    </div>
                </div>
                <div class="w-100 col-lg-4 col-md-6 col-sm-12 padd_15">
                    <div class={style.div_card}>
                        <div class="mb-[35px]">
                            <Image src="/sketch (1).png" width={64} height={64} class='icon_61' alt=""/>
                        </div>
                        <h4 class={style.Head_4}>CONCEPT DESIGN</h4>
                        <p class={style.Para_16 + " p-0 m-0"}>If you are looking at blank cassettes on the web, you may be very
                            confused at the difference in price. You may see some for as low as $17 each. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )}
    export default Section4