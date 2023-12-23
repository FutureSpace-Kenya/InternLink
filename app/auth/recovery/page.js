'use client'
import React from 'react';
import {signOut, useSession} from "next-auth/react";
import Link from "next/link";

const ForgotPassword = () => {
    const {data: session} = useSession()

    if (session) {
        return (
            <main className="min-h-screen grid place-items-center w-full">
                <div className="w-full max-w-md m-4 p-4 ">
                    <center>
                        <div className="w-fit relative flex flex-col items-center">
                            <h2 className="">
                            <span className="text-green-400">
                                 Intern
                            </span>
                                Link&trade; Auth
                            </h2>
                            <div className="absolute top-[35px] right-0 mb-4 text-xs font-medium text-orange-800">
                                By <a className={'text-blue-500'} href="https://futurespace.vercel.app">FutureSpace</a>
                            </div>
                        </div>
                    </center>
                    <div className="w-full flex justify-center items-center flex-col mt-8">
                        <center>
                            <div className="flex w-full items-center justify-center rounded-lg bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                                <div className="max-w-md w-full space-y-8">
                                    <div>
                                        <div className="avatar">
                                            <i className={'fas fa-user-circle fa-5x'}></i>
                                        </div>
                                        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
                                            You are signed in as
                                        </h2>
                                        <p className="mt-2 text-center text-sm text-gray-600">
                                            {session.user.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </center>
                        <div className="flex mt-4 flex-col sm:flex-row w-9/12 gap-3 items-center justify-between">
                            <div className="w-full">
                                <button className={'btn btn-outline text-red-600 ring-2  ring-offset-1 w-full'}  onClick={() => signOut()}>
                                    Sign Out <i className="fas fa-sign-out-alt"> </i>
                                </button>
                            </div>
                            <Link className={'w-full'} href={'/intern/dashboard'}>
                                <button className={'btn btn-outline btn-secondary ring-2  ring-offset-1 w-full'}>
                                    Dashboard <i className="fas fa-arrow-right"> </i>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
    return (
        <div className="min-h-screen grid place-items-center w-full">
            <div className="w-full max-w-md m-4 p-4 ">
                <center>
                    <h2 className="">
                        Forgot Password
                    </h2>
                </center>
                <div className="w-full mt-4">
                    <form className="shadow-sm p-6 rounded">
                        <p className="text-xs max-w-md mb-6 overflow-ellipsis text-gray-500">
                            Enter your email address and we will send you a link to reset your password.
                        </p>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="input input-bordered input-md w-full max-w-md"
                                   id="email" required type="email" placeholder="Email"/>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="btn btn-outline btn-secondary ring-2  ring-offset-1 w-full"
                                    type="button">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/*<p className="text-center text-gray-500 bottom-0 py-12 bg-green-300 w-full absolute text-sm">*/}
            {/*    &copy;{new Date().getFullYear()} FutureSpace™. All rights reserved.*/}
            {/*</p>*/}

        </div>
    );
};

export default ForgotPassword;