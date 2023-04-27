import React from "react";
import { useState } from "react";

function Faq() {
    const [Select, setSelect] = useState('')

    const faqs = [
        {
            id: 1,
            que: '1. What is special about comparing rental car deals ?',
            ans: 'Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.'
        },
        {
            id: 2,
            que: '2. How do I find the car rental deals ?',
            ans: 'You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.'
        },
        {
            id: 3,
            que: '3. How do I find such low rental car prices ?',
            ans: 'Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.'
        }
    ]

    return (
        <div className="flex flex-col justify-center items-center h-screen">

            <div className="flex flex-col mx-48 justify-center items-center">
                <h4 className="text-bold text-2xl">FAQ</h4>
                <h1 className="text-bold my-2 text-5xl">Frequently Asked Questions</h1>
                <p className="text-center my-8 px-64 text-slate-500">
                    Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.
                </p>
            </div>

            <div className="flex w-1/2 rounded-lg shadow-lg">
                <div className="">
                    {
                        faqs.map(faq => {
                            return <div key={faq.id} className="">
                                <div  className={`flex justify-between py-4 px-8 ${Select === faq.id ? 'bg-red-600 text-white': ''}`} onClick={() => Select !== faq.id ? setSelect(faq.id) : setSelect('')}>
                                    <span>{faq.que}</span>
                                    {Select === faq.id ?<span> &#8964; </span>: <span>&gt;</span>}
                                </div>
                                <div className={`${Select === faq.id ? '' : 'hidden'} py-4 px-8`}>
                                    <span>{faq.ans}</span>
                                </div>
                            </div>
                        })
                    }

                </div>
            </div>
        </div>
    );
}

export default Faq;