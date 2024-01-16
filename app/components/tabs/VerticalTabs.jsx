'use client'
import React, {useState} from "react";

const VerticalTabs = () => {
    const [selectedTab, selectTab] = useState("1");


    return (
        <div className="flex flex-col text-xs gap-2 w-full md:w-9/12 mt-4">

            <div className="flex border-b text-sm">
                <button className={`btn tab rounded-none btn-sm ${selectedTab === "1" ? "active" : ""}`} onClick={() => selectTab("1")}>
                    <i className="fa-solid fa-bolt"></i> Overview
                </button>
                <button className={`btn tab rounded-none btn-sm ${selectedTab === "2" ? "active" : ""}`} onClick={() => selectTab("2")}>
                    <i className="fa-brands fa-servicestack"></i> Internships
                </button>
            </div>

            <div className="w-full rounded-md p-4 bg-gray-50">
                {selectedTab === "1" &&
                    <div>
                        <div className={'text-lg mb-3 font-semibold'}>
                            Apple Careers
                        </div>
                        <p className={'text-xs'}>Apple designs Macs, the best personal computers in the world, along with OS X, iLife, iWork and professional software. Apple leads the digital music revolution with its iPods and iTunes online store. Apple has reinvented the mobile phone with its revolutionary iPhone and App store, and is defining the future of mobile media and computing devices with iPad.</p>
                    </div>
                }
                {selectedTab === "2" &&
                    <div>
                        <div className={'text-lg mb-3 font-semibold'}>
                            Apple Internships
                        </div>
                        <p className={'text-xs'}>Apple hasn't added any jobs yet <br /> Get notified when Apple posts new jobs.</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default VerticalTabs;