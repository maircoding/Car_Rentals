import React from 'react'
import mainCar from '../assets/mainCar.webp'

function MainContent() {
    return (
        <div>
            <div className='md:mx-20 flex flex-row justify-between relative' >
                <div className='m-8 w-96 mt-16'>
                    <h4 className='pb-6 font-bold text-center text-2xl md:text-left'>Plan your trip now</h4>
                    <h1 className='py-2 font-bold text-center text-5xl p-4 md:text-left md:text-6xl md:p-0'>Save <span className='text-colour'>big</span> with our car rental</h1>
                    <h4 className='py-2 text-slate-400 text-center my-10 md:text-left'>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</h4>
                    <div className='py-8 flex flex-col md:flex-row gap-4'>
                        <a href="#book"><div className='py-4 px-4 md:py-4 md:px-10 bg-colour hover:cursor-pointer text-center hover:text-colour hover:bg-white hover:border-b-4 border-colour text-white rounded'>Book Ride</div></a>
                        <a href="#Vehicle"><div className='py-4 px-4 md:py-4 md:px-10 bg-slate-900 hover:cursor-pointer text-center hover:text-black hover:bg-white hover:border-b-4 border-slate-900 text-white rounded'>Learn More {'>'}</div></a>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <img className='w-[700px] pt-20' src={mainCar} alt='car' />
                </div>
            </div>
        </div>
    )
}

export default MainContent
