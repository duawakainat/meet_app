'use client'
import React from 'react'
import 'flowbite';
import style from '../app/style.module.css'
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
    <nav class="lg:bg-transparent md:bg-transparent sm:bg-black border-gray-200 dark:bg-gray-900">
    <div className={style.sectionF}>

<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
<a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
<Image src="/logo.png.webp" class="" alt="Flowbite Logo" />
</a>
<button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center sm:mt-7 sm:mb-6 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
<span class="sr-only">Open main menu</span>
<svg class="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
</svg>
</button>
<div class="hidden w-full md:block md:w-auto" id="navbar-default">
<ul class="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
<Link href='home' className='nav-link'>Home</Link>
        <Link href='about' className='nav-link !mt-0 !mr-11'>About</Link>
        <Link href='services' className='nav-link !mr-11'>Services</Link>    
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown1" class="text-white !ml-0 !mr-11 bg-transparent  inline-flex items-center" type="button">Page 

</button>

<div id="dropdown1" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
<ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
<li>
<a href="portfulio" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Poitfulio</a>
</li>
<li>
<a href="Element" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Element</a>
</li>
</ul>
</div>
<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white !ml-0 !mr-11 bg-transparent  inline-flex items-center" type="button">Blog 

</button>

<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
<ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
<li>
<a href="blog" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Blog</a>
</li>
<li>
<a href="blog__h" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Blog Detail</a>
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
        <div className={style.bgcol + ''}>
                <nav class="lg:bg-transparent md:bg-transparent sm:bg-black border-gray-200 dark:bg-gray-900">
                <div className={style.sectionF}>
  
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <Image src="/logo.png.webp" width={100} height={130} class="" alt="Flowbite Logo" />
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center sm:mt-7 sm:mb-6 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
      <Link href='home' className='nav-link'>Home</Link>
                    <Link href='about' className='nav-link !mt-0 !mr-11'>About</Link>
                    <Link href='services' className='nav-link !mr-11'>Services</Link>    
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown1" class="text-white !ml-0 !mr-11 bg-transparent  inline-flex items-center" type="button">Page 

</button>

<div id="dropdown1" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="portfulio" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Poitfulio</a>
      </li>
      <li>
        <a href="Element" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Element</a>
      </li>
    </ul>
</div>
<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white !ml-0 !mr-11 bg-transparent  inline-flex items-center" type="button">Blog 

</button>

<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="blog" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Blog</a>
      </li>
      <li>
        <a href="blog__h" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Blog Detail</a>
      </li>
    </ul>
</div>

                        <Link href='contact' className='nav-link'>Contact</Link>
      </ul>
    </div>
  </div>
            </div >
</nav>


        </div >}</div>
    )
}

export default Page
