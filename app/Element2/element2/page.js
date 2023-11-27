import React from 'react'
import '../../globals.css'
function TypesExample() {
  return (
    <>  
    <div class="sectionF mx-auto border-bottom" style={{padding: '70px 15px'}}>
        <div className='' style={{marginTop: '15px'}}>
    <button type="button" class="text-xs text-gray-900 bg-[#f8f9fa] border border-white-300 focus:outline-none hover:bg-white-100 focus:ring-4 focus:ring-white-200 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-white-200 dark:text-white dark:border-gray-600 dark:hover:bg-white-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 genetic light">Default</button>
<button type="button" class="text-xs text-white bg-blue-700 primary focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800 genetic">Primery</button>
<button type="button" class="text-xs text-white bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800  dark:focus:ring-gray-700 dark:border-gray-700 genetic dark">Dark</button>
<button type="button" class="text-xs focus:outline-none text-white bg-green-700 hover:bg-white-800 focus:ring-4 focus:ring-green-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-white-700 dark:focus:ring-green-800 genetic success">Success</button>
<button type="button" class="text-xs focus:outline-none text-white bg-red-700 hover:bg-white-800 focus:ring-4 focus:ring-red-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-red-900 genetic danger">Danger</button>
<button type="button" class="text-xs focus:outline-none text-white bg-yellow-400 hover:bg-white-500 focus:ring-4 focus:ring-yellow-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 genetic warning">Warning</button>
<button type="button" class="text-xs text-gray-900 bg-[#f8f9fa] border border-white-300 focus:outline-none hover:bg-white-100 focus:ring-4 focus:ring-white-200 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-white-200 dark:text-white dark:border-gray-600 dark:hover:bg-white-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 genetic light">Link</button>

<button type="button" class="text-xs text-gray-900 bg-[#f8f9fa] border border-white-300 focus:outline-none hover:bg-white-100 focus:ring-4 focus:ring-white-200 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-white-200 dark:text-white dark:border-gray-600 dark:hover:bg-white-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 genetic light"><a href='#' className='text-blue-600 underline dark:text-indigo-500 decoration-indigo-500'>Default</a></button>
</div>
<div className='' style={{marginTop: '15px'}}>
<button type="button" class="text-xs text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 genetic"><a href='#' className='text-blue-600 underline dark:text-indigo-500 decoration-indigo-500'>Default</a></button>
<button type="button" class="text-xs text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 genetic">Primery</button>
<button type="button" class="text-xs text-gray-700 hover:text-white border border-gray-700 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 genetic">Dark</button>
<button type="button" class="text-xs text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 genetic">Success</button>
<button type="button" class="text-xs text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 genetic">Danger</button>
<button type="button" class="text-xs text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 rounded-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900 genetic">Warning</button>
<button type="button" class="text-xs text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 genetic">Link</button>
<button type="button" class="text-xs text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 genetic"><a href='#' className='text-blue-600 underline dark:text-indigo-500 decoration-indigo-500'>Default</a></button>

</div>
<div className='' style={{marginTop: '15px'}}>
    <button type="button" class="text-xs text-gray-900 bg-[#f8f9fa] border border-white-300 focus:outline-none hover:bg-white-100 focus:ring-4 focus:ring-white-200 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-white-200 dark:text-white dark:border-gray-600 dark:hover:bg-white-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 genetic light">Default</button>
<button type="button" style={{borderRadius: '3px'}} class="text-xs text-white bg-blue-700 primary focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800 genetic">Primery</button>
<button type="button" style={{borderRadius: '3px'}} class="text-xs text-white bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800  dark:focus:ring-gray-700 dark:border-gray-700 genetic dark">Dark</button>
<button type="button" style={{borderRadius: '3px'}} class="text-xs focus:outline-none text-white bg-green-700 hover:bg-white-800 focus:ring-4 focus:ring-green-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-white-700 dark:focus:ring-green-800 genetic success">Success</button>
<button type="button" style={{borderRadius: '3px'}} class="text-xs focus:outline-none text-white bg-red-700 hover:bg-white-800 focus:ring-4 focus:ring-red-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-red-900 genetic danger">Danger</button>
<button type="button" style={{borderRadius: '3px'}} class="text-xs focus:outline-none text-white bg-yellow-400 hover:bg-white-500 focus:ring-4 focus:ring-yellow-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 genetic warning">Warning</button>
<button type="button" style={{borderRadius: '3px'}} class="text-xs text-gray-900 bg-[#f8f9fa] border border-white-300 focus:outline-none hover:bg-white-100 focus:ring-4 focus:ring-white-200 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-white-200 dark:text-white dark:border-gray-600 dark:hover:bg-white-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 genetic light">Link</button>

<button type="button" style={{borderRadius: '3px'}} class="text-xs text-gray-900 bg-[#f8f9fa] border border-white-300 focus:outline-none hover:bg-white-100 focus:ring-4 focus:ring-white-200 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-white-200 dark:text-white dark:border-gray-600 dark:hover:bg-white-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 genetic light"><a href='#' className='text-blue-600 underline dark:text-indigo-500 decoration-indigo-500'>Default</a></button>
</div>
<div className='' style={{marginTop: '15px'}}>
<button type="button" style={{borderRadius: '3px'}} class="text-xs text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 genetic"><a href='#' className='text-blue-600 underline dark:text-indigo-500 decoration-indigo-500'>Default</a></button>
<button type="button" style={{borderRadius: '3px'}} class="text-xs text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 genetic">Primery</button>
<button type="button" style={{borderRadius: '3px'}} class="text-xs text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 genetic">Dark</button>
<button type="button" style={{borderRadius: '3px'}} class="text-xs text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 genetic">Success</button>
<button type="button" style={{borderRadius: '3px'}} class="text-xs text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 genetic">Danger</button>
<button type="button" style={{borderRadius: '3px'}} class="text-xs text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 rounded-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900 genetic">Warning</button>
<button type="button" style={{borderRadius: '3px'}} class="text-xs text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 genetic">Link</button>
<button type="button" style={{borderRadius: '3px'}} class="text-xs text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 genetic"><a href='#' className='text-blue-600 underline dark:text-indigo-500 decoration-indigo-500'>Default</a></button>

</div>
<div className='' style={{marginTop: '15px'}}>
    <button type="button" style={{borderRadius: '20px'}} class="text-xs text-gray-900 bg-[#f8f9fa] border border-white-300 focus:outline-none hover:bg-white-100 focus:ring-4 focus:ring-white-200 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-white-200 dark:text-white dark:border-gray-600 dark:hover:bg-white-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 genetic light">Default</button>
<button type="button" style={{borderRadius: '20px'}} class="text-xs text-white bg-blue-700 primary focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800 genetic">Primery</button>
<button type="button" style={{borderRadius: '20px'}} class="text-xs text-white bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800  dark:focus:ring-gray-700 dark:border-gray-700 genetic dark">Dark</button>
<button type="button" style={{borderRadius: '20px'}} class="text-xs focus:outline-none text-white bg-green-700 hover:bg-white-800 focus:ring-4 focus:ring-green-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-white-700 dark:focus:ring-green-800 genetic success">Success</button>
<button type="button" style={{borderRadius: '20px'}} class="text-xs focus:outline-none text-white bg-red-700 hover:bg-white-800 focus:ring-4 focus:ring-red-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-red-900 genetic danger">Danger</button>
<button type="button" style={{borderRadius: '20px'}} class="text-xs focus:outline-none text-white bg-yellow-400 hover:bg-white-500 focus:ring-4 focus:ring-yellow-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 genetic warning">Warning</button>
<button type="button" style={{borderRadius: '20px'}} class="text-xs text-gray-900 bg-[#f8f9fa] border border-white-300 focus:outline-none hover:bg-white-100 focus:ring-4 focus:ring-white-200 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-white-200 dark:text-white dark:border-gray-600 dark:hover:bg-white-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 genetic light">Link</button>

<button type="button" style={{borderRadius: '20px'}} class="text-xs text-gray-900 bg-[#f8f9fa] border border-white-300 focus:outline-none hover:bg-white-100 focus:ring-4 focus:ring-white-200 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-white-200 dark:text-white dark:border-gray-600 dark:hover:bg-white-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 genetic light"><a href='#' className='text-blue-600 underline dark:text-indigo-500 decoration-indigo-500'>Default</a></button>
</div>
<div className='' style={{marginTop: '15px'}}>
<button type="button" style={{borderRadius: '20px'}} class="text-xs text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 genetic"><a href='#' className='text-blue-600 underline dark:text-indigo-500 decoration-indigo-500'>Default</a></button>
<button type="button" style={{borderRadius: '20px'}} class="text-xs text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 genetic">Primery</button>
<button type="button" style={{borderRadius: '20px'}} class="text-xs text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 genetic">Dark</button>
<button type="button" style={{borderRadius: '20px'}} class="text-xs text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 genetic">Success</button>
<button type="button" style={{borderRadius: '20px'}} class="text-xs text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 genetic">Danger</button>
<button type="button" style={{borderRadius: '20px'}} class="text-xs text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 rounded-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900 genetic">Warning</button>
<button type="button" style={{borderRadius: '20px'}} class="text-xs text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 genetic">Link</button>
<button type="button" style={{borderRadius: '20px'}} class="text-xs text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 genetic"><a href='#' className='text-blue-600 underline dark:text-indigo-500 decoration-indigo-500'>Default</a></button>

</div>
<div className='' style={{marginTop: '15px'}}>
    <button type="button" class="inline-flex items-center text-xs text-gray-900 bg-[#f8f9fa] border border-white-300 focus:outline-none hover:bg-white-100 focus:ring-4 focus:ring-white-200 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-white-200 dark:text-white dark:border-gray-600 dark:hover:bg-white-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 genetic light">Default 
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg></button>
<button type="button" class="text-xs inline-flex items-center text-white bg-blue-700 primary focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800 genetic">Primery 
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg></button>
<button type="button" class="text-xs inline-flex items-center text-white bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800  dark:focus:ring-gray-700 dark:border-gray-700 genetic dark">Dark 
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg></button>
<button type="button" class="text-xs inline-flex items-center focus:outline-none text-white bg-green-700 hover:bg-white-800 focus:ring-4 focus:ring-green-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-white-700 dark:focus:ring-green-800 genetic success">Success 
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg></button>
<button type="button" class="text-xs inline-flex items-center focus:outline-none text-white bg-red-700 hover:bg-white-800 focus:ring-4 focus:ring-red-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-red-900 genetic danger">Danger 
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg></button>
<button type="button" class="text-xs inline-flex items-center focus:outline-none text-white bg-yellow-400 hover:bg-white-500 focus:ring-4 focus:ring-yellow-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 genetic warning">Warning 
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg></button>

</div>
<div className='' style={{marginTop: '15px'}}>
<button type="button" class="text-xs text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 inline-flex items-center dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 genetic"><a href='#' className='text-blue-600 underline dark:text-indigo-500 decoration-indigo-500'>Default</a> <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg></button>
<button type="button" class="text-xs text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:border-blue-500 inline-flex items-center dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 genetic">Primery <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg></button>

<button type="button" class="text-xs  text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg px-5 py-2.5 inline-flex items-center text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 genetic">Dark <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg></button>
<button type="button" class="text-xs text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none inline-flex items-center focus:ring-green-300 rounded-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 genetic">Success <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg></button>
<button type="button" class="text-xs text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg inline-flex items-center px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 genetic">Danger <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg></button>
<button type="button" class="text-xs text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 rounded-lg inline-flex items-center px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900 genetic">Warning
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg></button>
</div>
<div style={{marginTop: '15px'}}>
<button type="button" class="padd_lr text-xs inline-flex items-center focus:outline-none text-white bg-red-700 hover:bg-white-800 focus:ring-4 focus:ring-red-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-red-900 danger" style={{lineHeight: '50px'}}>
Extra large
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</button>
<button type="button" class="padd_lr text-xs inline-flex items-center focus:outline-none text-white bg-yellow-400 hover:bg-white-500 focus:ring-4 focus:ring-yellow-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 warning" style={{lineHeight: '45px'}}>
Large
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</button>
<button type="button" class="padd_lr text-xs inline-flex items-center focus:outline-none text-white bg-red-700 hover:bg-white-800 focus:ring-4 focus:ring-red-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-red-900 danger" style={{lineHeight: '40px'}}>
Base
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</button>
<button type="button" class="padd_lr text-xs inline-flex items-center focus:outline-none text-white bg-yellow-400 hover:bg-white-500 focus:ring-4 focus:ring-yellow-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 warning" style={{lineHeight: '30px'}}>
Small
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</button>
<button type="button" class="padd_lr text-xs inline-flex items-center focus:outline-none text-white bg-red-700 hover:bg-white-800 focus:ring-4 focus:ring-red-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-red-900 danger" style={{lineHeight: '25px'}}>
Extra small
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</button>

</div>

<div style={{marginTop: '15px'}}>
<button type="button" class="padd_lr text-xs text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg inline-flex items-center px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900" style={{lineHeight: '50px'}}>
Extra large
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</button>
<button type="button" class="padd_lr text-xs text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 rounded-lg inline-flex items-center px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900" style={{lineHeight: '45px'}}>
Large
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</button>
<button type="button" class="padd_lr text-xs text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg inline-flex items-center px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900" style={{lineHeight: '40px'}}>
Base
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</button>
<button type="button" class="padd_lr text-xs text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 rounded-lg inline-flex items-center px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900" style={{lineHeight: '30px'}}>
Small
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</button>
<button type="button" class="padd_lr text-xs text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg inline-flex items-center px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900" style={{lineHeight: '25px'}}>
Extra small
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</button>

</div>

</div>
    </>
  );
}
export default TypesExample;

