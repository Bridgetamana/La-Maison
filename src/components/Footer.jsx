import React from 'react'

const Footer = () => {
  return (
    <div class="container px-6 py-12 mx-auto">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div class="sm:col-span-2">
                <h1 class="max-w-lg text-xl font-semibold text-gray-800 xl:text-2xl">Subscribe our newsletter to get update.</h1>

                <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                    <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />
                    <button class="w-full px-6 py-2.5 font-medium text-white md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-md hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                        Subscribe
                    </button>
                </div>
            </div>

            <div>
                <p class="font-semibold text-gray-800">Quick Link</p>

                <div class="flex flex-col items-start mt-5 space-y-2">
                    <a href="#" class="text-gray-600 hover:underline hover:text-blue-500">Home</a>
                    <a href="#" class="text-gray-600 hover:underline hover:text-blue-500">About Us</a>
                    <a href="#" class="text-gray-600 hover:underline hover:text-blue-500">Properties</a>
                </div>
            </div>

            <div>
                <p class="font-semibold text-gray-800 dark:text-white">Contact</p>

                <div class="flex flex-col items-start mt-5 space-y-2">
                    <a href="#" class="text-gray-600 hover:underline hover:text-blue-500">Agents</a>
                    <a href="#" class="text-gray-600 hover:underline hover:text-blue-500">Contact us</a>
                </div>
            </div>
        </div>
        
        <hr class="my-6 border-gray-200 md:my-8 dark:border-gray-700" />
        
        <div class="flex items-center justify-between">
            <a href="#" className='text-black font-bold'>
                La Maison
            </a>
            
            <div class="flex -mx-2">
                <a href="#" class="mx-2 border-2 rounded-full p-1 text-gray-600 hover:text-blue-500" aria-label="Twitter">
                    <svg className='w-5 h-5 fill-current'
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24">
                        <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z">
                        </path>
                    </svg>
                </a>

                <a href="#" class="mx-2 border-2 rounded-full p-1 text-gray-600 hover:text-blue-500" aria-label="Linkedin">
                    
                <svg className='w-5 h-5 fill-current'
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 30 30">
                    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z">
                    </path>
                </svg>
                </a>

                <a href="#" class="mx-2 border-2 rounded-full p-1 text-gray-600 hover:text-blue-500" aria-label="Facebook">
                    <svg className='w-5 h-5 fill-current'
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 30 30">
                        <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z">
                        </path>
                    </svg>
                </a>

                <a href="#" class="mx-2 border-2 rounded-full p-1 text-gray-600 hover:text-blue-500" aria-label="Intsagram">
                    <svg className='w-5 h-5 fill-current'
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 30 30">
                        <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z">
                        </path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer