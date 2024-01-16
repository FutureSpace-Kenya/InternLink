'use client'
import React, {useState} from "react";

const VerticalTabs = () => {
    const [selectedTab, setSelectedTab] = useState("1");

    return (
        <div className="flex flex-col text-xs gap-2 w-full md:w-9/12 mt-4">

            <div className="flex text-sm gap-2">
                <button onClick={() => setSelectedTab("1")}>
                    <i className="fa-solid fa-mountain"></i> Overview
                </button>
                <button onClick={() => setSelectedTab("2")}>
                    <i className="fa-brands fa-servicestack"></i> Internships
                </button>
            </div>

            <div className="w-full rounded-md p-4 bg-gray-50">
                {selectedTab === "1" &&
                    <div>
                        <div className={'text-lg mb-1 font-semibold'}>
                            Apple Careers
                        </div>
                        <p className={'text-xs'}>Apple designs Macs, the best personal computers in the world, along with OS X, iLife, iWork and professional software. Apple leads the digital music revolution with its iPods and iTunes online store. Apple has reinvented the mobile phone with its revolutionary iPhone and App store, and is defining the future of mobile media and computing devices with iPad.</p>
                    </div>
                }
                {selectedTab === "2" &&
                    <div>
                        <div className={'text-lg mb-1 font-semi bold'}>
                            Jobs at Apple
                        </div>
                        <p className={'text-xs'}>Apple hasn't added any jobs yet <br /> Get notified when Apple posts new jobs.</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default VerticalTabs;