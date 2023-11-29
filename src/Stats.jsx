import heroDesktop from "./images/image-header-desktop.jpg";
import heroMobile from "./images/image-header-mobile.jpg";
import React from 'react'

function Stats() {

    return(

        <main className="flex justify-center items-center h-screen">

            <div className="w-[500px] max-w-[90%] h-fit">

                <div>

                    <picture className="">

                        <source media="(min-width: 768px)" srcset={heroDesktop} />

                        <img src={heroMobile} alt="Hero Mobile" className="w-full" />

                    </picture>

                    <div></div>

                </div>

                <div className="card__content">

                    <div className="text-center">

                        <h1 className="text-[30px]">Get <span>insights</span> that help your business grow.</h1>

                        <p className="text-[17px]">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>

                    </div>

                    <div className="flex flex-col justify-center items-center">

                        <div className="flex flex-col justify-center items-center">

                            <h2 className="text-[26px]">10k+</h2>
                            <h3 className="uppercase text-[16px]">companies</h3>

                        </div>

                        <div className="flex flex-col justify-center items-center">

                            <h2 className="text-[26px]">314</h2>
                            <h3 className="uppercase text-[16px]">templates</h3>

                        </div>

                        <div className="flex flex-col justify-center items-center">

                            <h2 className="text-[26px]">12M+</h2>
                            <h3 className="uppercase text-[16px]">queries</h3>

                        </div>

                    </div>

                </div>

            </div>

        </main>

    )
}

export default Stats;