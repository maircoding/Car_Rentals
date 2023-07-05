import React from "react";
import pfp1 from "../assets/people/pfp1.jpg"
import pfp2 from "../assets/people/pfp2.jpg"
import quote from "../assets/quote.svg"
import { useState } from "react";

function Testimonial() {
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseEnter() {
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  return (
    <div id="Testimonials" className="bg-gray-200 flex flex-col justify-center items-center h-screen">
      <div>
        <div className="flex flex-col md:mx-48 justify-center items-center">
          <h4 className="mb-10 font-bold text-2xl">Reviewed by People</h4>
          <h1 className="font-bold my-2 text-center md:text-left text-5xl">Client's Testimonials</h1>
          <p className="text-center my-8 px-4 md:px-64 text-slate-500">
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </div>
      </div>

      <div className="mx-auto w-full w-5/6 px-4 overflow-x-scroll scroll-snap-type-x mandatory scrollbar-hide">
        <div className={` ${isHovering ? 'is-hovering' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className={`flex flex-row scroll-snap-align-center animate-scroll`}>
            <div className="flex-none m-2 w-2/3 md:w-2/4 md:pb-4 rounded-lg">

              <div className="bg-white p-4 md:p-10 md:w-2/3 mx-auto rounded shadow-lg">
                <h1 className="h-2/3 font-semibold text-xl">
                  "We rented a car from this website and had an amazing experience!
                  The booking was easy and the rental rates were very affordable. "
                </h1>
                <div className="h-1/3 mt-4 flex items-center relative">
                  <img className="w-20 rounded-full " src={pfp1} alt='ppl' />
                  <div className="mx-4">
                    <h4 className="font-bold">Hari Puttar</h4>
                    <h5>Punjab</h5>
                  </div>
                  <span className="rotate-180 absolute right-2"><img className="hidden md:block h-24 w-24" src={quote} alt="quote" /></span>
                </div>
              </div>

            </div>
            <div className="flex-none m-2 w-2/3 md:w-2/4 md:pb-4 rounded-lg">

              <div className="bg-white p-4 md:p-10 md:w-2/3 mx-auto rounded shadow-lg">
                <h1 className="h-2/3 font-semibold text-xl">
                  "The car was in great condition and made our trip even better.
                  The booking was easy. Highly recommend for this car rental website!"
                </h1>
                <div className="h-1/3 mt-4 flex items-center relative">
                  <img className="w-20 rounded-full" src={pfp2} alt='ppl' />
                  <div className="mx-4">
                    <h4 className="font-bold">Roshan Weasily</h4>
                    <h5>Delhi</h5>
                  </div>
                  <span className="rotate-180 absolute right-2"><img className="hidden md:block h-24 w-24" src={quote} alt="quote" /></span>
                </div>
              </div>

            </div>
            <div className="flex-none m-2 w-2/3 md:w-2/4 md:pb-4 rounded-lg">

              <div className="bg-white p-4 md:p-10 md:w-2/3 mx-auto rounded shadow-lg">
                <h1 className="h-2/3 font-semibold text-xl">
                  "We rented a car from this website and had an amazing experience!
                  The booking was easy and the rental rates were very affordable. "
                </h1>
                <div className="h-1/3 mt-4 flex items-center relative">
                  <img className="w-20 rounded-full " src={pfp1} alt='ppl' />
                  <div className="mx-4">
                    <h4 className="font-bold">Hari Puttar</h4>
                    <h5>Punjab</h5>
                  </div>
                  <span className="rotate-180 absolute right-2"><img className="hidden md:block h-24 w-24" src={quote} alt="quote" /></span>
                </div>
              </div>

            </div>
            <div className="flex-none m-2 w-2/3 md:w-2/4 md:pb-4 rounded-lg">

              <div className="bg-white p-4 md:p-10 md:w-2/3 mx-auto rounded shadow-lg">
                <h1 className="h-2/3 font-semibold text-xl">
                  "The car was in great condition and made our trip even better.
                  The booking was easy. Highly recommend for this car rental website!"
                </h1>
                <div className="h-1/3 mt-4 flex items-center relative">
                  <img className="w-20 rounded-full" src={pfp2} alt='ppl' />
                  <div className="mx-4">
                    <h4 className="font-bold">Roshan Weasily</h4>
                    <h5>Delhi</h5>
                  </div>
                  <span className="rotate-180 absolute right-2"><img className="hidden md:block h-24 w-24" src={quote} alt="quote" /></span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
