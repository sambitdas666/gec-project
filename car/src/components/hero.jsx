import React, { useState } from 'react';
import { assets, cityList } from '../assets/assets';

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState('');

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-14 bg-light text-center">

      <h1 className="text-4xl md:text-5xl font-semibold">
        Luxury Car Rental Service
      </h1>

      <form className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-[20rem] md:max-w-[50rem] bg-white shadow-[0_8px_20px_rgb(0,0,0,0.1)]">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:ml-8">
          <div className="flex flex-col items-start gap-2">
            <select
              required
              className="border border-gray-300 rounded-lg p-2 w-full"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
            >
              <option value="">Pickup Location</option>
              {cityList.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <p className="px-1 text-sm text-gray-500">
              {pickupLocation ? pickupLocation : 'Please select your pickup location'}
            </p>

          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="pickup-date"> Pick-up Date</label>
            <input type="date" id='pickup-date' min={new Date().toISOString().split('T')[0]} className='text-sm text-gray-500' required />
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="return-date"> Return Date</label>
            <input type="date" id='return-date' className='text-sm text-gray-500' required />
          </div>

        </div>
        
      </form>

      <img src={assets.main_car} alt="car" className="max-h-72 object-contain" />
    </div>
  );
};

export default Hero;
