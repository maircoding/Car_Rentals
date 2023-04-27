import React from 'react'

function SmallBanner() {
  return (
    <div className='flex flex-col justify-center items-center bg-black text-white mt-20 p-10'>
        <div className='text-5xl text-bold m-4'>
            Save big with our cheap car rental!
        </div>
        <div className='text-2xl m-4'>
            Top Airports. Local Suppliers. <span className='text-red-400'>24/7</span> Support.
        </div>
    </div>
  )
}

export default SmallBanner