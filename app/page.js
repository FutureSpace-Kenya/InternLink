import React from 'react'
import LoginButton from "./components/LoginButton";
export default function Home() {
    return (
        <>
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
                    <img className="absolute top-0 opacity-60 h-full md:w-full object-cover" src="/student.jpg" alt="Student"/>
            <div className="flex bg-student w-full relative flex-col items-center">
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


                <div className="flex space-x-4 mt-8">
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
        </main>
            <div className="flex bg-primary h-96 flex-col items-center justify-center w-full">
            </div>
        </>
    )
}
