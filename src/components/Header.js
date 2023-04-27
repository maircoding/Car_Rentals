import React from 'react'

const headerArray = ['Home', 'About', 'Vehicle', 'Models', 'Testimonials', 'Our Team', 'Contact']


function Header() {
const renderHeaderArray = headerArray.map((ele, it) => {
    let temp = ''
    if (it === 0) {
        temp = 'text-red-600'
    }
    return (
        <div className={'font-semibold hover:cursor-pointer my-8 mx-4 decoration-double flex items-center '+temp} key={it}>{ele}</div>
    )
})
  return (
    <div className='mx-20 grid grid-cols-6'>
        <div className='m-8'>
            <img alt='img' src="https://car-rental-ten.vercel.app/static/media/logo.0ad964cb93ab30cc809d.png" />
        </div>
        <div className='flex flex-row justify-center col-span-4'>
            {renderHeaderArray}
        </div>
        <div className='hover:cursor-pointer grid grid-cols-2'>
            <div className='my-8 flex justify-center items-center'>
                Sign In
            </div>
            <div className='bg-red-400 rounded text-white my-10 flex justify-center items-center'>
                Sign Up
            </div>
        </div>
    </div>
  )
}

export default Header