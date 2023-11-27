
import React from 'react'
import '../app/globals.css'
import Image from 'next/image'
function page() {
  return (
    <div className='sectionF'>
        

<div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
    <div>
        <img class="max-w-full sm:w-full xs:w-full rounded-lg gallery_img" src="/image/g1.jpg.webp" alt=""/>
    </div>
    <div>
        <img class="max-w-full sm:w-full rounded-lg gallery_img" src="/image/g2.jpg.webp" alt=""/>
    </div>
    <div>
        <img class="max-w-full sm:w-full rounded-lg gallery_img" src="/image/g3.jpg.webp" alt=""/>
    </div>
    </div>

    

<div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        <div>
            <img class="max-w-full sm:w-full rounded-lg gallery_img" src="/g4.jpg.webp" alt="" />
        </div>
        <div>
            <img class="max-w-full sm:w-full rounded-lg gallery_img" src="/g5.jpg.webp" alt="" />
        </div>       
    </div>

    <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1">
    <div>
        <img class="max-w-full sm:w-full xs:w-full rounded-lg gallery_img" src="/image/g6.jpg.webp" alt=""/>
    </div>
    <div>
        <img class="max-w-full sm:w-full rounded-lg gallery_img" src="/image/g7.jpg.webp" alt=""/>
    </div>
    <div>
        <img class="max-w-full sm:w-full rounded-lg gallery_img" src="/image/g8.jpg.webp" alt=""/>
    </div>
    </div>



    <div class="container">
        <div class="section_F mx-auto">
            <div class="flex grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  p-0" style={{paddingTop: '15px',paddingBottom: '15px'}}>
                <div class="col-lg-4 col-sm-6" style={{paddingLeft: '15px',paddingRight: '15px'}}>
                    <h4 class="H3_F">Typography</h4>
                    <h1 class="HeadIng_W" style={{color: '#777',fontSize: '36px'}}>This is header 01</h1>
                    <h2 class="HeadIng_W" style={{color: '#777',fontSize: '30px'}}>This is header 02</h2>
                    <h3 class="HeadIng_W" style={{color: '#777',fontSize: '24px'}}>This is header 03</h3>
                    <h4 class="HeadIng_W" style={{color: '#777',fontSize: '18px'}}>This is header 04</h4>
                    <h5 class="HeadIng_W" style={{color: '#777',fontSize: '16px'}}>This is header 01</h5>
                    <h6 class="HeadIng_W" style={{color: '#777',fontSize: '14px'}}>This is header 01</h6>
                </div>
                <div class="col-lg-4 col-sm-6" style={{paddingLeft: '15px',paddingRight: '15px'}}>
                    <h4 class="H3_F">Unordered List</h4>
                    <ul style={{listStyleType: 'none'}} class="unoder border-0 p-0">
                        <li class="list-group Para_F m-0 border-0">Fta Keys</li>
                        <li class="list-group Para_F m-0">For Women Only Your Computer Usage</li>
                        <li class="list-group Para_F m-0" style={{paddingLeft: '30px'}}>Facts Why Inkjet Printing Is Very
                            Appealing</li>
                        <ul class="unoder_mark unoder" style={{paddingLeft: '70px'}}>
                            <li class="list-group Para_F m-0"
                                style={{paddingLeft: '40px',textAlign: '-webkit-match-parent'}}> Addiction When Gambling
                                Becomes</li>
                            <ul class="unoder" style={{paddingLeft: '80px',textAlign: '-webkit-match-parent'}}>
                                <li class="list-group Para_F m-0">Protective Preventative Maintenance</li>
                            </ul>
                        </ul>
                        <li class="list-group Para_F m-0">Dealing With Technical Support 10 Useful Tips</li>
                        <li class="list-group Para_F m-0">Make Myspace Your Best Designed Space</li>
                        <li class="list-group Para_F m-0">Cleaning And Organizing Your Computer </li>
                    </ul>
                </div>
                <div class="col-lg-4 col-sm-6" style={{paddingLeft: '15px' , paddingRight: '15px'}}>
                    <h4 class="H3_F">Ordered List</h4>
                    <ol class="Order border-0 p-0"
                        style={{listStyleType: 'none' , padding: '0px' , fontWeight: '300px'}}>
                        <li class="group Para_F m-0 border-0 p-0">Fta Keys</li>
                        <li class="group Para_F m-0 p-0">For Women Only Your Computer Usage</li>
                        <li class="group Para_F m-0 p-0">Facts Why Inkjet Printing Is Very Appealing</li>
                        <ol class="Order" style={{listStyleType: 'none',paddingLeft: '40px'}}>
                            <li class="group Para_F m-0 p-0"> Addiction When Gambling Becomes</li>
                            <ol class="Order" style={{listStyleType: 'none',paddingLeft: '80px'}}>
                                <li class="group Para_F m-0 p-0">Protective Preventative Maintenance</li>
                            </ol>
                        </ol>
                        <li class="group Para_F m-0 p-0">Dealing With Technical Support 10 Usefol Tips</li>
                        <li class="group Para_F m-0 p-0">Make Myspace Your Best Designed Space</li>
         
                        <li class="group Para_F m-0 p-0">Cleaning And Organizing Your Computer </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>



    <div class="container">
        <div class="sectionF mx-auto">
            <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3">
   
                <div class="lg:col-span-2 md:col-span-3 sm:col-span-3" style={{paddingLeft: '15px',paddingRight: '15px'}}>
                    <h4 class="H3_F">Form Element</h4>
                    <div class="">
                        <input type="text" class="input_L" id="formGroupExampleInput" placeholder="Example Name" />
                    </div>
                    <div class="">
                        <input type="text" class="input_L" id="formGroupExampleInput" placeholder="Last Name" />
                    </div>
                    <div class="">
                        <input type="text" class="input_L" id="formGroupExampleInput" placeholder="Last Name" />
                    </div>
                    <div class="relative mb-6">
  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
    <svg class="w-3 h-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
    </svg>
  </div>
  <input type="text" id="input-group-1" class="bg-gray-50 text-gray-900 text-base leading-5 focus:ring-blue-500 block w-full ps-10  dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500" style={{marginTop: '10px'}} placeholder="Email"/>
</div>
                   
                    
                        
                    
                    <div class="d-flex col-lg-12 col-md-12 col-sm-12" style={{width: '100%',lineHeight: '40px'}}>
                        <div class="col-lg-1 col-md-1 col-sm-2">
                        </div>
                        <div class="col-lg-11 col-md-11 col-sm-10">
                            <select class="form-select input_L" aria-label="Default select example">
                                <option class="input_L" selected>City</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="d-flex col-lg-12 col-md-12 col-sm-12" style={{width: '100%',lineHeight: '40px'}}>
                        <div class="col-lg-1 col-md-1 col-sm-2"> 
                        </div>
                        <div class="col-lg-11 col-md-11 col-sm-10">
                            <select class="form-select input_L" aria-label="Default select example">
                                <option selected>Country</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-3">
                        <textarea class="form-control input_L" style={{height: '100px',fontSize: '16px'}}
                            id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                    </div>
                    <div class="">
                        <input type="text" class="input_L" id="formGroupExampleInput" placeholder="Primery Color" />
                    </div>
                    <div class="">
                        <input type="text" class="input_L" id="formGroupExampleInput" placeholder="Assecc Color" />
                    </div>
                    <div class="">
                        <input type="text" class="input_L" id="formGroupExampleInput" placeholder="Secondary Color" />
                    </div>
                    
                </div>
                <div class="col-lg-3 " style={{paddingLeft: '15px',paddingRight: '15px'}}>
                    <h4 class="H3_F">Switch</h4>
                    <div class="" style={{marginTop: '30px'}}>
                        <div class="flex justify-between form-check-reverse form-check form-switch"
                            style={{marginBottom: '10px'}}>
                            <label class="form-check-label Para_F p-0 !m-0" for="flexSwitchCheckDefault">01. Simple
                                Switch</label>
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        </div>
                        <div class="flex justify-between weidth form-check-reverse form-check form-switch"
                            style={{marginBottom: '10px'}}>
                            <label class="form-check-label Para_F p-0 !m-0">02. Primary Color Switch</label>
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"
                                checked />
                        </div>
                        <div class="flex justify-between weidth form-check-reverse form-check form-switch"
                            style={{marginBottom: '10px'}}>
                            <label class="form-check-label Para_F p-0 !m-0">03. Confirm Color Switch</label>
                            <input class="form-check-input Blue_col" type="checkbox" role="switch"
                                id="flexSwitchCheckChecked" checked />
                        </div>
                    </div>
                    
                    <div class="">
                        <h4 class="H3_F">Selectboxes</h4>
                        <select class="form-select Element_Se" style={{marginBottom: '30px'}}
                            aria-label="Default select example">
                            <option class="aption" style={{color: '#ffc720'}} selected>English</option>
                            <option class="aption" value="1">Spanish</option>
                            <option class="aption" value="3">Turkey</option>
                        </select>
                    </div>
                    
                    <div class="" style={{marginBottom: '30px'}}>
                        <h4 class="H3_F">Selectboxes</h4>
                        <div class="flex justify-between form-check-reverse form-check ">
                            <label class="form-check-label Para_F p-0 !m-0" for="defaultCheck1"> 01. Sample Checkbox
                            </label>
                            <input class="form-check-input Border_3 red_backG" type="checkbox" value=""
                                id="defaultCheck1" />
                        </div>
                        <div class="flex justify-between form-check-reverse form-check">
                            <label class="form-check-label Para_F p-0 !m-0" for="defaultCheck1"> 02. Primary Color
                                Checkbox </label>
                            <input class="form-check-input Border_3 red_backG" type="checkbox" value=""
                                id="defaultCheck1"/>
                        </div>
                        <div class="flex justify-between form-check-reverse form-check">
                            <label class="form-check-label Para_F p-0 !m-0" for="defaultCheck1"> 03. Confirm Color
                                Checkbox </label>
                            <input class="form-check-input Border_3 Black_Bg" type="checkbox" value=""
                                id="defaultCheck1"/>
                        </div>
                        <div class="flex justify-between form-check-reverse form-check">
                            <label class="form-check-label Para_F p-0 !m-0" for="defaultCheck1"> Disabled Checkbox active
                            </label>
                            <input class="form-check-input" type="checkbox" value="" style={{backgroundColor: '#f1f1f1'}}
                                id="flexCheckCheckedDisabled" checked disabled />
                        </div>
                        <div class="flex justify-between form-check-reverse form-check">
                            <label class="form-check-label  Para_F p-0 !m-0" for="defaultCheck2"> 05. Disabled Checkbox
                                active </label>
                            <input class="form-check-input Border_3" type="checkbox" value="" id="defaultCheck2"
                                disabled />
                        </div>
                    </div>
                    
                    <div class=" " style={{marginBottom: '30px'}}>
                        <h4 class="H3_F">Radios </h4>
                        <div class="flex justify-between form-check-reverse form-check">
                            <label class="form-check-label Para_F p-0 !m-0" for="flexRadioDefault1">01. Sample
                                radio</label>
                            <input class="form-check-input Border_3 red_backG" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault1"/>
                        </div>
                        <div class="flex justify-between form-check-reverse form-check">
                            <label class="form-check-label Para_F p-0 !m-0" for="flexRadioDefault2"> 02. Primary Color
                                radio </label>
                            <input class="form-check-input Border_3 red_backG" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault2"/>
                        </div>
                        <div class="flex justify-between form-check-reverse form-check">
                            <label class="form-check-label Para_F !p-0 !m-0" for="flexRadioDefault2"> 02. Primary Color
                                radio </label>
                            <input class="form-check-input Border_3 Black_Bg" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault2"/>
                        </div>
                        <div class="flex justify-between form-check-reverse form-check">
                            <label class="form-check-label Para_F !p-0 !m-0" for="flexRadioDisabled"> 04. Disabled radio
                            </label> <input class="form-check-input  Border_3" type="radio" name="flexRadioDisabled"
                                id="flexRadioDisabled" disabled/>
                        </div>
                        <div class="flex justify-between form-check-reverse form-check">
                            <label class="form-check-label Para_F !p-0 !m-0" for="flexRadioDisabled"> 05. Disabled radio
                                active </label><input class="form-check-input  Border_3" type="radio"
                                name="flexRadioDisabled" id="flexRadioDisabled" disabled />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

    </div>
  )}
  export default page