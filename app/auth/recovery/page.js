import React from 'react';

const ForgotPassword = () => {
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

            <p className="text-center text-gray-500 bottom-0 py-12 bg-green-300 w-full absolute text-sm">
                &copy;{new Date().getFullYear()} FutureSpace™. All rights reserved.
            </p>

        </div>
    );
};

export default ForgotPassword;