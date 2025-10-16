import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500'>
      <div className='flex flex-wrap justify-between items-start gap-8 pb-6 border-borderColor border-b'>
        
        {/* Company Info */}
        <div className='max-w-80'>
          <img src={assets.logo} alt="logo" className='h-8 md:h-9' />
          <p className='mt-3'>
            Premium car rental service with a wide selection of luxury vehicles at affordable prices. 
          </p>
          <div className='flex items-center gap-3 mt-6'>
            <a href="#" className='hover:opacity-70 transition-opacity'>
              <img src={assets.facebook_logo} alt="Facebook" className='w-5 h-5'/>
            </a>
            <a href="#" className='hover:opacity-70 transition-opacity'>
              <img src={assets.twitter_logo} alt="Twitter" className='w-5 h-5'/>
            </a>
            <a href="#" className='hover:opacity-70 transition-opacity'>
              <img src={assets.instagram_logo} alt="Instagram" className='w-5 h-5'/>
            </a>
            <a href="#" className='hover:opacity-70 transition-opacity'>
              <img src={assets.gmail_logo} alt="Email" className='w-5 h-5'/>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className='text-base font-medium text-gray-800 uppercase'>Quick Links</h2>
          <ul className='mt-3 flex flex-col gap-1.5'>
            <li><a href="#" className='hover:text-primary transition-colors'>Home</a></li>
            <li><a href="#" className='hover:text-primary transition-colors'>Browse Cars</a></li>
            <li><a href="#" className='hover:text-primary transition-colors'>List Your Car</a></li>
            <li><a href="#" className='hover:text-primary transition-colors'>About Us</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className='text-base font-medium text-gray-800 uppercase'>Resources</h2>
          <ul className='mt-3 flex flex-col gap-1.5'>
            <li><a href="#" className='hover:text-primary transition-colors'>Help Center</a></li>
            <li><a href="#" className='hover:text-primary transition-colors'>Terms of Service</a></li>
            <li><a href="#" className='hover:text-primary transition-colors'>Privacy Policy</a></li>
            <li><a href="#" className='hover:text-primary transition-colors'>Insurance</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className='text-base font-medium text-gray-800 uppercase'>Contact</h2>
          <ul className='mt-3 flex flex-col gap-1.5'>
            <li>1234 Luxury Drive</li>
            <li>New York, NY 12345</li>
            <li>+91 12456-73890</li>
            <li><a href="mailto:customer@example.com" className='hover:text-primary transition-colors'>customer@example.com</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='flex flex-col md:flex-row gap-4 items-center justify-between py-5'>
        <p>© {new Date().getFullYear()} <a href="https://prebuiltui.com" className='hover:text-primary transition-colors'>PrebuiltUI</a>. All rights reserved.</p>
        <ul className='flex items-center gap-4'>
          <li><a href="#" className='hover:text-primary transition-colors'>Privacy</a></li>
          <li><span className='text-gray-300'>|</span></li>
          <li><a href="#" className='hover:text-primary transition-colors'>Terms</a></li>
          <li><span className='text-gray-300'>|</span></li>
          <li><a href="#" className='hover:text-primary transition-colors'>Cookies</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer