import React from "react";
import main from "../assets/chooseus/main.png";
import icon1 from "../assets/chooseus/icon1.png";
import icon2 from "../assets/chooseus/icon2.png";
import icon3 from "../assets/chooseus/icon3.png";

function ChooseUs() {
  return (
    <div className={`my-20 bg-no-repeat bg-[url('./assets/bg.png')]`}>
      <div className="flex justify-center">
        <img src={main} alt="main-img" />
      </div>

      <div className="grid grid-cols-2 mx-20">
        <div className="mx-28 mt-8">
          <h4 className="text-2xl font-bold my-4">Why Choose Us</h4>
          <h1 className="text-5xl font-bold my-4">Best valued deals you will ever find</h1>
          <p className="text-slate-500">
            Discover the best
            deals you'll ever find with our unbeatable offers. We're dedicated to
            providing you with the best value for your money, so you can enjoy
            top-quality services and products without breaking the bank. Our deals
            are designed to give you the ultimate renting experience, so don't
            miss out on your chance to save big.
          </p>
          <div className="bg-red-400 text-white font-bold w-1/3 my-8 py-4 hover:cursor-pointer shadow-lg hover:shadow-red-300 text-center">
            Find Details {`>`}
          </div>
        </div>
        <div className="mx-28 flex flex-col">
          <div className="flex flex-row my-8">
            <div className="w-72">
              <img src={icon1} alt='n' />
            </div>
            <div className="">
              <h2 className="font-bold text-2xl">
                Cross Country Drive
              </h2>
              Take your driving experience to the next level
              with our top-notch vehicles for your cross-country adventures.
            </div>

          </div>
          <div className="flex flex-row my-8">
            <div className="w-72">
              <img src={icon2} alt='n' />
            </div>
            <div className="">
              <h2 className="font-bold text-2xl">
                All Inclusive Pricing
              </h2>
              Get everything you need in one convenient,
              transparent price with our all-inclusive pricing policy.
            </div>

          </div>
          <div className="flex flex-row my-8">
            <div className="w-72">
              <img src={icon3} alt='n' />
            </div>
            <div className="">
              <h2 className="font-bold text-2xl">
                No Hidden Charges
              </h2>
              Enjoy peace of mind with our no hidden charges
              policy. We believe in transparent and honest pricing.
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
