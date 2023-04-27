import React from 'react'

const formArray = ['   Select Your Car Type', '   Pick-up', '   Drop-of', '   Pick-up', '   Drop-of']
const rendedFormArray = formArray.map((ele, it) => {
    return (
        <div key={it} className='flex flex-col'>
            <label className='mb-2 text-bold'>{ele} <span className='text-red-500'>*</span></label>
            <input className='p-2 w-full rounded border border-slate-300 text-slate-500' type="dropdown" value="Select your type"/>
        </div>
    )
})

function CarBook() {
  return (
    <div>
        <div className={`bg-repeat bg-book-bg m-20 p-16 rounded-lg shadow-2xl bg-white `}>
            <h1 className='mb-4 text-bold text-2xl'>Book a Car</h1>
            <div className='grid grid-cols-3 gap-8 '>
                {rendedFormArray}
                {/* <div className='flex flex-col'>
                    <label>   Select Your Car Type *</label>
                    <input className='p-2 w-full rounded border border-slate-300' type="dropdown" value="Select your type"/>
                </div>
                <div>
                    <label>   Pick-up *</label>
                    <input className='p-2 w-full rounded border border-slate-300' type="dropdown" value="Select your type"/>
                </div>
                <div>
                    <label>   Drop-of *</label>
                    <input className='p-2 w-full rounded border border-slate-300' type="dropdown" value="Select your type"/>
                </div>
                <div>
                    <label>   Pick-up *</label>
                    <input className='p-2 w-full rounded border border-slate-300' type="dropdown" value="Select your type"/>
                </div>
                <div>                  
                    <label>   Drop-of *</label>
                    <input className='p-2 w-full rounded border border-slate-300' type="dropdown" value="Select your type"/>
                </div> */}
                <div className='bottom-0 my-4 mt-6 p-2 bg-red-400 text-center hover:shadow-2xl hover:shadow-red-400 text-white rounded'>Book Ride</div>
            </div>
        </div>
    </div>
  )
}

export default CarBook