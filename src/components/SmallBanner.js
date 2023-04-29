import React from 'react'

function SmallBanner() {
  return (
    <div className='mt-20 p-10 flex flex-col justify-center items-center bg-black text-white '>
      <div className='text-5xl text-center font-bold mb-8 md:m-4'>
        Save big with our cheap car rental!
      </div>
      <div className='text-2xl text-center md:m-4'>
        Top Airports. Local Suppliers. <span className='text-red-400'>24/7</span> Support.
      </div>
    </div>
  )
}

export default SmallBanner