'use client'
import React from 'react'
import 'flowbite';
import style from '../app/style.module.css'
import Link from 'next/link'
import { Navbar } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { NavbarCollapse } from 'react-bootstrap';
const page = (props) => {
    return (
        <div className={style.bgcol + ''}>
            <div className={style.sectionF}>
        
                <Navbar fluid className='bg-transparent navbar !mt-0 !mb-0 !p-0'>
                    <Navbar.Brand as={Link} href="">
                        <img src="/logo.png.webp" className="mr-3" style={{width:'96px', height: '18px'}} alt="Flowbite React Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className='!p-0 !mt-0 !mb-0 !m-0s space:!md-x-0 !mb-0'>
                    <Link href='home' className='nav-link'>Home</Link>
                    <Link href='about' className='nav-link !mt-0 !mr-11'>About</Link>
                    <Link href='#' className='nav-link !mr-11'>Services</Link>    
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white !ml-0 !mr-11 bg-transparent  inline-flex items-center" type="button">Page 

</button>

<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Poitfulio</a>
      </li>
      <li>
        <a href="Element" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Element</a>
      </li>
    </ul>
</div>
<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white !ml-0 !mr-11 bg-transparent  inline-flex items-center" type="button">Blog 

</button>

<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="blog" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Blog</a>
      </li>
      <li>
        <a href="blog__h" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Blog Detail</a>
      </li>
    </ul>
</div>

                        <Link href='contact' className='nav-link'>Contact</Link>
                    </Navbar.Collapse>
                </Navbar>

            </div >

        </div >
    )
}

export default page
