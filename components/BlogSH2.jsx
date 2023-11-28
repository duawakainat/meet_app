import React from 'react'
import Image from 'next/image'
import '../app/globals.css'
const page = () => {
    return (
        <div class="container-fluid">
        <div class="section_F mx-auto">
            <div class="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1   flex items-center lg:flex-row md:flex-col sm:flex-col items-md-center py-20">
                <div class="col-lg-4 px-4">
                    <div class="contain-POST relative">
                        <Image src="/cat-post-3.jpg.webp" width={100} height={130} class="img-fluid img_20" alt=""/>
                        <div class="inner_text absolute">
                            <div class="text-center">
                                <h5 class="s_18_2 m-0 p-0 text-white relative">Social Life</h5>
                                <div class="border_line"></div>
                                <p class="Blog_P">Enjoy your social life together</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 px-4">
                    <div class="contain-POST relative">
                        <Image src="/cat-post-2.jpg.webp" width={100} height={130} class="img-fluid img_20" alt=""/>
                        <div class="inner_text absolute">
                            <div class="text-center">
                                <h5 class="s_18_2 m-0 p-0 text-white relative">POLITIC</h5>
                                <div class="border_line"></div>
                                <p class="Blog_P">Be a part of politics</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 px-4">
                    <div class="contain-POST relative">
                        <Image src="/cat-post-1.jpg.webp" width={100} height={130} class="img-fluid img_20" alt=""/>
                        <div class="inner_text absolute">
                            <div class="text-center">
                                <h5 class="s_18_2 m-0 p-0 text-amber-400 relative">Food</h5>
                                <div class="border_line"></div>
                                <p class="Blog_P">Let the food be finished</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )}
    export default page