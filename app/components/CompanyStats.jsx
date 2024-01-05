import React from "react";

const CompanyStats = () => {
    const stats = [
        { title: "Applications", value: "89,400", desc: "21% +" },
        { title: "Interviews", value: "1,200", desc: "15% +" },
        { title: "Hires", value: "300", desc: "10% +" },
        // Add more stats as needed
    ];

    return (
        <div className="stats bg-slate-50 shadow">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="stat text-sm p-2 flex flex-col items-center"
                >
                    <div className="stat-title">{stat.title}</div>
                    <div className="stat-value">{stat.value}</div>
                    {/* <div className="stat-desc text-secondary">{stat.desc}</div> */}
                </div>
            ))}
        </div>
    );
};

export default CompanyStats;
