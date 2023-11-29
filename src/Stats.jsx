import heroDesktop from "./images/image-header-desktop.jpg";
import heroMobile from "./images/image-header-mobile.jpg";
import React from 'react'

function Stats() {

    return(

        <main className="flex justify-center items-center h-[990px] sm:h-screen">

            <div className="w-[900px] max-w-[90%] h-fit md:flex md:flex-row-reverse rounded-t-xl rounded-b-xl">

                <div className="mb-9 md:mb-0 relative">

                    <picture>

                        <source media="(min-width: 768px)" srcset={heroDesktop} />

                        <img src={heroMobile} alt="Hero Mobile" className="w-full md:w-[1100px] md:h-full rounded-t-xl md:rounded-t-none md:rounded-r-xl" />

                    </picture>

                    <div className="absolute top-0 left-0 w-[100%] h-[100%] overlay opacity-60 rounded-t-xl md:rounded-t-none md:rounded-r-xl"></div>

                </div>

                <div className="card__content p-7 md:py-9">

                    <div className="text-center md:text-left">

                        <h1 className="text-[27px] sm:text-[29px] leading-9 mb-7">Get <span>insights</span> that help your business grow.</h1>

                        <p className="text-[15px] sm:text-[18px]">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>

                    </div>

                    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center p-9 md:pl-0 gap-6">

                        <div className="flex flex-col justify-center items-center gap-2 md:items-start">

                            <h2 className="text-[25px]">10k+</h2>
                            <h3 className="uppercase text-[15px] tracking-[.12rem]">companies</h3>

                        </div>

                        <div className="flex flex-col justify-center items-center gap-2 md:items-start">

                            <h2 className="text-[25px]">314</h2>
                            <h3 className="uppercase text-[15px] tracking-[.12rem]">templates</h3>

                        </div>

                        <div className="flex flex-col justify-center items-center gap-2 md:items-start">

                            <h2 className="text-[25px]">12M+</h2>
                            <h3 className="uppercase text-[15px] tracking-[.12rem]">queries</h3>

                        </div>

                    </div>

                </div>

            </div>

        </main>

    )
}

export default Stats;