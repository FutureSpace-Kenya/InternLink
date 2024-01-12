import React, {useState} from "react";

const VerticalTabs = ({tabs}) => {
    const [selectedTab, setSelectedTab] = useState(tabs[0].id);

    return (
        <div className="flex flex-col md:flex-row text-xs gap-2 w-full md:w-9/12 mt-4">

            <div className="flex text-sm sm:flex-col gap-2">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`w-32 flex gap-2 justify-start items-center pl-2 h-8 rounded-md bg-gray-50 ${selectedTab === tab.id ? "ring-1 ring-offset-1" : ""}`}
                        onClick={() => setSelectedTab(tab.id)}
                        dangerouslySetInnerHTML={{__html: tab.icon + " " +tab.label}}
                    />
                ))}
            </div>

            <div className="w-full rounded-md p-4 bg-gray-50">
                {tabs.map((tab) => selectedTab === tab.id && <div key={tab.id}>
                    <div className={'text-lg mb-1 font-semibold'}>
                        {tab.title}
                    </div>
                    <p className={'text-xs'} dangerouslySetInnerHTML={{__html:tab.content}} />
                </div>)}
            </div>
        </div>
    );
};

export default VerticalTabs;