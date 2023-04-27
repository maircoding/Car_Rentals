import React from 'react'

function MainContent() {
  return (
    <div>
        <div className='my-10 mx-20 flex flex-row relative' >
            <div className='m-8 w-96 mt-16'>
                <h4 className='text-bold text-2xl'>Plan your trip now</h4>
                <h1 className='text-bold text-6xl'>Save <span className='text-red-500'>big</span> with our car rental</h1>
                <h4 className='text-slate-400 my-10'>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</h4>
                <div className='flex flex-row'>
                    <div className='py-4 px-10 bg-red-400 hover:cursor-pointer hover:text-red-400 hover:bg-white hover:border-b-4 border-red-500 text-white mr-10 rounded'>Book Ride</div>
                    <div className='py-4 px-10 bg-slate-900 hover:cursor-pointer hover:text-black hover:bg-white hover:border-b-4 border-slate-900 text-white rounded'>Learn More {'>'}</div>
                </div>
            </div>
            <div>
                <img src="https://car-rental-ten.vercel.app/static/media/main-car.9b30faa59387879fa060.png" alt='car'/>
            </div>
        </div>
    </div>
  )
}

export default MainContent