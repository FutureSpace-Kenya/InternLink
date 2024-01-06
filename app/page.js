import React from 'react'
import LoginButton from "./components/LoginButton";
export default function Home() {
    return (
        <>
        <main className="flex min-h-screen flex-col items-center justify-center">
                    <img className="absolute blur-[1px] top-0 filter backdrop-filter h-full md:w-full object-cover" src="/student.jpg" alt="Student"/>
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
                    <div className="absolute top-[55px] right-0 mb-4 text-sm font-medium text-orange-800">
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
                    <h1 className={'my-2'}>Discover <span className={'text-green-500'}>Intern</span>Link<span className={''}>&trade;</span>
                    </h1>
                    <p>
                    InternLink streamlines the journey for students to secure internships and attachments. Our
                        platform simplifies the application process, enabling students to effortlessly explore and apply
                        for opportunities. Simultaneously, it empowers employers to effortlessly discover and recruit
                        top talent for their internship programs and attachment roles. With InternLink, connecting the
                        potential of tomorrow with the innovations of today just got easier.
                    </p>
                </div>


                <div className="left w-full sm:w-1/2">
                    <div className="custom-c">
                        <i className={'fas fa-user-graduate text-6xl text-green-500'}></i>
                        <span className={'text-xs font-semibold'}>
                            Wide reach
                        </span>
                    </div>
                </div>

            </div>
        </>
    )
}
