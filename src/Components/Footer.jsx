import React from 'react'
import {assets} from '../assets/assets'
const Footer = () => {
  return (
    <>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>Forever is your ultimate destination for timeless, trendsetting fashion. At Forever, we believe in celebrating individuality and style, offering a diverse range of clothing designed to suit every season and personality.</p>
        </div>      
        <div>
            <p className='text-xm font-medium mb-5' >COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xm font-medium mb-5' >GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212-456-7899</li>
                <li>contact@foreveryou.com</li>
                <li>Instagram</li>
                <li>Twitter</li>
            </ul>
        </div>
    </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - All Right Reserved.</p>
        </div>
    </>
  )
}

export default Footer
