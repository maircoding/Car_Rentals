import React, {useState} from "react";
import { CAR_DATA } from './CarData'
import Select from 'react-select'
import Datepicker from "react-tailwindcss-datepicker";

var cars = CAR_DATA.map(ele => {return {value:ele.name, label:ele.name, image:ele.img}})

const locations = [
    { value: 'Delhi', label: 'Volkswagen' },
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Kolkata', label: 'Kolkata' },
    { value: 'Bangalore', label: 'Bangalore' },
    { value: 'Chennai', label: 'Chennai' },
    { value: 'Lucknow', label: 'Lucknow' }
  ];

function CarBook() {
    const [date, setDate] = useState();
    const [car, setCar] = useState();
    const [pickupLocation, setpickupLocation] = useState();
    const [dropoffLocation, setdropoffLocation] = useState();
    const [data, setData] = useState( false )

    console.log(pickupLocation)

    const handleValueChange = (newValue) => {
        setDate(newValue);
    }

    const rendedFormArray = [
        <div className='flex flex-col'>
            <label className='mb-2 font-bold'>Select Your Car Type<span className='text-colour'>*</span></label>
            <Select value={car || {label:'Select Your Car Type'}} onChange={(car)=>setCar(car)} options={cars}></Select>
        </div>,
        <div className='flex flex-col'>
            <label className='mb-2 font-bold'>Pick-up<span className='text-colour'>*</span></label>
            <Select value={pickupLocation || {label:'Select pick up location'}} id={"pickup" } options={locations} onChange={(pickupLocation) => setpickupLocation(pickupLocation)}></Select>
        </div>,
        <div className='flex flex-col'>
            <label className='mb-2 font-bold'>Drop-off<span className='text-colour'>*</span></label>
            <Select value={dropoffLocation || {label:'Select drop off location'}} id={"dropoff" } options={locations} onChange={(dropoffLocation) => setdropoffLocation(dropoffLocation)}></Select>
        </div>
    ]

  return (
    <div id="book" className="relative">
        <div className={`bg-repeat bg-book-bg m-4 md:m-20 p-6 md:p-16 rounded-lg shadow-2xl bg-white `}>
            <h1 className='mb-4 font-bold text-2xl'>Book a Car</h1>
            <div className='md:grid md:grid-cols-3 md:gap-8 '>
                {rendedFormArray}
                <div>
                    <label className='mb-2 font-bold'>Pick-up / Drop Off<span className='text-colour'>*</span></label>
                    <div className="mt-2">
                        <Datepicker 
                            minDate={new Date(Date.now() - 86400000)}
                            placeholder={"My Placeholder"} 
                            primaryColor={"red"} 
                            value={date} 
                            onChange={handleValueChange} 
                            showShortcuts={true}
                        />
                    </div>
                </div>

                <div className={`{ ${(car && pickupLocation && dropoffLocation && date ) ? 
                    'cursor-pointer hover:shadow-2xl hover:shadow-colour bg-colour': 
                    'bg-slate-300 cursor-default'} mt-8 p-2 text-center text-white rounded-lg font-bold}`}
                    onClick={() => setData(true)}
                    >Book Ride</div>
            </div>
        </div>
        {data && <div className="absolute top-2 md:-top-10 z-100 h-[44rem] md:h-[28rem] w-full rounded-md mx-auto">
            <div id="notification" class="flex flex-col justify-between bg-white h-full shadow-2xl rounded-md mx-auto mx-2 md:mx-20 md:p-10">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <img src={car.image} alt="car" />
                    </div>
                    <div className="md:w-1/2 p-10">
                        <div className="flex justify-center font-bold text-xl mb-2">
                            Good Choice!
                        </div>
                        <div className='grid grid-cols-2 border-x border-slate-900 p-2'>
                            <span className='mx-auto text-center w-full border-r border-slate-900'>Model</span>
                            <span className='text-center'>{car.value}</span>
                        </div>
                        <div className='grid grid-cols-2 border-x border-slate-900 p-2'>
                            <span className='mx-auto text-center w-full border-r border-slate-900'>Pick Location</span>
                            <span className='text-center'>{pickupLocation.value}</span>
                        </div>
                        <div className='grid grid-cols-2 border-x border-slate-900 p-2'>
                            <span className='mx-auto text-center w-full border-r border-slate-900'>Drop Location</span>
                            <span className='text-center'>{dropoffLocation.value}</span>
                        </div>
                        <div className='grid grid-cols-2 border-x border-slate-900 p-2'>
                            <span className='mx-auto text-center w-full border-r border-slate-900'>From</span>
                            <span className='text-center'>{date.startDate}</span>
                        </div>
                        <div className='grid grid-cols-2 border-x border-slate-900 p-2'>
                            <span className='mx-auto text-center w-full border-r border-slate-900'>Till</span>
                            <span className='text-center'>{date.endDate}</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center md:justify-end'>
                    <button className="m-4 p-2 px-4 font-bold rounded shadow-lg bg-black text-white text-xl" onClick={() => setData(false)}>Cancel</button>
                    <button className="m-4 p-2 px-6 font-bold rounded shadow-lg bg-colour text-white text-xl" onClick={() => setData(false)}>Book</button>
                </div>
            </div>
        </div>}
    </div>
    )
}

export default CarBook
