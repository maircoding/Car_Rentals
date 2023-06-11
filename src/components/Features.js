import React from "react";
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"

function Features() {
    return (
        <div id="choose" className="m-4 mt-20 md:m-20">
            <div className="flex flex-col justify-center items-center">
                <h4 className="text-3xl font-bold m-8">Plan your trip now</h4>
                <h1 className="text-5xl text-center font-bold mb-8">Quick & easy car rental</h1>
            </div>
            <div className="md:grid md:grid-cols-3">
                <div className="mx-10 p-8 flex flex-col justify-center items-center">
                    <img src={icon1} alt='feature' />
                    <h1 className="mb-4 text-2xl font-bold">Select Car</h1>
                    <h4 className="text-center">
                        We offers a big range of vehicles for all your driving needs. We
                        have the perfect car to meet your needs
                    </h4>
                </div>
                <div className="mx-10 p-8 flex flex-col justify-center items-center">
                    <img src={icon2} alt='feature' />
                    <h1 className="mb-4 text-2xl font-bold">Contact Operator</h1>
                    <h4 className="text-center">
                        Our knowledgeable and friendly operators are always ready to help
                        with any questions or concerns
                    </h4>
                </div>
                <div className="mx-10 p-8 flex flex-col justify-center items-center">
                    <img src={icon3} alt='feature' />
                    <h1 className="mb-4 text-2xl font-bold">Let's Drive</h1>
                    <h4 className="text-center">
                        Whether you're hitting the open road, we've got you covered with our
                        wide range of cars
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default Features;
