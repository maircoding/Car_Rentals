import React, { useState } from 'react'
import { CAR_DATA } from './CarData'

function PickCar() {
  const [activeCar, setActiveCar] = useState(CAR_DATA[0])

  const renderCarName = CAR_DATA.map((car, it) => {
    let active = 'bg-slate-200'

    if (car.name === activeCar.name) {
      active = 'bg-colour text-white shadow-lg shadow-red-300'
    }
    return (
      <div key={it} className={'text-xl font-bold p-4 my-2 hover:cursor-pointer hover:text-white hover:bg-colour hover:shadow-lg hover:shadow-red-300 ' + active} onClick={() => setActiveCar(car)}>
        {car.name}
      </div>
    )
  })

  return (
    <div>
      <div className='mt-20 md:m-0 flex flex-col justify-center items-center'>
        <h2 className='text-2xl font-bold mb-2'>Vehicle Models</h2>
        <h1 className='text-5xl font-bold mb-8'>Our rental fleet</h1>
        <h4 className='text-l w-2/3 md:w-1/3 text-center'>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</h4>
      </div>
      <div className='md:grid md:grid-cols-3'>
        <div className='my-8 mx-6 md:mx-24'>
          {renderCarName}
        </div>
        <div className='mx-4 md:mx-0 mt-28'>
          <img src={activeCar.img} alt={activeCar.name} />
        </div>
        <div className='my-10 mx-6 md:mx-32'>
          <div className='bg-colour p-2 text-white text-xl text-center'><span className='font-bold text-3xl'>${activeCar.price}</span> / Per Day</div>
          <div className='grid grid-cols-2 border-x border-slate-900 p-2'>
            <span className='mx-auto text-center w-full border-r border-slate-900'>Model</span>
            <span className='text-center'>{activeCar.model}</span>
          </div>
          <div className='grid grid-cols-2 border-x border-slate-900 border-t p-2'>
            <span className='mx-auto text-center w-full border-r border-slate-900'>Mark</span>
            <span className="text-center">{activeCar.mark}</span>
          </div>
          <div className='grid grid-cols-2 border-x border-slate-900 border-t p-2'>
            <span className='mx-auto text-center w-full border-r border-slate-900'>Year</span>
            <span className="text-center">{activeCar.year}</span>
          </div>
          <div className='grid grid-cols-2 border-x border-slate-900 border-t p-2'>
            <span className='mx-auto text-center w-full border-r border-slate-900'>Doors</span>
            <span className="text-center">{activeCar.doors}</span>
          </div>
          <div className='grid grid-cols-2 border-x border-slate-900 border-t p-2'>
            <span className='mx-auto text-center w-full border-r border-slate-900'>AC</span>
            <span className="text-center">{activeCar.air}</span>
          </div>
          <div className='grid grid-cols-2 border-x border-slate-900 border-t p-2'>
            <span className='mx-auto text-center w-full border-r border-slate-900'>Transmission</span>
            <span className="text-center">{activeCar.transmission}</span>
          </div>
          <div className='grid grid-cols-2 border-x border-slate-900 border p-2'>
            <span className='mx-auto text-center w-full border-r border-slate-900'>Fuel</span>
            <span className="text-center">{activeCar.fuel}</span>
          </div>
          <div className='text-center text-white text-xl shadow-lg hover:shadow-red-300 hover:cursor-pointer font-bold p-4 bg-colour'>
            RESERVE NOW
          </div>
        </div>
      </div>
    </div>
  )
}

export default PickCar