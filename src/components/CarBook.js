import React, {useState} from "react";
import { CAR_DATA } from './CarData'
import Select from 'react-select'
import Datepicker from "react-tailwindcss-datepicker";

var cars = CAR_DATA.map(ele => {return {value:ele.name, label:ele.name}})

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

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
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
    <div>
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
                
                <div className={`{ ${(car && pickupLocation && dropoffLocation && date ) ? 'cursor-pointer hover:shadow-2xl hover:shadow-colour bg-colour': 'bg-slate-300 cursor-default'} mt-8 p-2 text-center text-white rounded-lg font-bold}`}>Book Ride</div>
            </div>
        </div>
    </div>
  )
}

export default CarBook