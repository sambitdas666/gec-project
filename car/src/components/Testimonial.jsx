import React from 'react'
import { assets } from '../assets/assets'

const Testimonial = () => {
  const testimonials = [
    {
      name: "Emma Rose",
      location: "New York, USA", 
      image: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      testimonial: "Exceptionally great service. Highly recommended for anyone looking for a reliable and professional car rental experience."
    }, 
    {
      name: "John Kane",
      location: "Boston, USA", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", 
      testimonial: "I'm so glad I found this website. It made my car rental experience so much easier and enjoyable. Highly recommended!"
    }, 
    {
      name: "Olivia Smith",
      location: "Vancouver, Canada", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial: "I had a great experience renting a car from this website. The customer service was excellent and the rental process was hassle-free. Highly recommended!"
    }
  ];

  return (
    <div className='py-28 px-6 md:px-16 lg:px-24 xl:px-44'>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Discover the testimonials of our satisfied customers and see what they have to say about our services.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'> 
        {testimonials.map((testimonial, index) => ( 
          <div 
            key={index}
            className='bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500 hover:shadow-xl'
          >
            <div className='flex items-center gap-3'>
              <img 
                className='w-12 h-12 rounded-full object-cover' 
                src={testimonial.image} 
                alt={testimonial.name} 
              />
              <div>
                <p className='text-lg font-semibold text-gray-800'>{testimonial.name}</p> 
                <p className='text-gray-500 text-sm'>{testimonial.location}</p> 
              </div>
            </div>

            <div className='flex items-center mt-4 gap-1'>
              {Array(5).fill(0).map((_, starIndex) => (
                <img 
                  key={starIndex} 
                  src={assets.star_icon} 
                  alt="star icon" 
                  className="w-5 h-5" 
                />
              ))}
            </div>
            
            <p className='text-gray-600 mt-4 font-light leading-relaxed'> 
              "{testimonial.testimonial}"
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial