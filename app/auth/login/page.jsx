import Link from "next/link";
import LoginButton from "../../components/LoginButton";
import React from "react";

export default function Login() {
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

                <div className="w-full mt-8">
                    <form className="shadow-sm p-6 rounded">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="input input-bordered input-md w-full max-w-md"
                                   id="email" required type="email" placeholder="Email"/>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="input input-bordered input-md w-full max-w-md" id="password"
                                   type="password" placeholder="******************"/>
                        </div>
                        <div className="flex flex-col gap-3 items-center justify-between">
                            <button className="btn btn-outline btn-secondary ring-2  ring-offset-1 w-full"
                                    type="button">
                                Sign In
                            </button>
                            <div className="flex w-full items-center justify-center">
                                {/*Line*/}
                                <hr className="w-full border-gray-300"/>
                                {/*Text*/}
                                <span className="text-gray-500 mx-3">or</span>
                                {/*Line*/}
                                <hr className="w-full border-gray-300"/>
                            </div>
                            <LoginButton/>
                        </div>
                        <div className="flex text-[12px] underline underline-offset-2 gap-3">
                                <Link className="inline-block align-baseline my-2 text-blue-500 hover:text-blue-800" href={"/auth/recovery"}>
                                    Forgot Password?
                                </Link>
                            <Link className={'inline-block align-baseline my-2 text-blue-500 hover:text-blue-800'}
                                  href={'/auth/register'}>
                                New User? Sign Up
                            </Link>
                        </div>

                    </form>
                </div>
            </div>

        </main>
    )
}