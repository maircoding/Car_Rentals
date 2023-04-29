import React from "react";
import appstore from "../assets/download/appstore.svg"
import playstore from "../assets/download/playstore.svg"



function AppBanner() {
    return (
        <div className={`h-[46rem] md:h-[32rem] bg-slate-100 bg-no-repeat bg-right-top md:bg-[url('./assets/bg02.png')]`}>
            <div className="flex justify-center md:w-1/2 ">
                <div className="flex flex-col gap-16 mt-16 w-3/4 md:w-2/3">
                    <div className="font-bold text-center md:text-left text-5xl">
                        <span>Download our app to get most out of it</span>
                    </div>
                    <div className="text-center md:text-left text-slate-500">
                        <span>
                            Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.
                        </span>
                    </div>
                    <div className="flex flex-col justify-center items-center md:justify-start md:flex-row gap-6">
                        <div className="cursor-pointer">
                            <img src={appstore} alt="App"/>
                        </div>
                        <div className="cursor-pointer">
                            <img src={playstore} alt="App"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppBanner;