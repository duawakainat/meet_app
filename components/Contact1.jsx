import React from 'react';

const Map = () => {
  return (
    <div class="container">
    <div class="row align-items-center grid lg:grid-cols-3">
        <div class="col-lg-3">
            <ul class="link_S px-4">
                <li className='flex'>
            <svg class="w-7 h-7 pr-3  text-gray-800 dark:text-white" style={{size: '20px',color: '#766dff'}} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
  </svg>
                
              <div>  <a href="#" class="h6_F">California, United States</a>
                <p class="font_14"
            style={{color: '#777',marginBottom: '16px',fontWeight: 'normal',textDecorationLine: 'none'}}>
                    Santa monica bullevard</p></div></li>
                <li className='flex'> <svg class="w-7 h-7 pr-3 text-gray-800 dark:text-white" style={{size: '20px',color: '#766dff'}} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
  </svg>
  
                 <div>       <a
                        href="#" class="h6_F">00 (440) 9865 562</a>
                    <p class="font_14"
                style={{color: '#777',marginBottom: '16px',fontWeight: 'normal',textDecorationLine: 'none',}}>
                        Mon to Fri 9am to 6 pm</p></div>
                </li>
                <li className='flex'><svg class="w-7 h-7 pr-3 text-gray-800 dark:text-white" style={{size: '20px',color: '#766dff'}} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2"/>
  </svg>
                    
                       <div>  <a
                        href="#" class="h6_F">support@colorlib.com</a>
                    <p class="font_14"
                        style={{color: '#777',marginBottom: '16px',fontWeight: 'normal',textDecorationLine: 'none'}}>
                        Send us your query anytime! </p></div>
                </li>
            </ul>
        </div>
        <div class="col-lg-9 col-span-2">
            <div class="">
                <div class="row align-items-center grid lg:grid-cols-2">
                    <div class="col-md-6 px-4">
                        <div class="input-container" style={{marginBottom: '10px'}}>
                            <input class="input-field_2" type="text" placeholder="Enter Subject"
                                name="email"/>
                        </div>
                        <div class="input-container" style={{marginBottom: '10px'}}>
                            <input class="input-field_2" type="text" placeholder="Enter Name"
                                name="email"/>
                        </div>
                        <div class="input-container" style={{marginBottom: '10px'}}>
                            <input class="input-field_2" type="email" placeholder="Enter Email"
                                name="email"/>
                        </div>
                    </div>
                    <div class="col-md-6 px-4">
                        <div class="input-container">
                            <div class="w-full">
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"
                                    placeholder="Enter Message"></textarea>
                            </div>
                        </div>
                    <div class="col-md-12 text-right d-flex justify-content-end"><button type="button"
                            class="Contact_btn float-right">Send Message</button></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default Map;
