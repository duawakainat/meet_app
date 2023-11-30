'use client'
import React from 'react'
import 'flowbite';
import style from '../app/style.module.css'
import '../app/globals.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { Navbar } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { NavbarCollapse } from 'react-bootstrap';
import Image from 'next/image';
const Page = () => {
    const PathName= usePathname()
    let arr= ['/blog__h']
    console.log(arr);
    return (
        <div>
    {arr.includes(PathName)? 
    <div>
    <nav class="lg:bg-transparent md:bg-transparent sm:bg-black max-[600px]:bg-black  border-gray-200 dark:bg-gray-900">
    <div className={style.sectionF}>

<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
<a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
<Image src="/logo.png.webp" class="logoImag" width={60} height={23} alt="Flowbite Logo" />
</a>
<button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center sm:mt-7 sm:mb-6 max-[600px]:mt-7 max-[600px]:mb-6 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
<span class="sr-only">Open main menu</span>
<svg class="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
</svg>
</button>
<div class="hidden w-full md:block md:w-auto" id="navbar-default">
<ul class="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
<Link href='/' className='nav-link'>Home</Link>
        <Link href='about' className='nav-link !mt-0 !mr-11'>About</Link>
        <Link href='services' className='nav-link !mr-11'>Services</Link>    
        <button id="dropdownHoverButton1" data-dropdown-toggle="dropdownHover1" data-dropdown-trigger="hover" class="nav-link !mt-0 !mr-11" type="button">Page
</button>

<div id="dropdownHover1" class="z-10 hidden bg-white divide-y divide-gray-100 w-[200] dark:bg-gray-700" style={{boxShadow: '0px 3px 16px 0px rgba(0, 0, 0, 0.1)'}}>
    <ul class="text-xs !ml-0 !pl-0"  aria-labelledby="dropdownHoverButton1ss">
      <li className='border-b-1 border-[#ededed]'>
        <a href="Element" class="block text-black hover:bg-[#766dff] hover:bg-[#766dff] !hover:text-white hover:!text-white" style={{lineHeight: '45px',textDecorationLine: 'none', paddingLeft: '30px',paddingRight: '30px',width: '200px'}}>Element</a>
      </li>
      <li className=''>
        <a href="portfulio" class="block text-black hover:bg-[#766dff] hover:bg-[#766dff] !hover:text-white hover:!text-white" style={{lineHeight: '45px',textDecorationLine: 'none', paddingLeft: '30px',paddingRight: '30px',width: '200px'}}>Portfulio</a>
      </li>
    </ul>
</div>

<button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="nav-link !mt-0 !mr-11" type="button">Blog
</button>

<div id="dropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 w-[200] dark:bg-gray-700" style={{boxShadow: '0px 3px 16px 0px rgba(0, 0, 0, 0.1)'}}>
    <ul class="text-xs !ml-0 !pl-0"  aria-labelledby="dropdownHoverButton">
      <li className='border-b-1 border-[#ededed]'>
        <a href="blog__h" class="block text-black hover:bg-[#766dff] hover:bg-[#766dff] !hover:text-white hover:!text-white" style={{lineHeight: '45px',textDecorationLine: 'none', paddingLeft: '30px',paddingRight: '30px',width: '200px'}}>Blog</a>
      </li>
      <li className=''>
        <a href="blog" class="block text-black hover:bg-[#766dff] hover:bg-[#766dff] !hover:text-white hover:!text-white" style={{lineHeight: '45px',textDecorationLine: 'none', paddingLeft: '30px',paddingRight: '30px',width: '200px'}}>Blog Detail</a>
      </li>
    </ul>
</div>


            <Link href='contact' className='nav-link'>Contact</Link>
</ul>
</div>
</div>
</div >
</nav>


</div >
:
        <div className={style.bgcol + ' '}>
                <nav class="lg:bg-transparent md:bg-transparent sm:bg-black 
                max-[600px]:bg-black border-gray-200 dark:bg-gray-900">
                <div className={style.sectionF}>
  
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <Image src="/logo.png.webp" width={100} height={130} class="" alt="Flowbite Logo" />
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center sm:mt-7 sm:mb-6 max-[600px]:mt-7 max-[600px]:mb-6 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col md:flex-row !pl-0 !mb-0">
      <Link href='/' className='nav-link'>Home</Link>
                    <Link href='about' className='nav-link !mt-0 !mr-11'>About</Link>
                    <Link href='services' className='nav-link !mr-11'>Services</Link>    
 
<button id="dropdownHoverButton1" data-dropdown-toggle="dropdownHover1" data-dropdown-trigger="hover" class="nav-link !mt-0 !mr-11" type="button">Page
</button>

<div id="dropdownHover1" class="z-10 hidden bg-white divide-y divide-gray-100 w-[200] dark:bg-gray-700" style={{boxShadow: '0px 3px 16px 0px rgba(0, 0, 0, 0.1)'}}>
    <ul class="text-xs !ml-0 !pl-0"  aria-labelledby="dropdownHoverButton1ss">
      <li className='border-b-1 border-[#ededed]'>
        <a href="Element" class="block text-black hover:bg-[#766dff] hover:bg-[#766dff] !hover:text-white hover:!text-white" style={{lineHeight: '45px',textDecorationLine: 'none', paddingLeft: '30px',paddingRight: '30px',width: '200px'}}>Element</a>
      </li>
      <li className=''>
        <a href="portfulio" class="block text-black hover:bg-[#766dff] hover:bg-[#766dff] !hover:text-white hover:!text-white" style={{lineHeight: '45px',textDecorationLine: 'none', paddingLeft: '30px',paddingRight: '30px',width: '200px'}}>Portfulio</a>
      </li>
    </ul>
</div>

<button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="nav-link !mt-0 !mr-11" type="button">Blog
</button>

<div id="dropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 w-[200] dark:bg-gray-700" style={{boxShadow: '0px 3px 16px 0px rgba(0, 0, 0, 0.1)'}}>
    <ul class="text-xs !ml-0 !pl-0"  aria-labelledby="dropdownHoverButton">
      <li className='border-b-1 border-[#ededed]'>
        <a href="blog__h" class="block text-black hover:bg-[#766dff] hover:bg-[#766dff] !hover:text-white hover:!text-white" style={{lineHeight: '45px',textDecorationLine: 'none', paddingLeft: '30px',paddingRight: '30px',width: '200px'}}>Blog</a>
      </li>
      <li className=''>
        <a href="blog" class="block text-black hover:bg-[#766dff] hover:bg-[#766dff] !hover:text-white hover:!text-white" style={{lineHeight: '45px',textDecorationLine: 'none', paddingLeft: '30px',paddingRight: '30px',width: '200px'}}>Blog Detail</a>
      </li>
    </ul>
</div>

                        <Link href='contact' className='nav-link !mr-0'>Contact</Link>
      </ul>
    </div>
  </div>
            </div >
</nav>


        </div >}
        
        </div>
    )
}

export default Page
