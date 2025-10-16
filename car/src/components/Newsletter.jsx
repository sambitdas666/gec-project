import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center text-center space-y-2 max-md:px-4 my-10 mb-40'>
      <h1 className='md:text-4xl text-2xl font-semibold'>Never Miss A Deal!!</h1>
      <p className='md:text-lg text-gray-500/70 pb-8'>
        Subscribe to get the latest offers, new arrivals, and exclusive discounts
      </p>

      <form className='flex items-center justify-between max-w-2xl w-full md:h-14 h-12'>
        <input 
          className='border border-gray-300 rounded-l-md h-full border-r-0 outline-none w-full px-4 text-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all'
          type='email'
          placeholder='Enter your email id'
          required
        />

        <button 
          type='submit' 
          className='md:px-12 px-8 h-full text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer rounded-r-md font-medium'
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default Newsletter