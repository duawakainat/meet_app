
'use client';
import '../app/globals.css'
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import Image from 'next/image';
function Component(props) {
  return (
   
 <div className='Box_shadow Hei_360'>   <h1 className='font_S'>{props.head}</h1>

<nav class="flex" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li class="inline-flex items-center">
      <a href="#" class="breadcrumb-item">
        Home
      </a>
    </li>
    <li>
      <div class="flex items-center">
        <svg class="rtl:rotate-120 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <a href="#" class="breadcrumb-item">About</a>
      </div>
    </li>
  </ol>
</nav>
</div>
  );
}
export default Component