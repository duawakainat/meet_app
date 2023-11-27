import React from 'react'
import Image from 'next/image'
import '../app/globals.css'
const page = () => {
    return (
<section class="bg-center bg_col_image bg-no-repeat bg-[url('/banner-2.jpg.webp')] bg-gray-700">
    <div class="px-6 mx-auto Max_700 flex items-center max-w-screen-md text-center">
        <div>
        <h1 class="mb-4 h2_SF text-white">DUDE YOU’RE GETTING
A TELESCOPE</h1>
        <p class="para_SF">There is a moment in the life of any aspiring astronomer that it is time to buy that first</p>
        <div class="">           
            <button href="#" class="p_45">
                Learn more
            </button>  </div>
        </div>
    </div>
</section>

    )}
    export default page