import React from 'react'
import Image from 'next/image'
// import { } from 'react-icons/bs';
import '../../globals.css'
const page=()=>{
    return(
        <div class="col-lg-4 self-start"
        style={{border: '1px solid #eeeeee',backgroundColor: '#fafaff',padding: '30px'}}>
        <div class="">
            <div class="relative">
                <input type="email" class="btn_blog" id="" placeholder="Search Post"/>
                <div class="border_"></div>
                <button class="absolute btn_right"><svg class="w-6 h-4 text-white-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
  </svg></button>
            </div>
            <div class="text-center">
                <div className='flex items-center justify-center'>
                <img src="/author.png.webp" class="img-fluid roundecircle" alt=""/></div>
                <h4 class="s_18 mt-8 mb-1">Charlie Barber</h4>
                <p class="para_SF" style={{color: '#777'}}>Senior blog writer</p>
                <div class="py-8 px-4 flex items-center justify-center">
                <svg class="w-[18px] h-[14px] text-[#01060e] dark:text-[#01060e]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
  </svg>
  <svg class="w-[18px] h-[14px] ml-4  text-[#01060e] dark:text-[#01060e]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
  </svg>
  <svg class="w-[18px] h-[14px] ml-4 text-[#01060e] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
    <path d="M14.537 10.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.339.025-1.769-.794-3.3-.794s-2.009.769-3.275.82c-1.316.049-2.317-1.318-3.158-2.532C1.323 14.984.01 10.451 1.772 7.391a4.9 4.9 0 0 1 4.139-2.507c1.292-.025 2.511.869 3.3.869.789 0 2.271-1.075 3.828-.917A4.67 4.67 0 0 1 16.7 6.82a4.524 4.524 0 0 0-2.161 3.805M12.02 3.193A4.4 4.4 0 0 0 13.06 0a4.482 4.482 0 0 0-2.946 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z"/>
  </svg>
  <svg class="w-[18px] h-[14px] ml-4 text-[#01060e] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg></div>
                <p class="Para_16" style={{color: '#777'}}>Boot camps have its supporters andit
                    sdetractors. Some people do not understand why you should have to spend money on boot camp
                    when you can get. Boot camps have itssuppor ters andits detractors. </p>
                 <div class="border_"></div>
                <div class="">
                    <h3 class="Bg_with">Popular Posts</h3>
                   
                    <div class="flex justify-start text-start">
                        <div class="">
                            <img src="/post1.jpg.webp" alt=""/>
                        </div>
                        <div class="pl-5">
                            <h3 class="Blog_P hober mb-1 leading-5 font-bold"
                                style={{transition: 'all 0.3s linear',color: '#000',fontWeight: 'bold'}}>
                                Space The Final Frontier</h3>
                            <p class="filter_btan_2 pl-0 ms-0" style={{lineHeight: '21px',paddingLeft: '0px'}}>02 Hours ago</p>
                        </div>
                    </div>
                   
                    <div class="flex text-start mt-5">
                        <div class="">
                            <img src="/post2.jpg.webp" alt=""/>
                        </div>
                        <div class="ml-5">
                            <h3 class="Blog_P hober mb-1 leading-5"
                                style={{transition: 'all 0.3s linear',color: '#000',fontWeight: 'bold'}}>
                                The Amazing Hubble</h3>
                            <p class="filter_btan_2 p-0 m-0" style={{lineHeight: '21px'}}>02 Hours ago</p>
                        </div>
                    </div>
                    <div class="flex text-start mt-5">
                        <div class="">
                            <img src="/post3.jpg.webp" alt=""/>
                        </div>
                        <div class="pl-5">
                            <h3 class="Blog_P hober mb-1 leading-5"
                                style={{transition: 'all 0.3s linear',color: '#000',fontWeight: 'bold'}}>
                                Astronomy Or Astrology</h3>
                            <p class="filter_btan_2 p-0 m-0" style={{lineHeight: '21px'}}>02 Hours ago</p>
                        </div>
                    </div>
                   
                    <div class="flex text-start mt-5">
                        <div class="">
                            <img src="/post4.jpg.webp" alt=""/>
                        </div>
                        <div class="pl-5">
                            <h3 class="Blog_P hober mb-1 leading-5"
                                style={{transition: 'all 0.3s linear',color: '#000',fontWeight: 'bold'}}>
                                Asteroids telescope</h3>
                            <p class="filter_btan_2 p-0 m-0" style={{lineHeight: '21px'}}>02 Hours ago</p>
                        </div>
                    </div>
                   
                </div>
               
               
                 <div class="border_"></div>
               
                <div class=""><img src="/add.jpg.webp" class="img-fluid" alt=""/></div>
               
                <div class="border_"></div>
               
                <h3 class="Bg_with">Post Catgories</h3>
                <div class="m-0 Bor_dot hober pb-3">
                    <div class="flex justify-between">
                        <p class="font_Small hober p-0 m-0" style={{color: '#777'}}>Technology</p>
                        <p class="font_Small hober p-0 m-0" style={{color: '#777'}}>37</p>
                    </div>
                </div>
               
                <div class="m-0 Bor_dot hober pt-4 pb-3">
                    <div class="flex justify-between">
                        <p class="font_Small hober p-0 m-0" style={{color: '#777'}}>Adventure</p>
                        <p class="font_Small hober p-0 m-0" style={{color: '#777'}}>47</p>
                    </div>
                </div>
               
                <div class="m-0 Bor_dot hober pt-4 pb-3 pt-4 pb-3">
                    <div class="flex justify-between">
                        <p class="font_Small hober p-0 m-0" style={{color: '#777'}}>Fashion</p>
                        <p class="font_Small hober p-0 m-0" style={{color: '#777'}}>76</p>
                    </div>
                </div>
               
                <div class="m-0 Bor_dot hober pt-4 pb-3">
                    <div class="flex justify-between">
                        <p class="font_Small hober p-0 m-0" style={{color: '#777'}}>TArt</p>
                        <p class="font_Small hober p-0 m-0" style={{color: '#777'}}>54</p>
                    </div>
                </div>
               
                <div class="m-0 Bor_dot hober pt-4 pb-3">
                    <div class="flex justify-between">
                        <p class="font_Small hober p-0 m-0" style={{color: '#777'}}>Food</p>
                        <p class="font_Small hober p-0 m-0" style={{color: '#777'}}>87</p>
                    </div>
                </div>
               
                <div class="m-0 Bor_dot hober pt-4 pb-3">
                    <div class="flex justify-between">
                        <p class="font_Small hober p-0 m-0" style={{color: '#777'}}>Architecture</p>
                        <p class="font_Small hober p-0 m-0" style={{color: '#777'}}>27</p>
                    </div>
                </div> 
               
                 <div class="m-0 Bor_dot hober pt-4 pb-3">
                    <div class="flex justify-between">
                        <p class="font_Small hober p-0 m-0" style={{color: '#777'}}>Adventure</p>
                        <p class="font_Small hober p-0 m-0" style={{color: '#777'}}>77</p>
                    </div>
                </div>
                <div class="border_"></div>
                <h3 class="Bg_with">Newsletter</h3>
                <p class="Para_16 p-0 mb-4"  style={{color: '#777'}}>Here, I
                    focus on a range of items and features that we use in life without giving them a second
                    thought. </p> 
                
<form class="flex items-center mb-3">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
    </svg>
        </div>
        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required/>
    </div>
    <button type="submit" class="p-2.5 text-xs font-medium text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Subcribe
        <span class="sr-only">Search</span>
    </button>
</form>

                <p class="filter_btan mb-4"  style={{color: '#777'}}>You can unsubscribe at any time
                </p> 
                <div class="border_"></div>
                <h3 class="Bg_with">Tag Clouds</h3>
                <div class="text-start">
                    <button class="btn_cat leading-6" style={{marginRight: 4}}>Technology</button>
                    <button class="btn_cat leading-6" style={{marginRight: 4}}>Fashion</button>
                    <button class="btn_cat leading-6" style={{marginRight: 4}}>Architecture</button>
                    <button class="btn_cat leading-6" style={{marginRight: 4}}>Fashion</button>
                    <button class="btn_cat leading-6" style={{marginRight: 4}}> Food</button>
                    <button class="btn_cat leading-6" style={{marginRight: 4}}>Technologyy</button>
                    <button class="btn_cat leading-6" style={{marginRight: 4}}>Lifestyle</button>
                    <button class="btn_cat leading-6" style={{marginRight: 4}}>Art</button>
                    <button class="btn_cat leading-6" style={{marginRight: 4}}>Adventure</button>
                    <button class="btn_cat leading-6" style={{marginRight: 4}}> Lifestyle</button>
                    <button class="btn_cat leading-6" style={{marginRight: 4}}> Adventure</button>
                </div> 
            </div>
        </div>
        </div>
    )}
    export default page