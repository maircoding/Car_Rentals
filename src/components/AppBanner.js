import React from "react";
import appstore from "../assets/download/appstore.svg"
import playstore from "../assets/download/playstore.svg"



function AppBanner() {
    return (
        <div className={`h-[32rem] bg-slate-100 bg-no-repeat bg-right-top bg-[url('./assets/bg02.png')]`}>
            <div className="flex justify-center w-1/2 ">
                <div className="flex flex-col gap-12 mt-16 w-2/3">
                    <div className="font-bold text-5xl">
                        <span>Download our app to get most out of it</span>
                    </div>
                    <div className="text-slate-500">
                        <span>
                            Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.
                        </span>
                    </div>
                    <div className="flex flex-row gap-6">
                        <div>
                            <img src={appstore} alt="App"/>
                        </div>
                        <div>
                            <img src={playstore} alt="App"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppBanner;