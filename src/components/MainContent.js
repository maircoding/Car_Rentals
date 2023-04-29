import React from 'react'

function MainContent() {
    return (
        <div>
            <div className='md:my-10 md:mx-20 flex flex-row relative' >
                <div className='m-8 w-96 mt-16'>
                    <h4 className='pb-6 font-bold text-center text-2xl md:text-left'>Plan your trip now</h4>
                    <h1 className='py-2 font-bold text-center text-5xl p-4 md:text-left md:text-6xl md:p-0'>Save <span className='text-red-500'>big</span> with our car rental</h1>
                    <h4 className='py-2 text-slate-400 text-center my-10 md:text-left'>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</h4>
                    <div className='py-8 flex flex-col md:flex-row gap-4'>
                        <div className='py-4 px-4 md:py-4 md:px-10 bg-red-400 hover:cursor-pointer text-center hover:text-red-400 hover:bg-white hover:border-b-4 border-red-500 text-white rounded'>Book Ride</div>
                        <div className='py-4 px-4 md:py-4 md:px-10 bg-slate-900 hover:cursor-pointer text-center hover:text-black hover:bg-white hover:border-b-4 border-slate-900 text-white rounded'>Learn More {'>'}</div>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <img src="https://car-rental-ten.vercel.app/static/media/main-car.9b30faa59387879fa060.png" alt='car' />
                </div>
            </div>
        </div>
    )
}

export default MainContent