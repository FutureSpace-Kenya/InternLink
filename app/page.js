import React from 'react'
import LoginButton from "./components/LoginButton";

export default function Home() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-center">
                <img className="absolute blur-[1px] bottom-2 filter backdrop-filter h-full md:w-full object-cover"
                     src="/student.jpg" alt="Student"/>
                <div className="absolute custom-gradient top-0 left-0 w-full h-full">

                </div>
                <div className="flex bg-student w-full m-2 relative flex-col items-center">
                    <div className="w-fit relative flex flex-col items-center">
                        <h1 className="text-6xl font-bold">
                     <span className="text-green-400">
                                 Intern
                            </span>
                            Link&trade;
                        </h1>
                        <div className="absolute top-[55px] right-0 mb-4 text-sm font-semibold text-orange-800">
                            By <a className={'text-blue-900'} href="https://futurespace.vercel.app">FutureSpace</a>
                        </div>
                    </div>
                    <p className="text-2xl text-center">
                        <br/>
                        Welcome to the future of internships
                    </p>


                    <div className="flex w-full items-center justify-center space-x-4 mt-8">
                        <a href="auth/login">
                            <button className="btn btn-outline btn-primary ring-1 ring-secondary ring-offset-1">
                                <i className={'fas fa-sign-in-alt'}></i> Sign In
                            </button>
                        </a>
                        <a href="auth/register">
                            <button className="btn btn-secondary ring-1 ring-secondary ring-offset-1">
                                <i className={'fas fa-user-plus'}></i> Sign Up
                            </button>
                        </a>
                    </div>
                </div>
                <div className="absolute bottom-5 flex flex-col items-center justify-center scroll">
                    <div className="scroll-downs">
                        <div className="mousey">
                            <div className="scroller"></div>
                        </div>
                    </div>
                    <div className="mt-24 text-rgba font-semibold">
                        Scroll Down
                    </div>
                </div>
            </main>
            <div className="flex flex-col sm:flex-row items-center justify-center w-full">
                <div className="right w-full p-4 sm:w-1/2">
                    <h1 className={'my-2'}>Discover <span className={'text-green-500'}>Intern</span>Link<span
                        className={''}>&trade;</span>
                    </h1>
                    <p>
                        InternLink streamlines the journey for students to secure internships and attachments. Our
                        platform simplifies the application process, enabling students to effortlessly explore and apply
                        for opportunities. Simultaneously, it empowers employers to effortlessly discover and recruit
                        top talent for their internship programs and attachment roles. With InternLink, connecting the
                        potential of tomorrow with the innovations of today just got easier.
                    </p>
                </div>


                <div className="left text-green-800 flex items-center justify-center pt-4 gap-6 w-full p-4 sm:w-1/2">

                    <div className="right flex sm:mt-10 flex-col gap-6">
                        <div className="custom-c-mod relative">
                            <div
                                className="cicle grid place-items-center  from-green-700 to-transparent rounded-full w-20 h-20">
                                <i className="fa-solid text-3xl fa-shield"></i>
                            </div>
                            <svg className="w-24 top-6 absolute h-24">
                                <defs>
                                    <linearGradient id="gradientStroke1" x1="0%" y1="100%" x2="0%" y2="0%">
                                        <stop offset="5%" style={{stopColor: "rgb(206,112,25,0)", stopOpacity: 0}}/>
                                        <stop offset="70%"
                                              style={{stopColor: "rgb(206,112,25)", stopOpacity: 0.5}}/>
                                        <stop offset="100%"
                                              style={{stopColor: "rgba(206,112,25,0.9)", stopOpacity: 1}}/>
                                    </linearGradient>
                                </defs>
                                <circle cx="50%" cy="50%" r="40%" stroke="url(#gradientStroke1)" strokeWidth="4"
                                        fill="transparent"/>
                            </svg>


                            <span className={'text-sm font-semibold'}>
                            Safe & Reliable
                        </span>
                        </div>

                        <div className="custom-c relative">
                        <div
                                className="cicle grid place-items-center  from-green-700 to-transparent rounded-full w-20 h-20">
                            <i className="fa-solid text-3xl fa-rocket"></i>
                        </div>
                            <svg className="w-24 top-6 absolute h-24">
                                <defs>
                                    <linearGradient id="gradientStroke2" x1="0%" y1="100%" x2="0%" y2="0%">
                                        <stop offset="5%" style={{stopColor: "rgb(74, 222, 128,0)", stopOpacity: 0}}/>
                                        <stop offset="70%"
                                              style={{stopColor: "rgb(74, 222, 128,0.5)", stopOpacity: 0.5}}/>
                                        <stop offset="100%"
                                              style={{stopColor: "rgb(74, 222, 128,0.9)", stopOpacity: 1}}/>
                                    </linearGradient>
                                </defs>
                                <circle cx="50%" cy="50%" r="40%" stroke="url(#gradientStroke2)" strokeWidth="4"
                                        fill="transparent"/>
                            </svg>


                            <span className={'text-sm font-semibold'}>
                            A FutureSpace product
                        </span>
                        </div>
                    </div>

                    <div className="right sm:-mt-14 flex flex-col gap-6">
                        <div className="custom-c relative">
                            <div
                                className="cicle grid place-items-center  from-green-700 to-transparent rounded-full w-20 h-20">
                                <i className="fa-solid text-3xl fa-clock-rotate-left"></i>
                            </div>
                            <svg className="w-24 top-6 absolute h-24">
                                <defs>
                                    <linearGradient id="gradientStroke3" x1="0%" y1="100%" x2="0%" y2="0%">
                                        <stop offset="5%" style={{stopColor: "rgb(74, 222, 128,0)", stopOpacity: 0}}/>
                                        <stop offset="70%"
                                              style={{stopColor: "rgb(74, 222, 128,0.5)", stopOpacity: 0.5}}/>
                                        <stop offset="100%"
                                              style={{stopColor: "rgb(74, 222, 128,0.9)", stopOpacity: 1}}/>
                                    </linearGradient>
                                </defs>
                                <circle cx="50%" cy="50%" r="40%" stroke="url(#gradientStroke3)" strokeWidth="4"
                                        fill="transparent"/>
                            </svg>


                            <span className={'text-sm font-semibold'}>
                            Time saving
                        </span>
                        </div>

                        <div className="custom-c-mod relative">
                            <div
                                className="cicle grid place-items-center  from-green-700 to-transparent rounded-full w-20 h-20">
                                <i className="fa-regular text-3xl fa-face-grin-beam"></i>
                            </div>
                            <svg className="w-24 top-6 absolute h-24">
                                <defs>
                                    <linearGradient id="gradientStroke4" x1="0%" y1="100%" x2="0%" y2="0%">
                                        <stop offset="5%" style={{stopColor: "rgb(206,112,25,0)", stopOpacity: 0}}/>
                                        <stop offset="70%"
                                              style={{stopColor: "rgb(206,112,25)", stopOpacity: 0.5}}/>
                                        <stop offset="100%"
                                              style={{stopColor: "rgba(206,112,25,0.9)", stopOpacity: 1}}/>
                                    </linearGradient>
                                </defs>
                                <circle cx="50%" cy="50%" r="40%" stroke="url(#gradientStroke4)" strokeWidth="4"
                                        fill="transparent"/>
                            </svg>


                            <span className={'text-sm font-semibold'}>
                            Free to use
                        </span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
