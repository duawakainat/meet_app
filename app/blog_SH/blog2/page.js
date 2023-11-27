import React from 'react'
import Image from 'next/image'
import '../../globals.css'
const page = () => {
    return (
        <div class="container-fluid">
        <div class="section_F mx-auto">
            <div class="flex items-center lg:flex-row md:flex-col sm:flex-col items-md-center py-20">
                <div class="col-lg-4 px-4">
                    <div class="contain-POST relative">
                        <img src="/cat-post-3.jpg.webp" class="img-fluid" alt=""/>
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
                        <img src="/cat-post-2.jpg.webp" class="img-fluid" alt=""/>
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
                        <img src="/cat-post-1.jpg.webp" class="img-fluid" alt=""/>
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