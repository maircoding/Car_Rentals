import React, { useState } from 'react'
import logo from "../assets/logo.png"

const headerArray = ['Home', 'About', 'Vehicle', 'Models', 'Testimonials', 'Contact']


function Header() {
    const [isVisible, setIsVisible] = useState(false)
    const renderHeaderArray = headerArray.map((ele, it) => {
        let temp = ''
        if (it === 0) {
            temp = 'text-colour'
        }
        return (
            <a href={`#${ele}`}>
                <div className={'font-semibold hover:cursor-pointer my-8 mx-4 decoration-double flex items-center ' + temp} key={it}>{ele}</div>
            </a>
        )
    })
    return (
        <div className='m-8 relative md:m-0 md:mx-20 md:grid md:grid-cols-6 md:static'>
            <div className='w-32 md:m-12 '>
                <img alt='img' src={logo} className="w-20 filter-hue-rotate"/>
            </div>
            <div className='absolute top-0 right-0 text-2xl p-2 md:hidden' onClick={() => setIsVisible(!isVisible)}>
                &#9776;
            </div>
            <div className={`${isVisible ? '' : 'hidden'} w-[50rem] absolute left-0 bg-white md:bg-inherit md:flex md:flex-row justify-center col-span-4 md:static z-10 md:w-100`}>
                {renderHeaderArray}
            </div>
            <div className={`hidden hover:cursor-pointer md:grid md:grid-cols-2`}>
                <div className='my-8 flex justify-center items-center'>
                    Sign In
                </div>
                <div className='py-1 bg-colour rounded text-white my-16 flex justify-center items-center'>
                    Sign Up
                </div>
            </div>
        </div>
    )
}

export default Header